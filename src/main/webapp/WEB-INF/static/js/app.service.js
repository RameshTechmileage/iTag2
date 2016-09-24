mainApp.service('PageInfoService', function($http, $location) {

	var pageDetails = {};
	var userDetails = {};
	var eventDetails ={};
	var test ={};
	var finalJson = new Array();
	// $scope.finalJson;// = new Array();
	//For dashboard project name
	var projectName = {};
	
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
	/*this.saveDetails = function(){
		$http.post("http://localhost:8080/iTag/saveITagData",{finalJson})
	   .success(function(data, status, headers) {
		   alert("Data added");
	    });
		
	}*/
	/*
	 * return { getSelectedDetails : function () { return finalJson; } }
	 */
	this.saveProject = function(host, port, projectTitle, markets, businessUnit, application){
		
		$http.post("http://" + host + ":" + port + "/" +"ITag2/saveITagProject", { 'projectTitle':projectTitle,'markets':markets,'businessUnit':businessUnit,'application':application})
	    .success(function(data, status, headers, response) {
	    	  projectName = response.data.projectTitle;
		      $location.path('/dashboard');
	        alert("Project created");
	        }).error(function(data, status) {
	         $location.path('/createProject');
	         alert("There is an error while adding data with duplicate Project name");
	        
	        });
		return projectTitle;
		console.log("projectTitle  = " + projectTitle);
	}
	
	this.getProjectTitle = function(){
		return projectName;
	}
	this.sendProjectName = function(projTitle){
		projectName = projTitle;
	}
	
});