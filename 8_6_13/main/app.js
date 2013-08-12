
//Routing
var projectManager = angular.module("projectManager",[])
	.config(function($routeProvider) {
		$routeProvider
		.when("/", 
		{
			templateUrl: "sub/list.html",
			controller: "ListCtrl"
		})
		.when("/list",
		{
			templateUrl: "sub/list.html",
			controller: "ListCtrl"
		})
		.when("/add",
		{
			templateUrl: "sub/add.html",
			controller: "AddCtrl"
		})
		.when("/delete",
		{
			templateUrl: "sub/delete.html",
			controller: "DeleteCtrl"
		})
		.when("/detail",
		{
			templateUrl: "sub/detail.html",
			controller: "DetailCtrl"
		})
		.when("/edit",
		{
			templateUrl: "sub/edit.html",
			controller: "EditCtrl"
		})
		.otherwise(
		{
			//If page does not exist, redirect to the root
			redirectTo: "/"
		});
		
});





