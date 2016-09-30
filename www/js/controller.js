app.controller('uiListCtrl', function($scope){
	$scope.list = ['Button List',2,3,4,5];
});

app.controller('buttonListCtrl', function($scope, $ionicPopup){
	$scope.onTab = function(){
		var alertPopup = $ionicPopup.alert({
	    	title: 'popup',
	    	template: 'popup show'
	    });

	    alertPopup.then(function(res) {
	    	console.log('popup hide');
	    });
	}
});