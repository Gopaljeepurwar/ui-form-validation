'use strict';

describe('Service: uiFormValidation', function () {

  // load the service's module
  beforeEach(module('uiFormValidationApp'));

  // instantiate service
  var uiFormValidation;
  beforeEach(inject(function (_uiFormValidation_) {
    uiFormValidation = _uiFormValidation_;
  }));

  it('should do something', function () {
    expect(!!uiFormValidation).toBe(true);
  });

});
