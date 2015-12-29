controllers.controller('AboutCtrl', ['$scope', 'About', function($scope, About){
  $scope.content = About.content;
  $scope.image = About.image;
}]);