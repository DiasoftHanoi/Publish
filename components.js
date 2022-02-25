var injector = angular.element('[ng-controller=fabHomeCtrl]').injector();
var lazyAngular = injector.get('lazyAngular');
lazyAngular.registerDirective(['ftfwfLoader', function(){
    return {
        restrict : 'AE',
		scope:false,
		template: 	'<div class="loader-wrapper" align="center">'+
						'<div class="f-scroll-preloader vertical-middle">'+
							'<div></div>'+
							'<div></div>'+
							'<div></div>'+
						'</div>'+
					'</div>'
    }
}]);

lazyAngular.registerController('onErrorIncludeCtrl', ['$scope',function($scope){
	$scope.$on('$includeContentError',function(){
		var _errorTemplateFlag=$scope.onErrorFlag ? $scope.onErrorFlag : '_errorTemplateFlag';
		$scope.$eval(_errorTemplateFlag+'=true');
	})
}]);