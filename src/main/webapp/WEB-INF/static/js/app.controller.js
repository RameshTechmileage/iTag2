mainApp.controller('homeController', function($scope, $http, PageInfoService, $localStorage,$location) {
	$scope.ds = "";
    $scope.show = {
    		intlinkimp : false
    	  };
    $scope.disable = false; 
    $scope.disable_Intlinkimp = false;
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
	if(!$localStorage.disable){
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
		$localStorage.digitalData = $scope.digitalData;
		$localStorage.digitalDatas = $scope.digitalDatas;
		
		$localStorage.pageInfo = $scope.pageInfo;
		$localStorage.page = $scope.page;
		$localStorage.dataLayerName = $scope.dataLayerName;
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
						eventAction: "learnMore"
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
			console.log("$scope.radioButtonShow = " + $scope.radioButtonShow);
			console.log("$sceop.show.Intlinkimp = "+ $scope.show.intlinkimp);
	}
	
	//For Pre populating Project Details
	
	$scope.dataLayerName = $localStorage.dataLayerName;
	
	if($scope.dataLayerName){
		$scope.digitalData = $localStorage.digitalData;
		$scope.digitalDatas = $localStorage.digitalDatas;
		$scope.dataLayerName = $localStorage.dataLayerName;
	}else{
	
		$scope.projectTitle = PageInfoService.getProjectTitle();
		$scope.projectId = PageInfoService.getProjectId();
	    $http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getProjectById/"+$scope.projectId)
	       .success(function(data, status, headers, response) {
	    	  if(data){}
	    	   $scope.digitalData = {};
	    	   $scope.digitalData.page = {};
	    	   $scope.digitalData.page.pageInfo = {};
	    	   $scope.digitalData.page.category = {};
	    	   $scope.digitalData.page.pageInfo.country = data.markets;
	    	   $scope.digitalData.page.category.businessUnit= data.businessUnit;
	    	   $scope.digitalData.page.category.primaryCategory = data.application;
	        }).error(function(data,status){
	         alert("There is an error while adding DL data with duplicate parameters ");
	        });
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

	//Create Project Controller -End
window.onload = function() {
	localStorage.clear();
}

/*mainApp.controller('thankyouController', function($scope, $http,
		PageInfoService, $localStorage, $location) {
});*/

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
        }else{
     }
	 if ($scope.button3) {
		   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
		   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
      }else{
   }
	var selectedDataa = PageInfoService.getSelectedDetails();
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

mainApp.controller('reviewInfoController', function($scope, $http,
		PageInfoService, $localStorage, $location) {
	$scope.selectedData = $localStorage.dataJSon;
	$scope.selectedDatas = $localStorage.dataJSons;
	$scope.dataLayerName = $localStorage.dataLayerName;
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
        }else{
        }
	   if ($scope.button3) {
		   $scope.reqParamKey3 = $scope.selectedDataRP.Request_Parameter3.key;
		   $scope.reqParamVal3 = $scope.selectedDataRP.Request_Parameter3.value;
        }else{
        }
	   var selectedDataa = PageInfoService.getSelectedDetails();//totalJson:$scope.
	   $scope.projectId = PageInfoService.getProjectId();
	  
	   if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null && $scope.reqParamKey3 != null && $scope.reqParamVal3 != null ){
		   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1+"&"+$scope.reqParamKey2+"="+$scope.reqParamVal2+"&"+$scope.reqParamKey3+"="+$scope.reqParamVal3;
		   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null && $scope.reqParamKey2 != null && $scope.reqParamVal2 != null){
			   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1+"&"+$scope.reqParamKey2+"="+$scope.reqParamVal2;
		   }else if($scope.reqParamKey1 != null && $scope.reqParamVal1 != null){
			   $scope.reqParam = $scope.reqParamKey1+"="+$scope.reqParamVal1;
		   }
	   
	   if($scope.reqParam != null){
		    $http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData", {'dataLayer':$scope.dataLayer,'reqParamKeyVal':$scope.reqParam,'projectId': $scope.projectId,'dataLayerName':$scope.dataLayerName})
		    .success(function(data, status, headers) {
		        alert("Data added"+data);
		        $localStorage.$reset();
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
		PageInfoService, $localStorage,$location,$timeout) {
	
	//$scope.projectTitle = PageInfoService.getProjectTitle();
	//$scope.projectId = PageInfoService.getProjectId();
	 $localStorage.$reset();
	$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getAllProjects/")
	   .success(function(data, status, headers, response) {
		   if(data){
			   $scope.Projects = data;
			}
	  });
	
	$scope.sendProjectName = function(projectTitle){
		 PageInfoService.sendProjectName(projectTitle);
	}
	$scope.sendProjectId = function(projectId){
		 PageInfoService.sendProjectId(projectId);
	}
	//Copy
	
	$scope.copytheproject = function(projectId){
        console.log(projectId);
        var copiedProjectTitle;
        var copiedProject;
        $http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getProjectById/"+projectId)
          .success(function(data, status, headers, response) {
             //projectName=  response.data.projectTitle;
            if(data){
               copiedProject=data;
               copiedProjectTitle=copiedProject.projectTitle+"_copy";
               copiedProject.projectTitle=copiedProjectTitle;
               
               $scope.projectTitle = copiedProjectTitle;
               $scope.markets = copiedProject.markets;
               $scope.businessUnit = copiedProject.businessUnit;
               $scope.application = copiedProject.application;
               console.log("PT :"+copiedProject.projectTitle+"CON "+copiedProject.markets+" BU "+copiedProject.businessUnit+" APP "+copiedProject.application);
               var copiedDL="";
               var reqParamKeyVal="";
               var DLsuccess="";
               PageInfoService.saveProject($location.host(),$location.port(),$scope.projectTitle,$scope.markets,$scope.businessUnit,$scope.application);
               console.log( "$timeout 1" );
               $http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getProjectDLs/" +projectId)
                   .success(function(dataLayerdata, status, headers, response) {
                         if(dataLayerdata){
                        	   $scope.projectId = PageInfoService.getProjectId();
                                for(i=0;i<dataLayerdata.length;i++){
                                      console.log("Get DLs :"+dataLayerdata[i].dataLayer);
                                      copiedDL=dataLayerdata[i].dataLayer;
                                      reqParamKeyVal="";
                                      $scope.dataLayerName = dataLayerdata[i].dataLayerName;
                                      console.log("copiedDL : "+copiedDL+" reqparamKV :"+reqParamKeyVal);
                                     // alert("copiedDL"+copiedDL+"reqParamKeyVal"+reqParamKeyVal+"copiedProjectTitle"+copiedProjectTitle);
                                      $http.post("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/saveITagData", { 'dataLayer':copiedDL,'reqParamKeyVal':reqParamKeyVal,'projectId':$scope.projectId,'dataLayerName':$scope.dataLayerName})
                                      .success(function(data, status, headers, response) {
                                     // alert("data added"+data);
                                      DLsuccess = true;
                                      }).error(function(data,status){
                                           alert("There is an error while adding DL data with duplicate parameters ");
                                      });
                                } 
                                if(DLsuccess==true){
                                      $scope.Projects.push(copiedProjectTitle);
                                      PageInfoService.sendProjectId($scope.projectId);
                                    //  PageInfoService.sendProjectName(copiedProjectTitle);
                                }
                         
                           }
                  });
            }
      }).error(function(data,status){
         $location.path('/CreateProject');
         alert("There is an error while adding data  with duplicate Poject Name ");
      });
  }
});
mainApp.controller('dashboardController', function($scope, $http,
		PageInfoService, $localStorage,$location) {
	$scope.projectId = PageInfoService.getProjectId();
	
	$scope.getDataLayers = function(){
	$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getProjectDLs/" + $scope.projectId)
	   .success(function(data, status, headers) {
		   if(data){
			   $scope.DataJson = data;
		        var dataLayer_list = [];
		        for (var i = 0; i < data.length; i++) {
		        	var id = data[i].id;
		        	var requestKeyVal = data[i].reqParamKeyVal;
		        	var dataLayerName = data[i].dataLayerName;
		        	dataLayer_list.push({
		                    "dataLayerName": dataLayerName,
		                    "id" : id,
		                    "requestKeyVal" : requestKeyVal
		                	});
		            }
		        $scope.page_data_layer = dataLayer_list;
			}
	  });
	}
	
	$scope.deleteDL = function(dataLayer){
		alert("Are you sure want to delete")
		$scope.id = dataLayer.id;
		$http.delete("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/deleteDL/" + $scope.id)
		   .success(function(data, status, headers) {
			   $scope.getDataLayers();
		  });
	}
	$scope.getDataLayers();
	
	$scope.getProjectTitle = function(){
		$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getProjectById/" + $scope.projectId)
		   .success(function(data, status, headers) {
			   $scope.projectTitle = data.projectTitle;
		  });
	}
	$scope.getProjectTitle();
	
});

mainApp.run(function($rootScope, $location) {
    $rootScope.location = $location;

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (!current && next.$$route.originalPath == '/dashboard') {
        $location.path('/homePage');
      }
    });
});
