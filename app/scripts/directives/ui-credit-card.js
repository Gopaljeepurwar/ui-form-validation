'use strict';

/**
 * @ngdoc directive
 * @name ui.formValidation.directive:uiCreditCard
 * @description
 * # uiCreditCard
 */
angular.module('ui.formValidation')
  .directive('uiCreditCard',function (uiFormValidation) {
    var creditCardRegEx = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/);
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(creditCardRegEx, 'uiCreditCard', ctrl);
      }
    };
  });
