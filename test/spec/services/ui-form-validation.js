'use strict';

describe('Service: uiFormValidation', function () {

  // load the service's module
  beforeEach(module('ui.formValidation'));

  // instantiate service
  var uiFormValidation,element,scope,_$compile;
  beforeEach(inject(function (_uiFormValidation_,$rootScope,$compile) {

    uiFormValidation = _uiFormValidation_;
    //spyOn(uiFormValidation, 'formValidationByRegularExp');
    scope = $rootScope.$new();
    _$compile=$compile;
  }));

  it('should throw an error for invalid input', function () {
    var numericRegEx = new RegExp(/^[0-9]*$/);
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value" name="textField"/>' +
      '</form>'
    );
    _$compile(element)(scope);
    scope.$digest();
    scope.value ='/';
    uiFormValidation.formValidationByRegularExp(numericRegEx,'uiNumber',scope.form.textField);
    scope.$digest();
    expect(scope.form.textField.$error.uiNumber).toBe(true);
  });

  it('should not throw an error for valid input', function () {
    var numericRegEx = new RegExp(/^[0-9]*$/);
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value" name="textField"/>' +
      '</form>'
    );
    _$compile(element)(scope);
    scope.$digest();
    scope.value =1234567;
    uiFormValidation.formValidationByRegularExp(numericRegEx,'uiNumber',scope.form.textField);
    scope.$digest();
    expect(scope.form.textField.$error.uiNumber).toBe(undefined);
  });

  it('should not throw an error for empty input', function () {
    var numericRegEx = new RegExp(/^[0-9]*$/);
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="value" name="textField"/>' +
      '</form>'
    );
    _$compile(element)(scope);
    scope.$digest();
    scope.value ='';
    uiFormValidation.formValidationByRegularExp(numericRegEx,'uiNumber',scope.form.textField);
    scope.$digest();
    expect(scope.form.textField.$error.uiNumber).toBe(undefined);
  });
});
