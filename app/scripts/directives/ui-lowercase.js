'use strict';

/**
 * @ngdoc directive
 * @name ui.formValidation.directive:uiLowercase
 * @description
 * # uiLowercase
 */
angular.module('ui.formValidation')
  .directive('uiLowercase', function (uiFormValidation) {
    var lowercaseRegEx = new RegExp(/^[a-z]+$/);
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(lowercaseRegEx, 'uiLowercase', ctrl);
      }
    };
  });
