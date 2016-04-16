'use strict';

/**
 * @ngdoc directive
 * @name uiFormValidationApp.directive:uiPhoneNumber
 * @description
 * # uiPhoneNumber
 */
angular.module('uiFormValidationApp')
  .directive('uiPhoneNumber',function (uiFormValidation) {
    var phoneNoRegEx = new RegExp(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[0-9]\d{9}$/);

    /* supported number are.
     9883443344
     09883443344
     919883443344
     0919883443344
     +919883443344
     +91-9883443344
     0091-9883443344
     +91 -9883443344
     +91- 9883443344
     +91 - 9883443344
     0091 - 9883443344*/

    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(phoneNoRegEx, 'uiPhoneNumber', ctrl);
      }
    };
  });
