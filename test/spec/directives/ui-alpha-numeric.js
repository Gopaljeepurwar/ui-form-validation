'use strict';

describe('Directive: uiAlphaNumeric', function () {

  // load the directive's module
  beforeEach(module('uiFormValidationApp'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input value contains other then alpha-numeric characters', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="userName" name="userName" ui-alpha-numeric/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('as #!').trigger('input');
    scope.$digest();
    expect(form.userName.$error.uiAlphaNumeric).toBe(true);

  }));

  it('should not throw an error if input value contains olny alpha-numeric characters', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="userName" name="userName" ui-alpha-numeric/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('BKID 000 ').trigger('input');
    scope.$digest();
    expect(form.userName.$error.uiAlphaNumeric).toBe(undefined);

  }));
});
