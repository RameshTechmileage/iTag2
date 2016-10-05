mainApp.service('PageInfoService', function($http, $location, $timeout) {

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
	
});