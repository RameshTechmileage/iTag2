mainApp.controller('dashboardController', function($scope, $http,PageInfoService, $localStorage, $templateCache,$location) {
		  $http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getAllDataLayer")
		   .success(function(data, status, headers) {
			   if(data){
				   $scope.DataJson = data;
			        var page_name_list = [];
			        for (var i = 0; i < data.length; i++) {

			        	var dataStructure = data[i].dataLayer;
			        	var obj = JSON.parse(dataStructure);
			        	var pageName = obj.page.pageInfo.pageName
			        	page_name_list.push({
			                    "pageName": pageName
			                });
			            }
			        $scope.page_name_l = page_name_list;;
				}
		  });
});


mainApp.controller('homeController', function($scope, $http, PageInfoService,$localStorage) {
	$scope.ds = "";
    $scope.show = { intlinkimp : false };
    $scope.disable = false; 
    $scope.disable_Intlinkimp = false;
	
	if(!$localStorage.dataJSon){
	}else{
		$scope.digitalData = $localStorage.dataJSon;
	}
	
	if(!$localStorage.dataJSons){
		$scope.digitalData = {};
	}else{
		$scope.digitalDatas = $localStorage.dataJSons;
	}
	
	
	if(!$localStorage.intlinkimp){
	}else{
		$scope.show = {
			 intlinkimp : true
		}
	}
	
	if(!$localStorage.radioButtonShow){
	}else{
		$scope.radioButtonShow = $localStorage.radioButtonShow;
	}
	
	if(!$localStorage.disable){;
	}else{

		$scope.disable = $localStorage.disable;
	}
	
	
	
	if(!$localStorage.disable_Intlinkimp){
	}else{

		$scope.disable_Intlinkimp = $localStorage.disable_Intlinkimp;
	}
	 
	
	 
	$scope.validate = function() {
		   if ($scope.show.intlinkimp == false) {
			   delete $scope.digitalData.page.attributes;
		   }
	}
	
	$scope.disableHomePage = function(){
		$scope.digitalData.page.pageInfo.pageName = "";
	}
	
	$scope.Intlinkimp_disable = function(){
		$scope.digitalData.page.attributes.intlinkimp = "";
	}
	
	$scope.savePageInfo = function() {
		PageInfoService.save($scope.pageInfo);
		$localStorage.pageInfo = $scope.pageInfo;
		$localStorage.page = $scope.page;
	 	if($scope.radioButtonShow == 'CA_Submit'){			   
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
		$localStorage.radioButtonShow = $scope.radioButtonShow;
		$localStorage.intlinkimp = $scope.show.intlinkimp;
		$localStorage.disable = $scope.disable;
		$localStorage.disable_Intlinkimp = $scope.disable_Intlinkimp;
	}
});

mainApp.controller('userInfoController', function($scope, PageInfoService,$localStorage) {
	$scope.saveUserInfo = function() {
		PageInfoService.saveUser($scope.userInfo);
		$localStorage.userInfo = $scope.userInfo;
	}
});

mainApp.controller('eventInfoController', function($scope, PageInfoService,$localStorage) {

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
		  
	   $scope.dataLayer = JSON.stringify($localStorage.dataJSon);
	   $scope.reqParamKey1 = $scope.selectedDataRP.Request_Parameter1.key;
	   $scope.reqParamVal1 = $scope.selectedDataRP.Request_Parameter1.value;
	   
	   if ($scope.button2) {
		   $scope.reqParamKey2 = $scope.selectedDataRP.Request_Parameter2.key;
		   $scope.reqParamVal2 = $scope.selectedDataRP.Request_Parameter2.value;
        }
	   
	   if ($scope.button3) {
		   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
		   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
        }
	 
	   var selectedDataa = PageInfoService.getSelectedDetails();//totalJson:$scope.
	   
	   if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null && $scope.reqParamKey3 != null && $scope.reqParamVal3 != null ){
		  $http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1 + '&' + $scope.reqParamKey2 + "=" + $scope.reqParamVal2  + '&' + $scope.reqParamKey3 + "=" + $scope.reqParamVal3 )
		   .success(function(data, status, headers) {
			   if(data){
				   $scope.DataJson = data;
				   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
				}else{
					 alert("Please Enter Valid parameters to Fetch the Data Layer");
				}
		   });

		   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null){
			$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1 + '&' + $scope.reqParamKey2 + "=" + $scope.reqParamVal2)
		    .success(function(data, status, headers) {
		    	if(data){
					   $scope.DataJson = data;
					   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
					}else{
						 alert("Please Enter Valid parameters to Fetch the Data Layer");
					}
		        });
		   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null){
				$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getDataLayer?" + $scope.reqParamKey1 + "=" + $scope.reqParamVal1)
			    .success(function(data, status, headers) {
			    	if(data){
						   $scope.DataJson = data;
						   console.log(" $scope.DataJson = " + JSON.stringify($scope.DataJson));
						}else{
							 alert("Please Enter Valid parameters to Fetch the Data Layer");
						}
			    });
		   }
		  }
});

mainApp.controller('reviewInfoController', function($scope, $http,PageInfoService, $localStorage, $location) {
	$scope.selectedData = $localStorage.dataJSon;
	$scope.selectedDatas = $localStorage.dataJSons;
	
	$scope.jsonData = $localStorage.dataJSon;
	$scope.intlinkimp = $localStorage.intlinkimp;
	console.log("$localStorage.Intlinkimp = " + $localStorage.intlinkimp);
	$scope.radioButtonShow = $localStorage.radioButtonShow;
	console.log("$scope.selected.radioButtonShow = $localStorage.radioButtonShow; = " + $localStorage.radioButtonShow);
	
	$scope.edit = function(){
		$scope.show = true;  
		$scope.hide = true;  
	    document.getElementById('content').disabled = false;
	    document.getElementById("content").focus();
	}
	
	$scope.save = function(){
		$scope.show = false; 
		$scope.hide = false;
	    document.getElementById('content').disabled = true;
	    $scope.updatedJson = (document.getElementById('content').value);
	    var finalJson =$scope.updatedJson.replace(/\\/g, "");
	    $scope.jsonData = JSON.parse(finalJson);
	    $localStorage.finalJson = $scope.jsonData;
	}
	

	  $scope.saveDetails = function(){
		if($localStorage.finalJson){
			$scope.dataLayer = JSON.stringify($localStorage.finalJson);
		}else{
			 $scope.dataLayer = JSON.stringify($localStorage.dataJSon);
		}
	    
	   $scope.reqParamKey1 = $scope.selectedDataRP.Request_Parameter1.key;
	   $scope.reqParamVal1 = $scope.selectedDataRP.Request_Parameter1.value;

	   if ($scope.button2) {
		   $scope.reqParamKey2 = $scope.selectedDataRP.Request_Parameter2.key;
		   $scope.reqParamVal2 = $scope.selectedDataRP.Request_Parameter2.value;
        }
	   
	   if ($scope.button3) {
		   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
		   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
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
		$scope.buttonMinus2 = false;
		$scope.selectedDataRP.Request_Parameter3.key = "";
		$scope.selectedDataRP.Request_Parameter3.value = "";
	}
});

mainApp.controller('createProjectController', function($scope, $http,PageInfoService, $localStorage, $location) {
	 $scope.createProject = function(){
		 $scope.projectTitle = $scope.project.title;
		 $scope.markets = $scope.project.markets;
		 $scope.businessUnit = $scope.project.businesUnit;
		 $scope.application = $scope.project.application;
		 PageInfoService.saveProject($location.host(), $location.port(), $scope.projectTitle, $scope.markets, $scope.businessUnit, $scope.application);
	 }
	
});

mainApp.controller('homePageController', function($scope, $http,PageInfoService, $localStorage,$location) {
	 var xyz = "";	 
});
