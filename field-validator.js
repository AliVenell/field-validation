(function() { 

var validationModule = angular.module('validationModule', []);


var validation = function () {

	var regexes = {
		email: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
		alphabets: /^[a-zA-Z]+$/,
		number: /^[0-9]+$/
	};

	var link = function(scope, elem, attrs, ngModelCtrl) {
		var validationType = attrs.validation, 
		regex = new RegExp(regexes[validationType]);
	
		ngModelCtrl.$validators.invalid = function(modelValue, viewValue) {
			var value = modelValue || viewValue;
			return regex.test(value);
		};
	};
	
	return {
		restrict: 'A',
		require: 'ngModel',		
		link: link
		};	
	}; 

angular.module('validationModule').directive('validation', validation);

}());