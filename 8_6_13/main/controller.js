
//The Controllers

projectManager.controller("AppController", function($scope){
	//Empty for now
});

/*
	ListContrller list and store projects.
*/
projectManager.controller("ListCtrl", 
	function ListContrller($scope) {
	
	$scope.projects = [
	{
		title: "My First Project",
		description: "Testing and Researching",
		duedate: "00/00/00",
		team: "Noobs"
	},
	{
		title: "My Second Project",
		description: "Seeing if this works.",
		duedate: "01/01/99",
		team: "Better Noobs"
	}];
});

projectManager.controller("AddCtrl", function($scope){
	//Empty for now
});

projectManager.controller("DeleteCtrl", function($scope){
	//Empty for now
});

projectManager.controller("DetailCtrl", function($scope){
	//Empty for now
});

projectManager.controller("EditCtrl", function($scope){
	//Empty for now
});