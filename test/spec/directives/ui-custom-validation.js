'use strict';

describe('Directive: uiCustomValidation', function () {

  // load the directive's module
  beforeEach(module('ui.formValidation'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input value does not match with regular expression', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="userName" name="userName" reg-exp="^[A-z]+$" validation="uiAlphabet" ui-custom-validation/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('as #!').trigger('input');
    scope.$digest();
    expect(form.userName.$error.uiAlphabet).toBe(true);
  }));

  it('should not throw an error if input value contains olny alphabetic characters', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="userName" name="userName" reg-exp="^[A-z]+$" validation="uiAlphabet" ui-custom-validation/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('BKID').trigger('input');
    scope.$digest();
    expect(form.userName.$error.uiAlphabet).toBe(undefined);
  }));
});
