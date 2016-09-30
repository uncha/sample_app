app.controller('uiListCtrl', function($scope){
	$scope.list = [
		{
			title:'Buttons',
			url:'#/tab/ui/button'
		},
		{
			title:'Form Input',
			url:'#/tab/ui/input'
		},
		{
			title:'Loading',
			url:'#/tab/ui/loading'
		},
		{
			title:'Modal',
			url:'#/tab/ui/modal'
		},
		{
			title:'Navigation',
			url:'#/tab/ui/navigation'
		},
		{
			title:'Slidebox',
			url:'#/tab/ui/slidebox'
		}
	];
});

app.controller('buttonsCtrl', function($scope, $ionicPopup){
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

app.controller('inputCtrl', function($scope, $ionicPopup){
	$scope.onChange = function(selectValue){
		var alertPopup = $ionicPopup.alert({
	    	title: 'popup',
	    	template: 'selected ' + selectValue
	    });
	}
});

app.controller('loadingCtrl', function($scope, $ionicLoading){
	$scope.show = function() {
	    $ionicLoading.show({
	      template: 'Loading...'
	    }).then(function(){
	       console.log("The loading indicator is now displayed");
	    });
	};
	$scope.show();

	$scope.hide = function(){
	    $ionicLoading.hide().then(function(){
	       console.log("The loading indicator is now hidden");
	    });
	};

	setTimeout(function(){
		$scope.hide();
	}, 2000);
});

app.controller('modalCtrl', function($scope, $ionicModal, $ionicPopover){
	$ionicModal.fromTemplateUrl('my-modal.html', {
		scope:$scope,
		animation:'slide-in-up'
	}).then(function(modal){
		$scope.modal = modal;
	});

	// .fromTemplateUrl() method
	$ionicPopover.fromTemplateUrl('my-popover.html', {
	    scope: $scope
	  }).then(function(popover) {
	    $scope.popover = popover;
	});

	$scope.showModal = function(){
		$scope.modal.show();
	}

	$scope.hideModal = function(){
		$scope.modal.hide();
	}

	$scope.openPopover = function($event){
		$scope.popover.show($event);
	}
});