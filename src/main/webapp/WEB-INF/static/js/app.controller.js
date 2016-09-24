mainApp.controller('homeController', function($scope, $http, PageInfoService,
		$localStorage) {
	$scope.ds = "";
	
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
		
	}
});
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
	   
	   if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null && $scope.reqParamKey3 != null && $scope.reqParamVal3 != null ){
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

		   }
		  }
});

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
		   //For project name
		   $scope.projectTitle = PageInfoService.getProjectTitle();
		   
		  
		   
		   if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null && $scope.reqParamKey3 != null && $scope.reqParamVal3 != null ){

			   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1+"&"+$scope.reqParamKey2+"="+$scope.reqParamVal2+"&"+$scope.reqParamKey3+"="+$scope.reqParamVal3;
			   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null){
				   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1+"&"+$scope.reqParamKey2+"="+$scope.reqParamVal2;
			   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null){
				   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1;
			   }
		   
		   if($scope.reqParam != null){
			    $http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData", {'dataLayer':$scope.dataLayer,'reqParamKeyVal':$scope.reqParam,'projectTitle':$scope.projectTitle})
			    .success(function(data, status, headers) {
			        alert("Data added"+data);
			        $location.path('/thankyou');
			        }).error(function(data, status) {
			         alert("There is an error while adding data with duplicate parameters");
			        });
			   }

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
		 
		 PageInfoService.saveProject($location.host(), $location.port(), $scope.projectTitle, $scope.markets, $scope.businessUnit, $scope.application);
	 }
	
});
mainApp.controller('homePageController', function($scope, $http,
		PageInfoService, $localStorage,$location) {
	
	$scope.projectTitle = PageInfoService.getProjectTitle();
	$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getAllProjects/")
	   .success(function(data, status, headers, response) {
		   if(data){
			   $scope.Projects = data;
			}
	  });
	
	$scope.sendProjectName = function(){
		$scope.projectTitle = $scope.project.projectTitle;
		 PageInfoService.sendProjectName($scope.projectTitle);
	}
	 
});
mainApp.controller('dashboardController', function($scope, $http,
		PageInfoService, $localStorage,$location) {
	$scope.projectTitle = PageInfoService.getProjectTitle();
	$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getProjectDLs/" + $scope.projectTitle)
	   .success(function(data, status, headers, response) {
		   if(data){
			   $scope.DataJson = data;
			}
	  });
	 
});
