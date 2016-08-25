'use strict';
(function () {
  angular
    .module('GalvanizedDesign')
    .config([
      '$mdThemingProvider',
      GalvanizedDesignConfig
    ]);

  function GalvanizedDesignConfig($mdThemingProvider) {

    $mdThemingProvider
      .theme('default')
      .primaryPalette('grey')
      .accentPalette('yellow')
      .backgroundPalette('grey');
  };

}());