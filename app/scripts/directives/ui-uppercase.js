'use strict';

/**
 * @ngdoc directive
 * @name ui.formValidation.directive:uiUppercase
 * @description
 * # uiUppercase
 */
angular.module('ui.formValidation')
  .directive('uiUppercase',function (uiFormValidation) {
    var uppercaseRegEx = new RegExp(/^[A-Z]+$/);
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(uppercaseRegEx, 'uiUppercase', ctrl);
      }
    };
  });
