'use strict';

describe('Directive: uiNumber', function () {

  // load the directive's module
  beforeEach(module('uiFormValidationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-number></ui-number>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uiNumber directive');
  }));
});
