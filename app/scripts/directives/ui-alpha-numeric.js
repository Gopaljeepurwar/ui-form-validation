'use strict';

/**
 * @ngdoc directive
 * @name ui.formValidation.directive:uiAlphaNumeric
 * @description
 * # uiAlphaNumeric
 */
angular.module('ui.formValidation')
  .directive('uiAlphaNumeric',  function (uiFormValidation) {
    var alphaNumericRegEx = new RegExp(/^[a-zA-Z0-9 ]+$/);

    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(alphaNumericRegEx, 'uiAlphaNumeric', ctrl);
      }
    };
  });
