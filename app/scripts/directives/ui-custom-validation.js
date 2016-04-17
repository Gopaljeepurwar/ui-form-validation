'use strict';

/**
 * @ngdoc directive
 * @name ui.formValidation.directive:uiCustomValidation
 * @description
 * # uiCustomValidation
 */
angular.module('ui.formValidation')
  .directive('uiCustomValidation',function (uiFormValidation) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        var customRegExp,validationName='uiCustomValidation';
        if (!!attrs.regExp) {
          customRegExp=new RegExp(attrs.regExp);
        }else{
          throw 'reg-exp is required with uiCustomValidation';
        }

        if(!!attrs.validation){
          validationName=attrs.validation;
        }

        uiFormValidation.formValidationByRegularExp(customRegExp, validationName, ctrl);
      }
    };
  });
