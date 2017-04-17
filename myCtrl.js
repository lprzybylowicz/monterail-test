myApp.controller('myCtrl', ['$scope', '$http', '$log', '$routeParams', function ($scope, $http, $log, $routeParams) {
    angular.element(window.document.body).ready(function () {
         $scope.getData();
    });

    $scope.orderquery = 'features.question.time';
     $scope.clicked = false;

    $scope.overflow_mode = function(mode) {
        document.body.style.overflow = mode;
    }
    
    $scope.addRow = function() {
        
        let arrItem = JSON.parse(JSON.stringify($scope.monterailArr[0]));
        arrItem["$$hashKey"] = "object:" + Math.floor((Math.random() * 1000) + 100);
        $scope.monterailArr.push(arrItem);
    }
    
    $scope.vote = function(person, sum, vote) {
        sum = parseInt(sum);
        $http.patch('https://monterail-test-project.firebaseio.com/people/'+person+'.json', { 
            votes: sum+vote
        })
        .success(function(result){
            console.log('success');
            $scope.getData();
       })  
        .error(function (data, status) {
            console.log('error');  
        });       
    };
    
    $scope.name = $routeParams.name;
    $scope.currentPerson = {};
    $scope.relatedPerson = {};
    $scope.monterail;
    $scope.monterailArr = [];
    
    $scope.getData = function() {
        $http.get('https://monterail-test-project.firebaseio.com/people.json')
            .success(function(result) {

                $scope.monterail = result;
            Object.keys($scope.monterail).map(function(item){
                $scope.monterailArr.push($scope.monterail[item]);
            });
            console.log($scope.monterailArr);    
            console.log(result);                    
                console.log("getData SUCCESS");
            })
            .error(function (data) {
                console.log(data); 
            })
    };    
}]);


