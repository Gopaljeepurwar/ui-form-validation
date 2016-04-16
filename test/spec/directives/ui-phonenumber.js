'use strict';

describe('Directive: uiPhonenumber', function () {

  // load the directive's module
  beforeEach(module('uiFormValidationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-phonenumber></ui-phonenumber>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uiPhonenumber directive');
  }));
});
