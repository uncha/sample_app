// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app-sample', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $stateProvider
  .state('tabs', {
    url: "/tab",
    abstract: true,
    templateUrl: "template/tab.html"
  })

  // home
  .state('tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "template/home.html"
      }
    }
  })

  // ui
  .state('tabs.ui', {
    url: "/ui",
    views: {
      'ui-tab': {
        templateUrl: "template/ui.html"
      }
    }
  })
  .state('tabs.button', {
    url: "/ui/button",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/button.html"
      }
    }
  })
  .state('tabs.input', {
    url: "/ui/input",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/input.html"
      }
    }
  })
  .state('tabs.loading', {
    url: "/ui/loading",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/loading.html"
      }
    }
  })
  .state('tabs.modal', {
    url: "/ui/modal",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/modal.html"
      }
    }
  })
  .state('tabs.navigation', {
    url: "/ui/navigation",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/navigation.html"
      }
    }
  })
  .state('tabs.page1', {
    url: "/ui/page1",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/page1.html"
      }
    }
  })
  .state('tabs.page2', {
    url: "/ui/page2",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/page2.html"
      }
    }
  })
  .state('tabs.slidebox', {
    url: "/ui/slidebox",
    views: {
      'ui-tab': {
        templateUrl: "template/ui/slidebox.html"
      }
    }
  })

  // native
  .state('tabs.native', {
    url: "/native",
    views: {
      'native-tab': {
        templateUrl: "template/native.html"
      }
    }
  })
  .state('tabs.camera', {
    url: "/native/camera",
    views: {
      'native-tab': {
        templateUrl: "template/native/camera.html"
      }
    }
  })
  .state('tabs.accelerometer', {
    url: "/native/accelerometer",
    views: {
      'native-tab': {
        templateUrl: "template/native/accelerometer.html"
      }
    }
  })

  $urlRouterProvider.otherwise("/tab/home");
  $ionicConfigProvider.navBar.alignTitle('center');
});