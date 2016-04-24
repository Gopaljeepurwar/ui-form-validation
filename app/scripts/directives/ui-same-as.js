'use strict';

/**
 * @ngdoc directive
 * @name uiFormValidationApp.directive:uiSameAs
 * @description
 * # uiSameAs
 */
angular.module('ui.formValidation')
  .directive('uiSameAs', function () {
    return {
      require:['ngModel','^form'],
      restrict: 'A',
      link: function (scope, element, attrs,ctrls) {
        var formController,firstFieldCtrl,secondFieldCtrl;
        formController= ctrls[1];
        firstFieldCtrl = formController[attrs.uiSameAs];
        secondFieldCtrl= ctrls[0];
        secondFieldCtrl.$validators.uiSameAs=function (modelValue, viewValue){
          var value;
          value = modelValue || viewValue;
          if (value === firstFieldCtrl.$viewValue) {
              return true;
            } else {
              return false;
            }
        };

      }
    };
  });
