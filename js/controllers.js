'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('Lifeline', ['$scope', '$routeParams', '$location',
    function($scope, $routeParams, $location) {
        $scope.info = {
            name: 'Lifeline Pregnancy Help Clinic',
            street: '1515 N. New Street',
            citystate: 'Kirksville, MO',
            zip: '63501',
            phone: '660-665-5688',
            fax: '660-665-9497',
            email: 'LifelinePRC@sbcglobal.net',
            supporterUrl: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YU4ZL2SKUKCDU',
            supportButton: 'partials/lifeline/lifeline-support.html',
            clientButton: 'partials/lifeline/lifeline-client.html',
            hours: 'M-W 9:00am - 5:00pm, Th 10:00am-6:00pm'
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
    $scope.navigation = "partials/client/client-nav.html";

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

    $scope.allowDisplay = false;
    $scope.assignDisplayAllowance = function() {
        $scope.allowDisplay = true;
    };

    var servicePrefix = "partials/lifeline/services/";
    $scope.service = (($routeParams.service != null)?servicePrefix+$routeParams.service:null);

    $scope.serviceIconClick = function(service) {
        if (!$scope.allowDisplay) {
            var newPath = '/services/'+service;
            $location.path(newPath);
        }
        $scope.service = servicePrefix+service;
    };

    $scope.appointment = {};
    $scope.submitForm = function() {
        $scope.submitted = true;
        if ($scope.appointmentForm.$valid) {
            $http({
                url: "process.php?type=appointment",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: 'formData=' + JSON.stringify($scope.appointment)
                })
                .success(function(data) {
                    if (data.errors) {
                        $scope.errors = [];
                        for(var error in data.errors) {
                            $scope.errors[error] = true;
                        }
                    } else if(data.error) {
                        $scope.error = data.error;
                    } else {
                        // if successful, bind success message to message and set form to pristine
                        $scope.message = data.message;
                        $scope.appointmentForm.$setPristine();
                        $scope.submitted = false;
                        $scope.appointment = {};
                    }
                })
                .error(function(data) {

                });
        };
    };

}]);

myAppControllers.controller('Supporter', ['$scope', '$routeParams', '$location', '$http',
  function($scope, $routeParams, $location, $http) {
    $scope.navigation = "partials/supporter/supporter-nav.html";

    $scope.allowDisplay = false;
    $scope.assignDisplayAllowance = function() {
        $scope.allowDisplay = true;
    };

    var servicePrefix = "partials/lifeline/services/";
        $scope.service = (($routeParams.service != null)?servicePrefix+$routeParams.service:null);

    $scope.serviceIconClick = function(service) {
        if (!$scope.allowDisplay) {
            var newPath = '/supporter-services/'+service;
            $location.path(newPath);
        }
        $scope.service = servicePrefix+service;
    };

    $scope.reg = {};
    $scope.reg.type="individual";
    $scope.initiateTeammates = function() {
        $scope.reg.teammate = [{}, {}, {}];
    }
    $scope.clearTeammates = function() {
        if($scope.reg.teammate){
            delete $scope.reg.teammate;
        }
    }
    $scope.submitRegForm = function() {
        console.log("Submit reg form");
        $scope.submitted = true;
        console.log($scope.reg);
        if($scope.regForm.$valid) {
            $http({
                url: "process.php?type=reg",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: 'formData=' + JSON.stringify($scope.reg)
                })
                .success(function(data) {
                    if(data.errors){
                        console.log('success but with errors');
                        $scope.errors = [];
                        for(var error in data.erorrs) {
                            $scope.errors[error] = true;
                        }
                    } else if(data.error) {
                        console.log('success but with an error');
                        $scope.error = data.error;
                    } else {
                        console.log('success');
                        //if successful all the way, bind success message to message and set
                        //for to pristine
                        $scope.showReg = false;
                        $scope.message = data.message;
                        $scope.regForm.$setPristine();
                        $scope.submitted = false;
                        $scope.reg = {};
                    }
                })
                .error(function(data) {
                    $scope.message = "There was an error processing the request.";
                });
        };
    };
  }]);
