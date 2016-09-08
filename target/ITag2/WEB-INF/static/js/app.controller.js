mainApp.controller('dashboardController', function($scope, $http, PageInfoService) {
	$http.get("http://localhost:8080/AmexITag2/dashboardInfo")
    .then(function(response) {
      $scope.dashboardData = response.data;
    });
});
mainApp.controller('homeController', function($scope, $http, PageInfoService,$localStorage) {
	/*$rootscope.message = "Click on the hyper link to view the students list.";
	$rootscope.pageInfo = angular.copy($scope.master);
	$scope.master = {country:"country", lastName:""};*/
	//$http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks")
//	$http.get("http://localhost:8080/AmexITag2/pageInfo")
//    .then(function(response) {
//      $scope.data = response.data;
////      alert("$scope.data = " + JSON.stringify($scope.data));
//    //	$scope.data = response.data.country;
//    });
	$http.get("http://192.168.0.50:8080/ITag2/iTagData").then(function(response) {
   $scope.data = response.data;
   alert("$scope.data = " + JSON.stringify($scope.data));
	$scope.data = response.data.country;
 });
	
	if(!$localStorage.pageInfo){
		$scope.pageInfo = {
				country : "",
				business_unit : "",
				application_name : "",
				l4_Hierarchy : "",
				l5_Hierarchy:"",
				l6_Hierarchy:""
		};
	}else{
		$scope.pageInfo = {
		country : $localStorage.pageInfo.country,
		business_unit : $localStorage.pageInfo.business_unit,
		application_name : $localStorage.pageInfo.application_name,
		l4_Hierarchy : $localStorage.pageInfo.l4_Hierarchy,
		l5_Hierarchy:$localStorage.pageInfo.l5_Hierarchy,
		l6_Hierarchy:$localStorage.pageInfo.l6_Hierarchy
		}
	}
	
	$scope.savePageInfo = function () {
		PageInfoService.save($scope.pageInfo);
		console.log("PageInfoService = " + JSON.stringify($scope.pageInfo));
		 $localStorage.pageInfo = $scope.pageInfo;
       // $scope.newcontact = {};
    }
});
//mainApp.controller('pageInfoController', function($scope) {
//mainApp.controller('userInfoController', ['$scope', '$http', DataService function($scope, $http) {
mainApp.controller('userInfoController', function ($scope, PageInfoService,$localStorage){
	if(!$localStorage.userInfo){
		$scope.userInfo = {
				accessLevel : false,
				accountStatus : false,
				accountTenure : false,
				industryCode : false,
				seNumber:false,
				mealPreference:false
		};
	}else{
		$scope.userInfo = {
		accessLevel : $localStorage.userInfo.accessLevel,
		accountStatus : $localStorage.userInfo.accountStatus,
		accountTenure : $localStorage.userInfo.accountTenure,
		industryCode : $localStorage.userInfo.industryCode,
		seNumber:$localStorage.userInfo.seNumber,
		mealPreference:$localStorage.userInfo.mealPreference
		}
	}
	$scope.saveUserInfo = function () {
		PageInfoService.saveUser($scope.userInfo);
		 $localStorage.userInfo = $scope.userInfo;
    }
});

mainApp.controller('eventInfoController', function ($scope ,PageInfoService, $localStorage){
//	alert("eventInfo =  " + JSON.stringify($scope.eventInfo) );
//	var accountType = localStorageService.set("cdvSwitchType", 167798989);
//	alert("$scope.data = $localStorage.message =  " + JSON.stringify($localStorage.message.eventAction));
//	console.log("$scope.data = $localStorage.message =  " + JSON.stringify($localStorage.message));
	
	if(!$localStorage.message){
		$scope.eventInfo = {
				eventAction : false,
				description : false,
				eventName : false,
				eventType : false
				
		};
	}else{
		$scope.eventInfo = {
				eventAction : $localStorage.message.eventAction,
				description : $localStorage.message.description,
				eventName : $localStorage.message.eventName,
				eventType : $localStorage.message.eventType	
		};	
	}
	
	$scope.saveEventInfo = function () {
		PageInfoService.saveEventInfo($scope.eventInfo);
            $localStorage.message = $scope.eventInfo;
//		alert("PageInfoService = " + JSON.stringify(PageInfoService));
		
//		 $scope.$storage = $localStorage.$default({
//			 eventInfo : $scope.eventInfo
//	       });
    }
});

//function closeIt()
//{
//  return "Any string value here forces a dialog box to \n" + 
//         "appear before closing the window.";
//}
//window.onbeforeunload = closeIt;

window.onload = function(){
	 localStorage.clear();
}

mainApp.controller('thankyouController', function($scope, $http, PageInfoService,$localStorage) {
	
});

mainApp.controller('reviewInfoController', function ($scope, $http, PageInfoService,$localStorage){
	console.log("eventInfoController on reviewInfoController  =  " + JSON.stringify($localStorage.message));
//	$scope.selectedData = PageInfoService.getSelectedDetails();
	$scope.selectedData =  $localStorage.pageInfo;
	$scope.jsonData = $localStorage.pageInfo;
	console.log("$scope.selectedData on Review Controller = " + JSON.stringify($scope.selectedData));
//	$scope.selectedData = $localStorage.message;
//	$scope.selectedDataUserInfo = $localStorage.userInfo;
	$scope.saveDetails = function(){
		//var selectedDataa = new Array();
		//var userInfoJson = "userInfoJson"//$scope.jsonData;
		$scope.createdBy = "Test";
		$scope.userInfoJson = "TestPassed";
		var selectedDataa = PageInfoService.getSelectedDetails();//totalJson:$scope.
		$http.post("http://localhost:8080/ITag2/saveITagData", { 'createdBy':$scope.createdBy, 'userInfoJson': $scope.userInfoJson})
		.success(function(data, status, headers) {
			   alert("Data added");
		    });
	}
});
