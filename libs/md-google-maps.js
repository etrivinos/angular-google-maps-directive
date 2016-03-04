(function () {
  'use strict';
   
  angular.module('MdGoogleMaps', [])
    .directive('mdGoogleMaps', MdGoogleMaps);
     
  MdGoogleMaps.$inject = [];
   
  function MdGoogleMaps() {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      template: '<div id="md-google-maps"></div>',
      link: function(scope, element, attrs) {
         
      }
    }
  }
} ());