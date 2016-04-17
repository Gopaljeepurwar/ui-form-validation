'use strict';

describe('Directive: uiUppercase', function () {

  // load the directive's module
  beforeEach(module('ui.formValidation'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input value contains other then uppercase characters', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="userName" name="userName" ui-uppercase/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('as').trigger('input');
    scope.$digest();
    expect(form.userName.$error.uiUppercase).toBe(true);
  }));

  it('should not throw an error if input value contains olny alphabetic characters', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="userName" name="userName" ui-uppercase/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('BKID').trigger('input');
    scope.$digest();
    expect(form.userName.$error.uiUppercase).toBe(undefined);

  }));
});
