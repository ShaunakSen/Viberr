var myApp = angular.module('omdbApp', []);
myApp.config(function ($httpProvider, $interpolateProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});


myApp.controller('MainController', ['$scope', '$window', '$http', function ($scope, $window, $http) {

	// $scope.testVar = "hello";

	$scope.moviesArray = [];



	var movieName = document.getElementById('album-title').innerHTML;
	$http.get('http://www.omdbapi.com?s=' + movieName).then(function (response) {
        console.log("Data ", response);
		$scope.moviesArray = response.data.Search;
		console.log($scope.moviesArray);
    }, function (response) {
        console.log("error:", response)
    });
}]);
