'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('responsiveSlides', function() {
      return {
          restrict: 'A',
          link: function(scope, element, attrs) {
              angular.element(".rslides").responsiveSlides({
                speed: 1500, // Integer: Speed of the transition, in milliseconds
                timeout: 5000, // Integer: Time between slide transitions, in milliseconds
                maxwidth: "500",           // Integer: Max-width of the slideshow, in pixels
            });
          }
      };
  }); 