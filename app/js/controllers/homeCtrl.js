controllers.controller('HomeCtrl', ['$scope', 'Post' ,function($scope, Post){
  $scope.title = "Welcome to JsApp";
  $scope.posts = Post.query();
  $scope.limit = 50;
}]);