mainApp.service('PageInfoService', function($http, $location, $timeout, $q) {

	var deferred = $q.defer();
	var deferredProjectId;
	var pageDetails = {};
	var userDetails = {};
	var eventDetails ={};
	var test ={};
	var finalJson = new Array();
	var projectName = {};
	var projectId = {};
	
	this.save = function(pageInfo) {
		pageDetails = pageInfo;
		console.log("pageDetails = " + JSON.stringify(pageDetails));
	},
	
	this.saveUser = function(userInfo) {
		userDetails = userInfo;
		console.log("userDetails = " + JSON.stringify(userDetails));
	},
	
	this.saveProjectName = function(userInfo) {
		userDetails = userInfo;
		console.log("userDetails = " + JSON.stringify(userDetails));
	}
	
	this.saveEventInfo = function(eventInfo) {
		// eventDetails = eventInfo;
		finalJson.push(pageDetails);
		finalJson.push(userDetails);
		finalJson.push(eventInfo);
		console.log("eventInfo = " + JSON.stringify(eventInfo));
	}
	
	this.getSelectedDetails = function(){
		return finalJson;
		console.log("finalJson  = " + JSON.stringify(finalJson));
	}
	
	this.saveProject = function(host, port, projectTitle, markets, businessUnit, application){
		
		$http.post("http://" + host + ":" + port + "/" +"ITag2/saveITagProject", { 'projectTitle':projectTitle,'markets':markets,'businessUnit':businessUnit,'application':application})
	    .success(function(data, status, headers, response) {
	    	  projectId = data.projectId;
	    	  $timeout(function () {
	    		  alert("Project created");
	    		  $location.path('/dashboard');
	    	  },100);
	        }).error(function(data, status) {
	         $location.path('/createProject');
	         alert("There is an error while adding data with duplicate Project name");
	        
	        });
		return projectId;
	}
	
	this.getProjectTitle = function(){
		return projectName;
	}
	
	this.sendProjectName = function(projTitle){
		projectName = projTitle;
	}
	
	
	
	this.sendProjectId = function(projId){
		projectId = projId;
	}
	
	this.getProjectId = function(){
		return projectId;
	}
	  
	this.getDeferredProjectId = function(){
		return deferredProjectId;
	}
	

  this.retrieveProjectById = function(host, port, rProjectId){
	  console.log("retrieveProjectById for id:" + rProjectId);
	  //$http.get("http://" + $location.host() + ":" + $location.port() + "/" +"ITag2/getProjectById/"+$scope.projectId)
	  return $http.get("http://" + host + ":" + port + "/" +"ITag2/getProjectById/"+ rProjectId)
	  .then(function(response) {
		  console.log("retrieveProjectById Promise fulfilled");
	    // promise is fulfilled
	    deferred.resolve(response.data);
	    return deferred.promise;
  }, function(response) {
	  console.log("retrieveProjectById Promise rejected");
    // the following line rejects the promise 
        deferred.reject(response);
        return deferred.promise;
      });
  }
	  
		
	this.copyProject = function(host, port, projectTitle, markets, businessUnit, application){
		console.log("copyProject as:" + projectTitle);
	    return $http.post("http://" + host + ":" + port + "/" +"ITag2/saveITagProject", { 'projectTitle':projectTitle,'markets':markets,'businessUnit':businessUnit,'application':application})
	      .then(function(response) {
	    	  console.log("copyProject Promise fulfilled with response data: " + response.data.projectId);
	    	  deferredProjectId = response.data.projectId;
	        // promise is fulfilled
	        deferred.resolve(response.data);
	        return deferred.promise;
	      }, function(response) {
	    	  console.log("copyProject Promise rejected");
	        // the following line rejects the promise 
	        deferred.reject(response);
	        return deferred.promise;
	      });	    
	  }
	
	
	this.copyProjectDLs = function(host, port, origProjectId, copiedProjectId){
		  console.log("retrieveProjectDLsById for id:" + origProjectId);
		  
		  return $http.get("http://" + host + ":" + port + "/" +"ITag2/getProjectDLs/"+ origProjectId)
		  .then(function(getDLsresponse) {
			  console.log("retrieveProjectDLsById Promise fulfilled with response data: " + getDLsresponse.data);
			  var dataLayerdata = getDLsresponse.data;
			  if(dataLayerdata){
				  console.log("copy DLs from projectId: " + origProjectId + " to projectId: " + copiedProjectId );
				  	var copiedDL="";
		            var reqParamKeyVal="";
		            var dataLayerName="";
	                 for(i=0;i<dataLayerdata.length;i++){
	                       console.log("Get DLs :"+dataLayerdata[i].dataLayer);
	                       copiedDL=dataLayerdata[i].dataLayer;
	                       reqParamKeyVal="";
	                       dataLayerName = dataLayerdata[i].dataLayerName;
	                       console.log("copiedDL : "+copiedDL+" reqparamKV :"+reqParamKeyVal);
	                       
	                       $http.post("http://" + host + ":" + port + "/" +"ITag2/saveITagData", { 'dataLayer':copiedDL,'reqParamKeyVal':reqParamKeyVal,'projectId':copiedProjectId,'dataLayerName':dataLayerName})
	             	      .then(function(response) {
	             	    	  console.log("copyDataLayer POST Promise fulfilled with response data: " + response.data);
	             	    	  
	             	        // promise is fulfilled
	             	        deferred.resolve(response.data);
	             	       // return deferred.promise;
	             	      }, function(response) {
	             	    	  console.log("copyDataLayer POST Promise rejected");
	             	        // the following line rejects the promise 
	             	        deferred.reject(response);
	             	        return deferred.promise;
	             	      });	 
	                 } 
	                 
	          	}
		    // promise is fulfilled
		    //deferred.resolve(response.data);
			  	return deferred.promise;
			  }, function(getDLsresponse) {
				  console.log("getProjectDLs Promise rejected in copyProjectDLs");
			    // the following line rejects the promise 
			        deferred.reject(response);
			        return deferred.promise;
			 });
	  }
	
	
});