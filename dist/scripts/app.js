// define our app and dependencies
var app = angular.module("workout", ["ui.router"]);

app.controller('List.controler', function($scope, $http) {
  $http.get('data.json')
       .then(function(res){
          $scope.data = res.data;                
        });
});