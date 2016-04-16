'use strict';

describe('Directive: uiPhonenumberValidation', function () {

  // load the directive's module
  beforeEach(module('uiFormValidationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-phonenumber-validation></ui-phonenumber-validation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uiPhonenumberValidation directive');
  }));
});
