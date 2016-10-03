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

app.controller('nativeListCtrl', function($scope){
	$scope.list = [
		{
			title:'Camera',
			url:'#/tab/native/camera'
		},
		{
			title:'Accelerometer',
			url:'#/tab/native/accelerometer'
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

app.controller('cameraCtrl', function($scope){
    $scope.picList = [
    	
    ];

    $scope.onCamera = function(){
    	navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
    }

	function onSuccess(imageURI) {
	    $scope.picList.push({
	    	uri:imageURI,
	    	subject:new Date()
	    });

	    $scope.$apply();
	}

	function onFail(message) {
	    alert('Failed because: ' + message);
	}
});

app.controller('accelerometerCtrl', function($scope){
	function onSuccess(acceleration) {
    	console.log('Acceleration X: ' + acceleration.x + '\n' +
			        'Acceleration Y: ' + acceleration.y + '\n' +
			        'Acceleration Z: ' + acceleration.z + '\n' +
			        'Timestamp: '      + acceleration.timestamp + '\n');

    	$scope.accelerationData = {
    		x:acceleration.x,
    		y:acceleration.y,
    		z:acceleration.z
    	};
    	$scope.$apply();
	}

	function onError() {
	    console.log('onError!');
	}

	var options = { frequency: 100 };  // Update every 3 seconds
	var watchID;
	$scope.onStart = function(){
		$scope.onEnd();
		watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
	}

	$scope.onEnd = function(){
		if(watchID) navigator.accelerometer.clearWatch(watchID);
	}
});
















