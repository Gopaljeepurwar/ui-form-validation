'use strict';

describe('Directive: uiCreditCard', function () {


  // load the directive's module
  beforeEach(module('ui.formValidation'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input value contains other then credit card no', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="creditCardNo" name="creditCardNo" ui-credit-card/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('asd1233').trigger('input');
    scope.$digest();
    expect(form.creditCardNo.$error.uiCreditCard).toBe(true);
  }));

  it('should not throw an error if input value contains only credit card no', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="creditCardNo" name="creditCardNo" ui-credit-card/>' +
      '</form>'
    );



    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('378282246310005').trigger('input');
    scope.$digest();
    expect(form.creditCardNo.$error.uiCreditCard).toBe(undefined);

  }));
});
