// define our app and dependencies
var app = angular.module("app", ["ui.router"]);


app.controller('List.controller', ['$scope', '$http', function($scope, $http) {
    console.log("test");
    $http.get('/scripts/data.json').success(function(res){
        $scope.data = res;
            console.log($scope.data[0].list);
    });
    
    // Function to add new task
    $scope.getBodyPart = function() {
        var bodyPart = $scope.bodyPart;
        console.log(bodyPart);
    };
    

}]);

/*blocJams.controller('Album.controller', ['$scope','SongPlayer', function($scope, SongPlayer){
    $scope.album = albumPicasso;
    $scope.playSong = function(song) {
        SongPlayer.setSong($scope.album, song); 
    };  
}]);*/