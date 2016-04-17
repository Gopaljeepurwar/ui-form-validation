'use strict';

/**
 * @ngdoc directive
 * @name ui.formValidation.directive:uiNumber
 * @description
 * # uiNumber
 */
angular.module('ui.formValidation')
  .directive('uiNumber', function (uiFormValidation) {
    var numericRegEx = new RegExp(/^[0-9]*$/);
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(numericRegEx, 'uiNumber', ctrl);
      }
    };
  });
