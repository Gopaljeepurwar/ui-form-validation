'use strict';

/**
 * @ngdoc directive
 * @name ui.formValidation.directive:uiIpv4
 * @description
 * # uiIpv4
 */
angular.module('ui.formValidation')
  .directive('uiIpv4',function (uiFormValidation) {
    var ipv4RegEx = new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        uiFormValidation.formValidationByRegularExp(ipv4RegEx, 'uiIPv4', ctrl);
      }
    };
  });
