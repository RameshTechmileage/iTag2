var mainApp = angular.module("mainApp", ['ngRoute','ngStorage']);
//var mainApp = angular.module("mainApp", ['ngRoute','localStorageService']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/dashboard', {
			templateUrl: 'static/html/pages/dashboard.html',
			controller: 'dashboardController'
		}).when('/home', {
			templateUrl: 'static/html/pages/home.html',
			controller: 'homeController'
		}).when('/userInfo', {
			templateUrl: 'static/html/pages/userInfo.html',
			controller: 'userInfoController'
		}).when('/eventInfo', {
			templateUrl: 'static/html/pages/eventInfo.html',
			controller: 'eventInfoController'
		}).when('/reviewInfo', {
			templateUrl: 'static/html/pages/reviewInfo.html',
			controller: 'reviewInfoController'
		}).when('/thankyou', {
			templateUrl: 'static/html/pages/thankyou.html',
			controller: 'thankyouController'
		}).when('/retrieve',{
			templateUrl : 'static/html/pages/retrieve.html',
				controller:'retrieveDLController'
		}).when('/createProject',{
			templateUrl : 'static/html/pages/createProject.html',
			controller:'createProjectController'
	}).when('/homePage',{
		templateUrl : 'static/html/pages/homePage.html',
		controller:'homePageController'
})
		.otherwise({
			redirectTo: '/homePage'
		});
});

/*mainApp.controller('StudentController', function($scope, $http) {
	$scope.message = "Click on the hyper link to view the students list.";
	$http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks")
    .then(function(response) {
      $scope.data = response.data;
    });

	
});
*/
