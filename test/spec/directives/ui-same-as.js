'use strict';

describe('Directive: uiSameAs', function () {

  // load the directive's module
  beforeEach(module('ui.formValidation'));


  var element, scope,form;
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
    form = scope.form;
    scope.value1 ='qwerty';
    scope.value2 ='qwert';
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
    form = scope.form;
    scope.value1 ='qwerty';
    scope.value2 ='qwerty';
    scope.$digest();
    expect(form.cnfPwd.$error.uiSameAs).toBe(undefined);
  }));


  it('should also work if it match with a empty field', function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value1" name="pwd"/>' +
      '<input ng-model="value2" name="cnfPwd" ui-same-as="pwd"/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    scope.value1 ='qwerty';
    scope.value2 ='';
    scope.$digest();
    expect(form.cnfPwd.$error.uiSameAs).toBe(true);
  });
});
