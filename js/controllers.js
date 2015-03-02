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
.controller('ThemeController', ['$scope', '$routeParams', 'Theme', function($scope, $routeParams, Theme) {
  $scope.theme = Theme.get({id: $routeParams.id});
}])
.controller('SubthemesController', ['$scope', function($scope) {

}])
.controller('SubthemeController', ['$scope', '$routeParams', 'Subtheme', function($scope, $routeParams, Subtheme) {
  $scope.subtheme = Subtheme.get({id: $routeParams.id});
}])
.controller('PostsController', ['$scope', function($scope) {

}]);
