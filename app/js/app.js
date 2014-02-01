'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myAppControllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/client-index', {templateUrl: 'partials/client/client-index.html', controller: 'Client'});
  $routeProvider.when('/client-services', {templateUrl: 'partials/client/client-services.html', controller: 'Client'});
  $routeProvider.when('/client-services/:service', {templateUrl: 'partials/client/client-services.html', controller: 'Client'});
  
  $routeProvider.when('/client-services-icons', {templateUrl: 'partials/client/client-services-icons.html', controller: 'Client'});
  
  $routeProvider.when('/client-stories', {templateUrl: 'partials/client/client-stories.html', controller: 'Client'});
  $routeProvider.when('/client-about', {templateUrl: 'partials/client/client-about.html', controller: 'Client'});
  $routeProvider.when('/client-contact', {templateUrl: 'partials/client/client-contact.html', controller: 'Client'});

  $routeProvider.when('/supporter-index', {templateUrl: 'partials/supporter/supporter-index.html', controller: 'Supporter'});  

  $routeProvider.otherwise({redirectTo: '/client-index'});
}]);
