angular.module('historyBoard.controllers', [])
.controller('ThemesController', ['$scope', '$upload', 'Theme', function($scope, $upload, Theme) {

  var getThemes = function() {
    $scope.themes = Theme.query();
  }

  // Needs proper validation and proper form
  $scope.createTheme = function() {
    if ($scope.file) {
      $upload.upload({
        url: 'http://localhost:3000/themes',
        fields: {
          'theme[description]': $scope.description,
          'theme[title]': $scope.title
        },
        file: $scope.file,
        fileFormDataName: 'theme[image]'
      })
      .success(function(reply, status, headers, config) {
        getThemes();
      });
    }
  }
  getThemes();
}])
.controller('ThemeController', ['$scope', '$routeParams', 'Theme', 'Subtheme', function($scope, $routeParams, Theme, Subtheme) {
  $scope.theme = Theme.get({id: $routeParams.id});

  $scope.createSubtheme = function() {
    var newSub = new Subtheme({
      subtheme: {
        title: $scope.title,
        theme_id: $scope.theme.id
      }
    });
    $scope.theme.subthemes.push(newSub);
    newSub.$save();
  };
}])
.controller ('SubthemesController', ['$scope', 'Subtheme', function($scope, Subtheme) {

  var getSubthemes = function() {
    $scope.subthemes = Subtheme.query();
  };

  $scope.createSubtheme = function() {
    var newSub = new Subtheme({
      subtheme: {
        title: $scope.title,
        theme_id: $scope.theme.id
      }
    });
    $scope.theme.subthemes.push(newSub);
    newSub.$save();
  };
  getSubthemes();
}])
.controller('SubthemeController', ['$scope', '$routeParams', '$upload', 'Subtheme', function($scope, $routeParams, $upload, Subtheme) {
  var getSubtheme = function() {
    $scope.subtheme = Subtheme.get({id: $routeParams.id});
  };


  // Needs proper validation and proper form
  $scope.createPost = function() {
    if ($scope.file) {
      $upload.upload({
        url: 'http://localhost:3000/posts',
        fields: {
          'post[description]': $scope.description,
          'post[title]': $scope.title,
          'post[subtheme_ids]': [$scope.subtheme.id],
          'post[all_tags]' : $scope.all_tags
        },
        file: $scope.file,
        fileFormDataName: 'post[image]'
      })
      .success(function(reply, status, headers, config) {
        getSubtheme();
      });
    }
  };
  getSubtheme();
}])
.controller('PostsController', ['$scope', '$upload', '$http', 'Post', function($scope, $upload, $http, Post) {
  $scope.subtheme_sel = null;
    $scope.subthemes = [];
    $http.get('http://localhost:3000/subthemes.json').success(function (result) {
        $scope.subthemes = result;
    });

  var getPosts = function() {
    $scope.posts = Post.query();
  }
  getPosts();

  $scope.createPost = function() {
    if ($scope.file) {
      $upload.upload({
        url: 'http://localhost:3000/posts',
        fields: {
          'post[description]': $scope.description,
          'post[title]': $scope.title,
          'post[subtheme_ids]': [$scope.subtheme_sel],
          'post[all_tags]': $scope.all_tags
        },
        file: $scope.file,
        fileFormDataName: 'post[image]'
      })
      .success(function(reply, status, headers, config) {
        getPosts();
      });
    }
  };

}])
.controller('PostController', ['$scope', '$routeParams', 'Post', 'Comment', function($scope, $routeParams, Post, Comment) {
  $scope.post = Post.get({id: $routeParams.id});
  // add validations
  $scope.createComment = function() {
    var newCom = new Comment({
      comment: {
        post_id: $scope.post.id,
        body: $scope.body
      }
    });
    $scope.post.comments.push(newCom);
    newCom.$save();
  };
}])
.controller('SignupController', ['$scope', '$auth', '$location', function($scope, $auth, $location) {
  $scope.register = function(user) {
    $auth.submitRegistration(user)
    .then(function(resp) {
      $location.path('/');
    })
    .catch(function(resp) {
      // handle error response
    });
  };
}])
.controller('LoginController', ['$scope', '$auth', function($scope, $auth) {
  $scope.login = function(user) {
    $auth.submitLogin(user)
    .then(function(resp) {
      $location.path('/');
    })
    .catch(function(resp) {
      // handle error response
    });
  };
}])
.controller('MainController', ['$scope', '$auth', function($scope, $auth) {
  $auth.validateUser();
}]);
