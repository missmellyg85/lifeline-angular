'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('Lifeline', ['$scope', '$routeParams', '$location',
    function($scope, $routeParams, $location) {
        $scope.info = {
            name: 'Lifeline Pregnancy Help Clinic',
            street: '306 W. Washington Street',
            citystate: 'Kirksville, MO',
            zip: '63501',
            phone: '660-665-5688',
            fax: '660-665-9497',
            email: 'LifelinePRC@sbcglobal.net',
            supporterUrl: 'http://friendsoflifelinephc.org/'
            };

        $scope.allowDisplay = false;
        $scope.assignDisplayAllowance = function() {
            $scope.allowDisplay = true;
        };
        
        var servicePrefix = "partials/lifeline/services/";
        $scope.service = (($routeParams.service != null)?servicePrefix+$routeParams.service:null);
        
        $scope.serviceIconClick = function(service) {
            if (!$scope.allowDisplay) {
                var newPath = '/lifeline-services/'+service;
                $location.path(newPath);
            }
            $scope.service = servicePrefix+service;
        };
    }]);

myAppControllers.controller('MainCtrl', ['$scope', '$route', '$routeParams', '$location',
    function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams; 
        $scope.current = $location.path(); 
    }]);

myAppControllers.controller('Client', ['$scope', '$routeParams', '$location', '$http',
  function($scope, $routeParams, $location, $http) {
    $scope.navigation = "partials/client/client-navigation.html";
    
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
    
    $scope.validation = [
        {"regex": [
            {"dob": "/^\d{1,2}\/\d{1,2}\/\d{2,4}$/"}
        ]}
    ];
    
    $scope.appointment = {};
    $scope.submitForm = function() {
        $scope.submitted = true;
        if ($scope.appointmentForm.$valid) {
            $http.post('process.php', $scope.appointment)
                .success(function(data) {
                    if (data.errors) {
                        $scope.errors = [];
                        for(var error in data.errors) {
                            $scope.errors[error] = true;
                        }
                    } else if(data.error) {
                        $scope.error = data.error;
                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                    }
                })
                .error(function(data) {
                    
                });
        };
    };

}]);

myAppControllers.controller('Supporter', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.navigation = "partials/supporter/supporter-navigation.html";
  }]);
