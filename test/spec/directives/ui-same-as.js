'use strict';

describe('Directive: uiSameAs', function () {

  // load the directive's module
  beforeEach(module('ui.formValidation'));


  var element, scope,form,inputElement1,inputElement12;
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if it does not match with a specific field', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value1" name="pwd"/>' +
      '<input ng-model="value2" name="cnfPwd" ui-same-as="pwd"/>' +
      '</form>'
    );

    $compile(element)(scope);
    inputElement1= element.find('[name="pwd"]');
    inputElement12= element.find('[name="cnfPwd"]');
    form = scope.form;
    inputElement1.val('qwerty').trigger('input');
    inputElement12.val('qwert').trigger('input');
    scope.$digest();
    expect(form.cnfPwd.$error.uiSameAs).toBe(true);
  }));

  it('should not throw an error if it match with a specific field', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value1" name="pwd"/>' +
      '<input ng-model="value2" name="cnfPwd" ui-same-as="pwd"/>' +
      '</form>'
    );

    $compile(element)(scope);
    inputElement1= element.find('[name="pwd"]');
    inputElement12= element.find('[name="cnfPwd"]');
    form = scope.form;
    inputElement1.val('qwerty').trigger('input');
    inputElement12.val('qwerty').trigger('input');
    scope.$digest();
    expect(form.cnfPwd.$error.uiSameAs).toBe(undefined);
  }));


});
