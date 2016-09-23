mainApp.controller('dashboardController', function($scope, $http, PageInfoService, $localStorage, $templateCache) {
	
	/*$scope.projectTitle = PageInfoService.getProjectTitle();
	var xyz = "";*/
	// $http.jsonp("https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero")
	// $http.jsonp("http://192.168.0.50:8080/ITag2/iTagData?callback=JSON_CALLBACK&name=Super%20Hero")
	// $http.jsonp("http://192.168.0.50:8080/ITag2/iTagData?callback=JSON_CALLBACK")
	//	
	// // callback=JSON_CALLBACK&name=Super%20Hero
	// .then(function(response) {
	// console.log("res" + response);
	// $scope.dashboardData = response.data;
	// // $localStorage.pageInfo = response.data.id[0];
	// console.log("response.data = " + JSON.stringify($scope.dashboardData));
	// });

	// $http.get("/iTag2/src/main/webapp/WEB-INF/static/js/test.json")
	// .success(function(response) {
	// $scope.usersData = response;
	// console.log("$scope.usersData = " + $scope.usersData );
	// });
	//	
	// $http.get('static/js/test.json').success(function(data) {
	// $scope.phones = data;
	// });

	// $http.json('http://192.168.0.50:8080/ITag2/iTagData.json')
	// .success(function(data, status, headers, config) {
	// console.log("response ");
	// $scope.zipCodes = data;
	// console.log(" $scope.zipCodes = " + $scope.zipCodes );
	// });
	// // .error(function(error, status, headers, config) {
	// //// console.log(status);
	// // console.log("Error occured " + status);
	// // });
	// console.log("some test");
	// $http({method: 'JSONP', url:
	// 'http://192.168.0.50:8080/ITag2/iTagData?format=jsonp&callback=JSON_CALLBACK',
	// cache: $templateCache}).
	// then(function(response) {
	// console.log("test");
	// $scope.status = response.status;
	// $scope.data = response.data;
	// alert("$scope.status = " + $scope.status + " $scope.data = " +
	// $scope.data );
	// }, function(response) {
	// $scope.data = response.data || 'Request failed';
	// $scope.status = response.status;
	// alert("$scope.status = " + $scope.status + " $scope.data = " +
	// $scope.data );
	// });

});
mainApp.controller('homeController', function($scope, $http, PageInfoService,
		$localStorage) {
	$scope.ds = "";
	/*
	 * $rootscope.message = "Click on the hyper link to view the students
	 * list."; $rootscope.pageInfo = angular.copy($scope.master); $scope.master =
	 * {country:"country", lastName:""};
	 */
	// $http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks")
	// $http.get("http://localhost:8080/AmexITag2/pageInfo")
	// .then(function(response) {
	// $scope.data = response.data;
	// // alert("$scope.data = " + JSON.stringify($scope.data));
	// // $scope.data = response.data.country;
	// });
//	$http.get("http://192.168.0.50:8080/ITag2/iTagData").then(
//			function(response) {
//				$scope.data = response.data;
//				alert("$scope.data = " + JSON.stringify($scope.data));
//				$scope.data = response.data.country;
//			});
    $scope.show = {
    		intlinkimp : false
    	     };
    
    $scope.disable = false; 
    $scope.disable_Intlinkimp = false;
    
//	alert("$scope.show.Intlinkimp = " + $scope.show.Intlinkimp );
	if (!$localStorage.pageInfo) {
		$scope.pageInfo = {
			country : "",
			business_unit : "",
			application_name : "",
			l4_Hierarchy : "",
			l5_Hierarchy : "",
			l6_Hierarchy : ""
		};
	} else {
		$scope.pageInfo = {
			country : $localStorage.pageInfo.country,
			business_unit : $localStorage.pageInfo.business_unit,
			application_name : $localStorage.pageInfo.application_name,
			l4_Hierarchy : $localStorage.pageInfo.l4_Hierarchy,
			l5_Hierarchy : $localStorage.pageInfo.l5_Hierarchy,
			l6_Hierarchy : $localStorage.pageInfo.l6_Hierarchy
		}
	}
	
	if(!$localStorage.dataJSon){
	}else{
		$scope.digitalData = $localStorage.dataJSon;
	}
	
	
	
	if(!$localStorage.dataJSons){
		$scope.digitalData = {};
	}else{
		$scope.digitalDatas = $localStorage.dataJSons;
	}
	
//	if(!$localStorage.dataJSons){
//	}else{
//		$scope.digitalDatas = $localStorage.dataJSons;
//	}
	
	if(!$localStorage.intlinkimp){
//		console.log("$localStorage.Intlinkimp false");
	}else{
		$scope.show = {
			 intlinkimp : true
		}
	}
	
	if(!$localStorage.radioButtonShow){
//		console.log("$localStorage.Intlinkimp false");
	}else{
		$scope.radioButtonShow = $localStorage.radioButtonShow;
	}
	
	if(!$localStorage.disable){
//		console.log("$localStorage.Intlinkimp false");
	}else{

		$scope.disable = $localStorage.disable;
	}
	
	
	
	if(!$localStorage.disable_Intlinkimp){
//		console.log("$localStorage.Intlinkimp false");
	}else{

		$scope.disable_Intlinkimp = $localStorage.disable_Intlinkimp;
	}
	 
	
	 
	$scope.validate = function() {
		   if ($scope.show.intlinkimp == false) {
			   delete $scope.digitalData.page.attributes;
		   }
	}
	
	$scope.disableHomePage = function(){
//		$scope.digitalData.page.pageInfo = {
//				pageName : "",
//			}
		$scope.digitalData.page.pageInfo.pageName = "";
	}
	
	$scope.Intlinkimp_disable = function(){
		$scope.digitalData.page.attributes.intlinkimp = "";
	}
	
	
//	$scope.validateradioButton = function(){
//		 if($scope.radioButtonShow == 'CA_Submit'){
//			   delete $scope.digitalData.event.CA_Start;
//			   delete $scope.digitalData.event.CA_Financial;
//		   }
//		 
//		   if($scope.radioButtonShow == 'CA_Start'){
//			   delete $scope.digitalData.event.CA_Submit;
//			   delete $scope.digitalData.event.CA_Financial;
//		   }
//		   
//		   if($scope.radioButtonShow == 'CA_Financial'){
//			   delete $scope.digitalData.event.CA_Start;
//			   delete $scope.digitalData.event.CA_Submit;
//		   }
//	}
	 

	$scope.savePageInfo = function() {
		PageInfoService.save($scope.pageInfo);
		// console.log("PageInfoService = " + JSON.stringify($scope.pageInfo));
		$localStorage.pageInfo = $scope.pageInfo;
		$localStorage.page = $scope.page;
	 	if($scope.radioButtonShow == 'CA_Submit'){
//			   alert("$scope.radioButtonShow = " + $scope.radioButtonShow);
//			   $scope.digitalData.event.eventInfo = { 
//					   eventType : "cardApplication",
//					   eventAction : "submit"
//			   };
//			   
			   $scope.digitalData.event = [{
				   eventInfo : {
					   eventType: "cardApplication",
						eventAction: "submit"
				   },
					productInfo: [{
						productName: $scope.digitalDatas.event.productInfo.productName,
						pmc: $scope.digitalDatas.event.productInfo.pmc
					}]  
			   }];
			   
			   
//			   $scope.digitalData.event.productInfoTest = [{
//					productName: $scope.digitalData.event.productInfo.productName,
//					pmc: $scope.digitalData.event.productInfo.pmc
//				}] 
		   }
		   if($scope.radioButtonShow == 'CA_Start'){
//			   alert("$scope.radioButtonShow = " + $scope.radioButtonShow);
//			   $scope.digitalData.event.eventInfo = { 
//					   eventType : "cardApplication",
//					   eventAction : "start"
//			   };
//			   $scope.digitalData.event.productInfoTest = [{
//					productName: $scope.digitalData.event.productInfo.productName,
//					pmc: $scope.digitalData.event.productInfo.pmc
//				}] 
			   
			   $scope.digitalData.event = [{
				   eventInfo : {
					   eventType: "cardApplication",
						eventAction: "start"
				   },
					productInfo: [{
						productName: $scope.digitalDatas.event.productInfo.productName,
						pmc: $scope.digitalDatas.event.productInfo.pmc
					}]  
			   }];			   
		   }
		   if($scope.radioButtonShow == 'CA_Financial'){
//			   alert("$scope.radioButtonShow = " + $scope.radioButtonShow);
//			   $scope.digitalData.event.eventInfo = { 
//					   eventType : "cardApplication",
//					   eventAction : "financialInfo"
//			   };
			   
			   $scope.digitalData.event = [{
				   eventInfo : {
					   eventType: "cardApplication",
						eventAction: "financialInfo"
				   },
					productInfo: [{
						productName: $scope.digitalDatas.event.productInfo.productName,
						pmc: $scope.digitalDatas.event.productInfo.pmc
					}]  
			   }];
//			   $scope.digitalData.event.productInfoTest = [{
//					productName: $scope.digitalData.event.productInfo.productName,
//					pmc: $scope.digitalData.event.productInfo.pmc
//				}] 
		   }
		   
		   if($scope.radioButtonShow == 'CA_LearnMore'){
			   
			   $scope.digitalData.event = [{
				   eventInfo : {
					   eventType: "cardApplication",
						eventAction: "LearnMore"
				   },
					productInfo: [{
						productName: $scope.digitalDatas.event.productInfo.productName,
						pmc: $scope.digitalDatas.event.productInfo.pmc
					}]  
			   }];
		   }
		   
		   
		$localStorage.dataJSon = $scope.digitalData;
		$localStorage.dataJSons = $scope.digitalDatas;
		
//		if($scope.show.Intlinkimp){alert("value is there");}else{alert("no value");}
		$localStorage.radioButtonShow = $scope.radioButtonShow;
		$localStorage.intlinkimp = $scope.show.intlinkimp;
		$localStorage.disable = $scope.disable;
		$localStorage.disable_Intlinkimp = $scope.disable_Intlinkimp;
		
		
		console.log("$scope.radioButtonShow = " + $scope.radioButtonShow);
		console.log("$sceop.show.Intlinkimp = "+ $scope.show.intlinkimp);
		
//		 	if($scope.radioButtonShow == 'CA_Submit'){
//			   alert("$scope.radioButtonShow = " + $scope.radioButtonShow);
//		   }
//		   if($scope.radioButtonShow == 'CA_Start'){
//			   alert("$scope.radioButtonShow = " + $scope.radioButtonShow);
//		   }
//		   if($scope.radioButtonShow == 'CA_Financial'){
//			   alert("$scope.radioButtonShow = " + $scope.radioButtonShow);
//		   }
//		console.log("$scope.page.pageInofrmation.pageName = " + $scope.page.pageInofrmation.pageName);
//		if($scope.page.pageInofrmation.pageName){
//			alert("$scope.page.pageInofrmation.pageName = " + $scope.page.pageInofrmation.pageName);
//		}else{
//			alert("come inside else block");
//			$scope.page.pageInofrmation.pageName = "";
//			alert("$scope.page.pageInofrmation.pageName = " + $scope.page.pageInofrmation.pageName );
//		}

//		var digitData = '{' +
//							'page:' + '{' +
//										'pageInfo:' + '{'
//													+ 'pageName:' + $scope.page.pageInofrmation.pageName +','
//													+ 'country:' + $scope.page.pageInofrmation.country   + ','
//													+ 'language:' + $scope.page.pageInofmation.language + ','
//													+ 'currency:' + $scope.page.pageInofrmation.currency + 
//													'}' +','
//										+'category:' + '{'
//												+ 'businessUnit:' + $scope.page.category.businessUnit + ','
//												+ 'primaryCategory:' + $scope.page.category.primaryCategory + ','
//												+ 'subCategory1:' + $scope.page.category.subCategory1 + ','
//												+ 'subCategory2:' + $scope.page.category.subCategory2 + ','
//												+ 'subCategory3:' + $scope.page.category.subCategory3 
//											+'}' +',' 
//										+ 'attributes:' + '{'
//												+ 'autotrack:' + $scope.page.attributes.autotrack
//											+ '}'
//									+ '}' +
//						'}';
//		console.log("digitData = " + digitData);
//		$localStorage.digitData = digitData;

		// $scope.newcontact = {};
		//		 
		// $http.get('static/js/test.json').success(function(data) {
		// $scope.phones = data;
		// console.log(" $scope.phones = " + JSON.stringify($scope.phones));
		// });
		//		 
		// $http.jsonp('static/js/test.json').success(function(data) {
		// $scope.phones = data;
		// console.log(" $scope.phones = " + JSON.stringify($scope.phones));
		// });

		// $http.jsonp("http://192.168.0.50:8080/ITag2/iTagData?callback=JSON_CALLBACK")
		// .then(function(response) {
		// console.log("res" + response);
		// $scope.dashboardData = response.data;
		// console.log("response.data = " +
		// JSON.stringify($scope.dashboardData));
		// });

		// $http.jsonp('https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')
		// .success(function(data){
		// $scope.datas = data;
		// console.log(" $scope.phones222 = " + JSON.stringify($scope.datas));
		// console.log(data.status);
		// });
		//	        
		// $http.jsonp('http://192.168.0.50:8080/ITag2/iTagData')
		// .success(function(data){
		// $scope.ds = data;
		// console.log(" json from ramesh url= " + JSON.stringify($scope.ds));
		// console.log(data.status);
		// });

		// $http({method: 'JSONP', url: 'static/js/test.json', cache:
		// $templateCache}).
		// then(function(response) {
		// console.log("test");
		// $scope.status = response.status;
		// $scope.data = response.data;
		// alert("$scope.status = " + $scope.status + " $scope.data = " +
		// $scope.data );
		// }, function(response) {
		// $scope.data = response.data || 'Request failed';
		// $scope.status = response.status;
		// alert("$scope.status = " + $scope.status + " $scope.data = " +
		// $scope.data );
		// });

	}
});
// mainApp.controller('pageInfoController', function($scope) {
// mainApp.controller('userInfoController', ['$scope', '$http', DataService
// function($scope, $http) {
mainApp.controller('userInfoController', function($scope, PageInfoService,
		$localStorage) {
	if (!$localStorage.userInfo) {
		$scope.userInfo = {
			accessLevel : false,
			accountStatus : false,
			accountTenure : false,
			industryCode : false,
			seNumber : false,
			mealPreference : false
		};
	} else {
		$scope.userInfo = {
			accessLevel : $localStorage.userInfo.accessLevel,
			accountStatus : $localStorage.userInfo.accountStatus,
			accountTenure : $localStorage.userInfo.accountTenure,
			industryCode : $localStorage.userInfo.industryCode,
			seNumber : $localStorage.userInfo.seNumber,
			mealPreference : $localStorage.userInfo.mealPreference
		}
	}
	$scope.saveUserInfo = function() {
		PageInfoService.saveUser($scope.userInfo);
		$localStorage.userInfo = $scope.userInfo;
	}
});

mainApp.controller('eventInfoController', function($scope, PageInfoService,
		$localStorage) {
	// alert("eventInfo = " + JSON.stringify($scope.eventInfo) );
	// var accountType = localStorageService.set("cdvSwitchType", 167798989);
	// alert("$scope.data = $localStorage.message = " +
	// JSON.stringify($localStorage.message.eventAction));
	// console.log("$scope.data = $localStorage.message = " +
	// JSON.stringify($localStorage.message));

	if (!$localStorage.message) {
		$scope.eventInfo = {
			eventAction : false,
			description : false,
			eventName : false,
			eventType : false

		};
	} else {
		$scope.eventInfo = {
			eventAction : $localStorage.message.eventAction,
			description : $localStorage.message.description,
			eventName : $localStorage.message.eventName,
			eventType : $localStorage.message.eventType
		};
	}

	$scope.saveEventInfo = function() {
		PageInfoService.saveEventInfo($scope.eventInfo);
		$localStorage.message = $scope.eventInfo;

		// alert("PageInfoService = " + JSON.stringify(PageInfoService));

		// $scope.$storage = $localStorage.$default({
		// eventInfo : $scope.eventInfo
		// });
	}
});

//Create Project Controller- Start
mainApp.controller('dashboardController', function($scope, $http,
		PageInfoService, $localStorage, $templateCache) {
	
});


	//Create Project Controller -End
window.onload = function() {
	localStorage.clear();
}

mainApp.controller('thankyouController', function($scope, $http,
		PageInfoService, $localStorage, $location) {
});

mainApp.controller('retrieveDLController', function($scope, $http,
		PageInfoService, $localStorage, $location) {
	
	
	$scope.addRP2 = function() {
		$scope.request_parameter2 = true;
		$scope.button2 = true;
	}

	$scope.addRP3 = function() {
		$scope.request_parameter3 = true;
		$scope.button3 = true;
	}
	
	  $scope.retrieveDataLayer = function(){
//		  alert("$localStorage.jsonData = " + $localStorage.dataJSon);
	//   $scope.dataLayer =$localStorage.pageInfo;// "{'id': 1,'country': 'usa', 'test': 'jdshs'}"; //"{'id': 1,'country': 'usa', 'test': 'jdshs'}";
	   $scope.dataLayer = JSON.stringify($localStorage.dataJSon);
	   //$scope.requestParameter = "{'id': 1,'createdBy': 'Ram', 'userInfoJson': 'jdshs'}";
	   $scope.reqParamKey1 = $scope.selectedDataRP.Request_Parameter1.key;
//	   $scope.reqParamKey2 = $scope.selectedDataRP.Request_Parameter2.key;
//	   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
	   $scope.reqParamVal1 = $scope.selectedDataRP.Request_Parameter1.value;
//	   $scope.reqParamVal2 = $scope.selectedDataRP.Request_Parameter2.value;
//	   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
//	   alert("$scope.reqParamKey1 = " + $scope.reqParamKey1 + " $scope.reqParamVal1= " + $scope.reqParamVal1);
//	   
	   if ($scope.button2) {
//		   alert("inside if");
		   $scope.reqParamKey2 = $scope.selectedDataRP.Request_Parameter2.key;
		   $scope.reqParamVal2 = $scope.selectedDataRP.Request_Parameter2.value;
//		   alert("$scope.reqParamKey2 = " + $scope.reqParamKey2 + " $scope.reqParamVal2= " + $scope.reqParamVal2);
        }else{
//        	alert("inside else");
        }
	   
	   if ($scope.button3) {
//		   alert("inside if");
		   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
		   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
//		   alert("$scope.reqParamKey3 = " + $scope.reqParamKey3 + " $scope.reqParamVal3= " + $scope.reqParamVal3);
        }else{
//        	alert("inside else");
        }
	 
	   
	   
	   var selectedDataa = PageInfoService.getSelectedDetails();//totalJson:$scope.
//	   alert("$scope.reqParamKey1 = " + $scope.reqParamKey1 + " $scope.reqParamVal1 = " + $scope.reqParamVal1);
//	   alert("$scope.reqParamKey2 = " + $scope.reqParamKey2 + " $scope.reqParamVal1 = " + $scope.reqParamVal2);
//	   alert("$scope.reqParamKey3 = " + $scope.reqParamKey3 + " $scope.reqParamVal1 = " + $scope.reqParamVal3);
	   //$http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'requestParameter': $scope.requestParameter})
//	   $http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamKey3':$scope.reqParamKey3,'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2, 'reqParamVal3':$scope.reqParamVal3})
//	   .success(function(data, status, headers) {
//	       alert("Data added");
//	       }).error(function(data, status) {
//	        alert("There is an error while adding data");
//	       });
	   
	   if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null && $scope.reqParamKey3 != null && $scope.reqParamVal3 != null ){
		   //totalJson:$scope.
		   //$http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'requestParameter': $scope.requestParameter})
//		   $http.get("http://localhost:8080/ITag2/saveITagData?", { 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamKey3':$scope.reqParamKey3,'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2, 'reqParamVal3':$scope.reqParamVal3})
//		   $http.get("http://localhost:8080/ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1 + '&' + $scope.reqParamKey2 + "=" + $scope.reqParamVal2  + '&' + $scope.reqParamKey3 + "=" + $scope.reqParamVal3 )
		  $http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1 + '&' + $scope.reqParamKey2 + "=" + $scope.reqParamVal2  + '&' + $scope.reqParamKey3 + "=" + $scope.reqParamVal3 )
		   .success(function(data, status, headers) {
//			   alert("got the data");
			   if(data){
//				   alert("got the data");
//				   alert("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" );
				   $scope.DataJson = data;
				   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
				}else{
					 alert("Please Enter Valid parameters to Fetch the Data Layer");
				}
//			   $scope.DataJson = data;
//			   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
//		       alert("Data added");
//		       $location.path('/thankyou');
		       });
//		       .error(function(data, status) {
////		        alert("Please Enter Valid parameters to Fetch the Data Layer");
//		       });
		   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null){
//		    $http.get("http://localhost:8080/ITag2/saveITagData?", { 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2})
//			$http.get("http://localhost:8080/ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1 + '&' + $scope.reqParamKey2 + "=" + $scope.reqParamVal2)
			$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1 + '&' + $scope.reqParamKey2 + "=" + $scope.reqParamVal2)
		    .success(function(data, status, headers) {
		    	if(data){
//					   alert("got the data");
//		    		 alert("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" );
					   $scope.DataJson = data;
					   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
					}else{
						 alert("Please Enter Valid parameters to Fetch the Data Layer");
					}
//		    	alert("got the data");
//		    	 $scope.DataJson = data;
//				   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
//		        alert("Data added");
//		        $location.path('/thankyou');
		        });
//		        .error(function(data, status) {
//		         alert("There is an error while adding data with duplicate parameters");
//		        });
		   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null){
//		    $http.get("http://localhost:8080/ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1)
			$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1)
		    .success(function(data, status, headers) {
		    	if(data){
//					   alert("got the data");
//		    		 alert("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" );
					   $scope.DataJson = data;
					   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
					}else{
						 alert("Please Enter Valid parameters to Fetch the Data Layer");
					}
//		    	alert("got the data");
//		    	 $scope.DataJson = data;
//		    	 alert("$scope.DataJson =" + $scope.DataJson.length);
//				   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
//		        alert("Data added");
//		        $location.path('/thankyou');
		        });
//		        .error(function(data, status) {
//		         alert("There is an error while adding data with duplicate parameters");
//		        });
		   }
		  }
});
//http://localhost:8080/ITag2/saveITagData?111=111&111=111
//http://localhost:8080/ITag2/getDataLayer?%20123=456
//$http.get('static/js/test.json').success(function(data) {
// $scope.phones = data;
// console.log(" $scope.phones = " + JSON.stringify($scope.phones));
// });


mainApp.controller('reviewInfoController', function($scope, $http,
		PageInfoService, $localStorage, $location) {
	// console.log("eventInfoController on reviewInfoController = " +
	// JSON.stringify($localStorage.message));
	// $scope.selectedData = PageInfoService.getSelectedDetails();
	$scope.selectedData = $localStorage.dataJSon;
	$scope.selectedDatas = $localStorage.dataJSons;
	
	$scope.jsonData = $localStorage.dataJSon;
	$scope.intlinkimp = $localStorage.intlinkimp;
	console.log("$localStorage.Intlinkimp = " + $localStorage.intlinkimp);
	$scope.radioButtonShow = $localStorage.radioButtonShow;
	console.log("$scope.selected.radioButtonShow = $localStorage.radioButtonShow; = " + $localStorage.radioButtonShow);
	
	$scope.edit = function(){
//		alert("clicked on edit");
		$scope.show = true;  
		$scope.hide = true;  
	    document.getElementById('content').disabled = false;
	    document.getElementById("content").focus();
	}
	
	$scope.save = function(){
//		alert("clicked on edit");
		$scope.show = false; 
		$scope.hide = false;
		
	    document.getElementById('content').disabled = true;
	    $scope.updatedJson = (document.getElementById('content').value);
	    var finalJson =$scope.updatedJson.replace(/\\/g, "");
//	    alert(a);
	    $scope.jsonData = JSON.parse(finalJson);
	    $localStorage.finalJson = $scope.jsonData;
	}
	
	// console.log("$scope.selectedData on Review Controller = " +
	// JSON.stringify($scope.selectedData));
	// $scope.selectedData = $localStorage.message;
	// $scope.selectedDataUserInfo = $localStorage.userInfo;
//	$scope.saveDetails = function() {
//		$location.path('/thankyou');
////		// var selectedDataa = new Array();
////		// var userInfoJson = "userInfoJson"//$scope.jsonData;
////		$scope.createdBy = "Test";
////		$scope.userInfoJson = "TestPassed";
////		// $scope.button2 = true;
////		$localStorage.RP = $scope.selectedDataRP;
////		$scope.reqParaKey1 = $scope.selectedDataRP.Request_Parameter1.key;
////		$scope.reqParaKey2 = $scope.selectedDataRP.Request_Parameter2.key;
////		$scope.reqParaKey3 = $scope.selectedDataRP.Request_Parameter3.key;
////		$scope.reqParaVal1 = $scope.selectedDataRP.Request_Parameter1.value;
////		$scope.reqParaVal2 = $scope.selectedDataRP.Request_Parameter2.value;
////		$scope.reqParaVal3 = $scope.selectedDataRP.Request_Parameter3.value;
////		alert($scope.selectedDataRP.Request_Parameter1.key
////				+ $scope.selectedDataRP.Request_Parameter2.key
////				+ $scope.selectedDataRP.Request_Parameter3.key);
////		alert($scope.selectedDataRP.Request_Parameter1.value
////				+ $scope.selectedDataRP.Request_Parameter2.value
////				+ $scope.selectedDataRP.Request_Parameter3.value);
////		var selectedDataa = PageInfoService.getSelectedDetails();// totalJson:$scope.
////		$http.post("http://localhost:8080/ITag2/saveITagData", {
////			'createdBy' : $scope.createdBy,
////			'userInfoJson' : $scope.userInfoJson
////		}).success(function(data, status, headers) {
////			alert("Data added");
////		});
//	}
	

		  $scope.saveDetails = function(){
//			  alert("$localStorage.jsonData = " + $localStorage.dataJSon);
		//   $scope.dataLayer =$localStorage.pageInfo;// "{'id': 1,'country': 'usa', 'test': 'jdshs'}"; //"{'id': 1,'country': 'usa', 'test': 'jdshs'}";
//		   $scope.dataLayer = JSON.stringify($localStorage.dataJSon);
			if($localStorage.finalJson){
				$scope.dataLayer = JSON.stringify($localStorage.finalJson);
			}else{
				 $scope.dataLayer = JSON.stringify($localStorage.dataJSon);
			}
		    
		   //$scope.requestParameter = "{'id': 1,'createdBy': 'Ram', 'userInfoJson': 'jdshs'}";
		   $scope.reqParamKey1 = $scope.selectedDataRP.Request_Parameter1.key;
//		   $scope.reqParamKey2 = $scope.selectedDataRP.Request_Parameter2.key;
//		   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
		   $scope.reqParamVal1 = $scope.selectedDataRP.Request_Parameter1.value;
//		   $scope.reqParamVal2 = $scope.selectedDataRP.Request_Parameter2.value;
//		   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
//		   if($scope.selectedDataRP.Request_Parameter2.key){
//			   alert("inside if");
//		   }else{
//			   alert("inside else");
//		   }
//		   
		   if ($scope.button2) {
//			   alert("inside if");
			   $scope.reqParamKey2 = $scope.selectedDataRP.Request_Parameter2.key;
			   $scope.reqParamVal2 = $scope.selectedDataRP.Request_Parameter2.value;
	        }else{
//	        	alert("inside else");
	        }
		   
		   if ($scope.button3) {
//			   alert("inside if");
			   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
			   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
	        }else{
//	        	alert("inside else");
	        }
		 
		   
		   
		   var selectedDataa = PageInfoService.getSelectedDetails();//totalJson:$scope.
		  
		   
		   if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null && $scope.reqParamKey3 != null && $scope.reqParamVal3 != null ){

			   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1+"&"+$scope.reqParamKey2+"="+$scope.reqParamVal2+"&"+$scope.reqParamKey3+"="+$scope.reqParamVal3;
			   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null){
				   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1+"&"+$scope.reqParamKey2+"="+$scope.reqParamVal2;
			   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null){
				   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1;
			   }
		   
		   if($scope.reqParam != null){
			    $http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData", { 'dataLayer':$scope.dataLayer,'reqParamKeyVal':$scope.reqParam})
			    .success(function(data, status, headers) {
			        alert("Data added"+data);
			        $location.path('/thankyou');
			        }).error(function(data, status) {
			         alert("There is an error while adding data with duplicate parameters");
			        });
			   }
//		   alert("$scope.reqParamKey1 = " + $scope.reqParamKey1 + " $scope.reqParamVal1 = " + $scope.reqParamVal1);
//		   alert("$scope.reqParamKey2 = " + $scope.reqParamKey2 + " $scope.reqParamVal1 = " + $scope.reqParamVal2);
//		   alert("$scope.reqParamKey3 = " + $scope.reqParamKey3 + " $scope.reqParamVal1 = " + $scope.reqParamVal3);
		   //$http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'requestParameter': $scope.requestParameter})
//		   $http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamKey3':$scope.reqParamKey3,'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2, 'reqParamVal3':$scope.reqParamVal3})
//		   .success(function(data, status, headers) {
//		       alert("Data added");
//		       }).error(function(data, status) {
//		        alert("There is an error while adding data");
//		       });
		   
		  /* if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null && $scope.reqParamKey3 != null && $scope.reqParamVal3 != null ){
			   //totalJson:$scope.
			   //$http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'requestParameter': $scope.requestParameter})
//			   $http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamKey3':$scope.reqParamKey3,'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2, 'reqParamVal3':$scope.reqParamVal3})
			   $http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData" , { 'dataLayer':$scope.dataLayer, 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamKey3':$scope.reqParamKey3,'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2, 'reqParamVal3':$scope.reqParamVal3})
			   .success(function(data, status, headers) {
//				   alert("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData" );
			       alert("Data added");
			       $location.path('/thankyou');
			       }).error(function(data, status) {
			        alert("There is an error while adding data with duplicate parameters");
			       });
			   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null){
//			    $http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2})
				$http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData", { 'dataLayer':$scope.dataLayer, 'reqParamKey1':$scope.reqParamKey1, 'reqParamKey2':$scope.reqParamKey2, 'reqParamVal1':$scope.reqParamVal1, 'reqParamVal2':$scope.reqParamVal2})
			    .success(function(data, status, headers) {
//			    	alert("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData" );
			        alert("Data added");
			        $location.path('/thankyou');
			        }).error(function(data, status) {
			         alert("There is an error while adding data with duplicate parameters");
			        });
			   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null){
//			    $http.post("http://localhost:8080/ITag2/saveITagData", { 'dataLayer':$scope.dataLayer,'reqParamKey1':$scope.reqParamKey1, 'reqParamVal1':$scope.reqParamVal1})
				$http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData", { 'dataLayer':$scope.dataLayer,'reqParamKey1':$scope.reqParamKey1, 'reqParamVal1':$scope.reqParamVal1})
			    .success(function(data, status, headers) {
//			    	alert("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData" );
			        alert("Data added");
			        $location.path('/thankyou');
			        }).error(function(data, status) {
			         alert("There is an error while adding data with duplicate parameters");
			        });
			   }*/
			  }
		  
	

	$scope.addRP2 = function() {
		$scope.request_parameter2 = true;
		$scope.button2 = true;
		$scope.buttonMinus = true;
	}

	$scope.addRP3 = function() {
		$scope.request_parameter3 = true;
		$scope.button3 = true;
		$scope.buttonMinus2 = true;
	}
	$scope.deleteRP2 = function(){
		$scope.request_parameter3 = false;
		$scope.button3 = false;
		$scope.request_parameter2 = false;
		$scope.button2 = false;
		$scope.buttonMinus = false;
		$scope.buttonMinus2 = false;
		$scope.selectedDataRP.Request_Parameter2.key = "";
		$scope.selectedDataRP.Request_Parameter2.value = "";
		$scope.selectedDataRP.Request_Parameter3.key = "";
		$scope.selectedDataRP.Request_Parameter3.value = "";
	}
	
	$scope.deleteRP3 = function(){
		$scope.request_parameter3 = false;
		$scope.button3 = false;
		//$scope.request_parameter2 = false;
		//$scope.button2 = false;
		$scope.buttonMinus2 = false;
		$scope.selectedDataRP.Request_Parameter3.key = "";
		$scope.selectedDataRP.Request_Parameter3.value = "";
	}
});

//Create Project Controller

mainApp.controller('createProjectController', function($scope, $http,
		PageInfoService, $localStorage, $location) {
	 $scope.createProject = function(){
		// $scope.reqParamKey1 = $scope.selectedDataRP.Request_Parameter1.key;
		 $scope.projectTitle = $scope.project.title;
		 $scope.markets = $scope.project.markets;
		 $scope.businessUnit = $scope.project.businesUnit;
		 $scope.application = $scope.project.application;
		 
		// if($scope.reqParam != null){
		 PageInfoService.saveProject($location.host(), $location.port(), $scope.projectTitle, $scope.markets, $scope.businessUnit, $scope.application);;
			  /*  $http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagProject", { 'projectTitle':$scope.projectTitle,'markets':$scope.markets,'businessUnit':$scope.businessUnit,'application':$scope.application})
			    .success(function(data, status, headers, response) {
			        alert("Project created");
			        projectTitle = response.data.projectTitle;
			        $location.path('/dashboard');
			        }).error(function(data, status) {
			         alert("There is an error while adding data with duplicate parameters");
			        });*/
			  // }
	 }
	
});
mainApp.controller('homePageController', function($scope, $http,
		PageInfoService, $localStorage,$location) {
	 var xyz = "";
	 
	 
});
