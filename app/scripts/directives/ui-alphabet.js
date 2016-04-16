'use strict';

/**
 * @ngdoc directive
 * @name uiFormValidationApp.directive:uiAlphabet
 * @description
 * # uiAlphabet
 */
angular.module('uiFormValidationApp')
  .directive('uiAlphabet', function (uiFormValidation) {
    var alphabeticRegEx = new RegExp(/^[A-z]+$/);
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(alphabeticRegEx, 'uiAlphabet', ctrl);
      }
    };
  });
