(function(angular) {
  'use strict'
  angular.module("cool", [])
  	.controller('coolCtrl', function ($scope) {
  		var vm = this;
      	vm.greetings = "Hellooo";
  });
})(window.angular);