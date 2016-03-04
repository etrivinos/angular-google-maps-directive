(function () {
  'use strict';
   
  angular.module('mapApp', ['MdGoogleMaps'])
    .controller('mapCtrl', Controller);
     
  Controller.$inject = [];
   
  function Controller() {
    var vm = this;
    vm.control = {};

    vm.options = {
	  mapTypeControl: true,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  panControl: true,
	  streetViewControl: true,
	  zoomControl: true
	};
  }
} ());