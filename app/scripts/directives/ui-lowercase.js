'use strict';

/**
 * @ngdoc directive
 * @name uiFormValidationApp.directive:uiLowercase
 * @description
 * # uiLowercase
 */
angular.module('uiFormValidationApp')
  .directive('uiLowercase', function (uiFormValidation) {
    var lowercaseRegEx = new RegExp(/^[a-z]+$/);
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(lowercaseRegEx, 'uiLowercase', ctrl);
      }
    };
  });
