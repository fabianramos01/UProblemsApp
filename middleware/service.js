angular.module('demo', [])
    .controller('text', function($scope, $http) {

        $http.get('http://10.4.74.210:3001').
        then(function successCallback(response) {
            $scope.texto = response.data;
        });

        /*
	, function errorCallback(response){
		$http.get('http://10.4.17.213:3015').
			then(function successCallback(response) {
			$scope.texto = response.data;
		}, function(response){
            $scope.texto = "No hay conexión";
        });
	}*/
    });

/*
http://localhost:3014
http://10.4.17.213:3015
*/