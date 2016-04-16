'use strict';

/**
 * @ngdoc directive
 * @name uiFormValidationApp.directive:uiAlphaNumeric
 * @description
 * # uiAlphaNumeric
 */
angular.module('uiFormValidationApp')
  .directive('uiAlphaNumeric',  function (uiFormValidation) {
    var alphaNumericRegEx = new RegExp(/^[a-zA-Z0-9 ]+$/);

    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(alphaNumericRegEx, 'uiAlphaNumeric', ctrl);
      }
    };
  });
