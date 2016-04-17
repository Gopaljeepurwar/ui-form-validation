'use strict';

/**
 * @ngdoc service
 * @name ui.formValidation.uiFormValidation
 * @description
 * # uiFormValidation
 * Service in the ui.formValidation.
 */
angular.module('ui.formValidation')
  .service('uiFormValidation', function () {
    var service = {};

    service.formValidationByRegularExp = function (regExp, validationVariable, ctrl) {
      var isValid;

      ctrl.$validators[validationVariable] = function (modelValue, viewValue) {
        var value = modelValue || viewValue;
        if (!value) {
          return true;
        }
        else {
          isValid = (value && regExp.test(value) ? 'valid' : undefined);
          if (isValid) {
            return true;
          } else {
            return false;
          }
        }
      };
    };
    return service;
  });
