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
        zoom: '=',
        control: '='
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
        var arrMarkers = [];
         
        initialize();
             
        function addMarker() {
          arrMarkers.push(new google.maps.Marker({
            position: map.getCenter(),
            map: map
          }));
        }
         
        function clearMarkers() {
          if (arrMarkers.length === 0) return;
          angular.forEach(arrMarkers, function(marker) {
            marker.setMap(null);
          });
         
          arrMarkers = [];
        }
         
        function initialize() {    
          map = new google.maps.Map(element[0], mapSettings);
               
          if(undefined !== scope.control) {
            scope.control.addMarker = addMarker;
            scope.control.clearMarkers = clearMarkers;
          }
        }
      }
    }
  }
} ());