angular.module('historyBoard', [
  'ngRoute',
  'ngResource',
  'angularFileUpload',
  'historyBoard.services',
  'historyBoard.controllers'
])
.config(['$routeProvider', function($routeProvider) {
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
  .otherwise({
    redirectTo: '/'
  });
}]);
