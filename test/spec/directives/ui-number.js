'use strict';

describe('Directive: uiNumber', function () {

  // load the directive's module
  beforeEach(module('ui.formValidation'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input is not numeric', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value" name="textField" ui-number />' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    scope.value ='a';
    scope.$digest();
    expect(form.textField.$error.uiNumber).toBe(true);

  }));

  it('should not throw an error if input is numeric', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value" name="textField" ui-number />' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    scope.value =4;
    scope.$digest();
    expect(form.textField.$error.uiNumber).toBe(undefined);

  }));
});
