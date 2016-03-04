(function () {
  'use strict';
   
  angular.module('mapApp', ['MdGoogleMaps'])
    .controller('mapCtrl', Controller);
     
  Controller.$inject = [];
   
  function Controller() {
    var vm = this;
  }
} ());