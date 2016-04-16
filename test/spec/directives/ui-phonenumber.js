'use strict';

describe('Directive: uiPhonenumber', function () {

  // load the directive's module
  beforeEach(module('uiFormValidationApp'));

  var element, scope,form;
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input is not a valid phone number', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value" name="textField" ui-phone-number />' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    scope.value ='a';
    scope.$digest();
    expect(scope.value).toEqual('a');
    expect(form.textField.$error.uiPhoneNumber).toBe(true);
  }));

  it('should not throw an error if input is a valid phone number', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value" name="textField"  ui-phone-number />' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    scope.value = 9883443344;
    scope.$digest();
    expect(form.textField.$error.uiPhoneNumber).toBe(undefined);
  }));
});
