angular.module('historyBoard.services', [])
.factory('Theme', ['$resource', function($resource) {
  return $resource('http://localhost:3000/themes/:id');
}])
.factory('Subtheme', ['$resource', function($resource) {
  return $resource('http://localhost:3000/subthemes/:id');
}])
.factory('Post', ['$resource', function($resource) {
  return $resource('http://localhost:3000/posts/:id');
}])
.factory('Comment', ['$resource', function($resource) {
  return $resource('http://localhost:3000/comments/:id');
}]);
