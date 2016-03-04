(function () {
  'use strict';
   
  angular.module('MdGoogleMaps', [])
    .directive('mdGoogleMaps', MdGoogleMaps);
     
  MdGoogleMaps.$inject = [];
   
  function MdGoogleMaps() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        lat: '=',
        lng: '=',
        zoom: '='
      },
      template: '<div id="md-google-maps"></div>',
      link: function(scope, element, attrs) {
        var center = new google.maps.LatLng(scope.lat, scope.lng);
        var zoom = scope.zoom || 12;
        var mapSettings = {
          center: center,
          zoom: zoom
        };
        var map = {};
             
        initialize();
       
        function initialize() {
          map = new google.maps.Map(element[0], mapSettings);
        }
      }
    }
  }
} ());