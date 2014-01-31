'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('Client', ['$scope',
  function($scope) {
    $scope.appointmentDays = [
        {day: 'Monday'},
        {day: 'Tuesday'},
        {day: 'Wednesday'},
        {day: 'Thursday'}
    ];
    $scope.appointmentTimes = [
        {time: '12:00pm'},
        {time: '1:00pm'},
        {time: '2:00pm'},
        {time: '3:00pm'},
        {time: '4:00pm'},
        {time: '5:00pm (Thursday only)'}
    ];
    $scope.appointmentServices = [
        {service: 'Pregnancy Test'},    
        {service: 'Ultrasound'},    
        {service: 'Other Service'}    
    ];
    
    $scope.submit = function(appointment) {
        console.log(appointment);
    }
  }]);

myAppControllers.controller('Supporter', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  }]);

function CtrlMain($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}
