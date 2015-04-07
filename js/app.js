angular.module('historyBoard', [
  'ngRoute',
  'ngResource',
  'angularFileUpload',
  'ng-token-auth',
  'historyBoard.services',
  'historyBoard.controllers',
  'historyBoard.directives',
  'templates'
])
.config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider) {

  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });
  // Configure application routes
  $routeProvider
  .when('/', {
    templateUrl: 'partials/themes.html',
    controller: 'ThemesController'
  })
  .when('/themes/:id', {
    templateUrl: 'partials/theme.html',
    controller: 'ThemeController'
  })
  .when('/subthemes', {
    templateUrl: 'partials/subthemes.html',
    controller: 'SubthemesController'
  })
  .when('/subthemes/:id', {
    templateUrl: 'partials/subtheme.html',
    controller: 'SubthemeController'
  })
  .when('/posts', {
    templateUrl: 'partials/posts.html',
    controller: 'PostsController'
  })
  .when('/posts/:id', {
    templateUrl: 'partials/post.html',
    controller: 'PostController'
  })
  .when('/signup', {
    templateUrl: 'partials/signup.html',
    controller: 'SignupController'
  })
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
