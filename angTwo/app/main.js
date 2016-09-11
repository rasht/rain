(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });

  $scope.helloWorld = function() {
  	alert('hello World!');
  };

})(window.app || (window.app = {}));
