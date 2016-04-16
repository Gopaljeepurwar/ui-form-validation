'use strict';

/**
 * @ngdoc directive
 * @name uiFormValidationApp.directive:uiFormValidationMessage
 * @description
 * # uiFormValidationMessage
 */
angular.module('uiFormValidationApp')
  .directive('uiFormValidationMessage',function ($timeout) {
    var errorCls='nb-error';
    function containsAny(arr1,arr2){
      var result=false;
      for(var a=0;a<arr1.length;a++){
        for(var b=0;b<arr2.length;b++){
          if(arr2[b]===arr1[a]){
            result=true;
            break;
          }
        }
        if(result){
          break;
        }
      }
      return result;
    }
    return {
      require:'^form',
      restrict: 'E',
      link: function (scope, element, attrs,formController) {
        var formElement,inputElement,field,validations;
        if(!(attrs.field && attrs.validation)){
          throw 'field && validation both are required';
        }
        validations=attrs.validation.split(',');
        element.removeClass('ng-show');
        element.addClass('ng-hide');
        $timeout(function timeOutFn(){
          formElement = element.closest('form');
          inputElement = formElement.find('[name="' + attrs.field + '"]');
          field=formController[attrs.field];
          inputElement.focusout(function focusOutFn() {
            if (field.$error && containsAny(Object.keys(field.$error),validations)) {
              element.removeClass('ng-hide');
              element.addClass('ng-show');
              inputElement.addClass(errorCls);
            } else {
              element.removeClass('ng-show');
              element.addClass('ng-hide');
              inputElement.removeClass(errorCls);
            }
          });

          inputElement.keypress(function keyPressFn() {
            element.removeClass('ng-show');
            element.addClass('ng-hide');
            inputElement.removeClass(errorCls);
          });},0);


      }
    };
  });
