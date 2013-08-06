
app = angular.module("listApp", [])

//Controller with two methods: countDownFromFive() and countUpToFive()
app.controller("AppCtrl", function ($scope){

	$scope.countDownFromFive = function(){
		console.log("5...4...3...2...1");
	}
	
	$scope.countUpToFive = function(){
		console.log("1...2...3...4...5");
	}
})

//Directive names must be all lowercase.

//Allows directive listmore to set methods in controller in the hthml.
app.directive("listmore", function () {
	return function (scope, element, attrs) {
			element.bind("click", function(){
				scope.$apply(attrs.listmore); 
			})
	}
});

//Label mode when mouse over
app.directive("enter", function () {
	return function (scope, element) {
			element.bind("mouseenter", function(){
				element.addClass("label"); 
			})
	}
});

//Label mode off when mouse leave
app.directive("leave", function () {
	return function (scope, element) {
			element.bind("mouseleave", function(){
				element.removeClass("label"); 
					
			})
	}
});
