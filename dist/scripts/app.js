// define our app and dependencies
var app = angular.module("app", ["ui.router"]);


app.controller('List.controller', ['$scope', '$http', function($scope, $http) {
    console.log("test");
    $http.get('/scripts/data.json').success(function(res){
        $scope.data = res;
    });

    // Function to display list of workouts
    $scope.getBodyPart = function() {
        var bodyPart = $scope.bodyPart;
      
        //console.log($scope.data);
      
        /*rework if statements
        $scope.data.forEach(function(element) {
          if ($scope.bodyPart === element.bodypart) {
            $scope.jozy = element.list;
            $scope.bodyTitle = element.bodypart;
          }
        });*/

        if(bodyPart === "Biceps"){
           $scope.jozy = $scope.data[0].list;
          $scope.bodyTitle = $scope.data[0].bodypart;
        }
        else if(bodyPart === "Triceps"){
           $scope.jozy = $scope.data[1].list;
          $scope.bodyTitle = $scope.data[1].bodypart;
        }
        else if(bodyPart === "Back"){
           $scope.jozy = $scope.data[2].list;
          $scope.bodyTitle = $scope.data[2].bodypart;
        }
        else if(bodyPart === "Chest"){
           $scope.jozy = $scope.data[3].list;
          $scope.bodyTitle = $scope.data[3].bodypart;
        }
        else if(bodyPart === "Quads"){
           $scope.jozy = $scope.data[4].list;
          $scope.bodyTitle = $scope.data[4].bodypart;
        }
        else if(bodyPart === "Calves"){
           $scope.jozy = $scope.data[5].list;
          $scope.bodyTitle = $scope.data[5].bodypart;
        }
        else if(bodyPart === "Shoulders"){
           $scope.jozy = $scope.data[6].list;
          $scope.bodyTitle = $scope.data[6].bodypart;
        }
        else if(bodyPart === "Traps"){
           $scope.jozy = $scope.data[7].list;
          $scope.bodyTitle = $scope.data[7].bodypart;
        }
        else {
          $scope.jozy = $scope.data[8].list;
          $scope.bodyTitle = $scope.data[8].bodypart;
        }

    };

    // Function to randomize list
    $scope.random = function() {
    return Math.random();
    };



}]);
