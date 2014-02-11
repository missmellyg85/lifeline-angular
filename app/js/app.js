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
  $routeProvider.when('/client-services/', {templateUrl: 'partials/client/client-services.html', controller: 'Client'});
  $routeProvider.when('/client-services/:service', {templateUrl: 'partials/client/client-services.html', controller: 'Client'});
  
  $routeProvider.when('/lifeline-services-icons', {templateUrl: 'partials/lifeline/lifelinfe-services-icons.html', controller: 'Lifeline'});
  
  $routeProvider.when('/client-stories', {templateUrl: 'partials/client/client-stories.html', controller: 'Client'});
  $routeProvider.when('/client-about', {templateUrl: 'partials/client/client-about.html', controller: 'Client'});
  $routeProvider.when('/client-contact', {templateUrl: 'partials/client/client-contact.html', controller: 'Client'});

  $routeProvider.when('/supporter-index', {templateUrl: 'partials/supporter/supporter-index.html', controller: 'Supporter'});
  $routeProvider.when('/supporter-community', {templateUrl: 'partials/supporter/supporter-community.html', controller: 'Supporter'});
  $routeProvider.when('/supporter-team', {templateUrl: 'partials/supporter/supporter-team.html', controller: 'Supporter'});
  $routeProvider.when('/supporter-services/', {templateUrl: 'partials/supporter/supporter-services.html', controller: 'Supporter'});
  $routeProvider.when('/supporter-services/:service', {templateUrl: 'partials/supporter/supporter-services.html', controller: 'Supporter'});
  
  $routeProvider.otherwise({redirectTo: '/client-index'});
}]);
