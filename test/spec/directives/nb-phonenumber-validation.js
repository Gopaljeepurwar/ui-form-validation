'use strict';

describe('Directive: nbPhonenumberValidation', function () {

  // load the directive's module
  beforeEach(module('uiFormValidationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nb-phonenumber-validation></nb-phonenumber-validation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nbPhonenumberValidation directive');
  }));
});
