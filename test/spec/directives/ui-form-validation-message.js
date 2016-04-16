'use strict';

describe('Directive: uiFormValidationMessage', function () {

  // load the directive's module
  beforeEach(module('uiFormValidationApp'));

  var element,scope,element2,scope2,_$comile,errorCls,scope3,element3;
  errorCls='ui-error';

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element(
      '<form name="myForm">' +
      '<div class="form-control">' +
      '<input type="text" name="username" ng-model="username" required/>' +
      '<ui-form-validation-message field="username" validation="required">' +
      '<p>Please enter a username</p>' +
      '</ui-form-validation-message>' +
      '<input type="email" name="email" ng-model="email" required email/>' +
      '<ui-form-validation-message field="email" validation="required">' +
      '<p>Please enter email</p>' +
      '</ui-form-validation-message>' +
      '</div>' +
      '</form>');
    $compile(element)(scope);
    scope.$digest();
  }));
  beforeEach(inject(function ($rootScope, $compile) {
    scope2 = $rootScope.$new();
    element2 = angular.element(
      '<form name="myForm2">' +
      '<div class="form-control">' +
      '<input type="text" name="city" ng-model="city" required/>' +
      '<ui-form-validation-message>' +
      '<p>Please enter a city</p>' +
      '</ui-form-validation-message>' +
      '</div>' +
      '</form>');
    _$comile=$compile;
  }));

  it('should give error: init', inject(function () {
    expect(function(){
      _$comile(element2)(scope2);
      scope2.$digest();
    }).toThrow();
  }));

  it('should hide ui-form-validation-message: init', inject(function () {
    var directiveElement=element.find('[field="username"]');
    var inputElement=element.find('[name="username"]');

    expect(directiveElement.hasClass('ng-hide')).toBe(true);
    expect(directiveElement.hasClass('ng-show')).toBe(false);
    expect(inputElement.hasClass(errorCls)).toBe(false);
    expect(inputElement.hasClass('ng-invalid')).toBe(true);
  }));
  it('should add ui-error class to field on focusout', inject(function ($timeout) {
    var inputElement=element.find('[name="username"]');
    var directiveElement=element.find('[field="username"]');
    scope.$digest();
    $timeout.flush(0);
    inputElement.triggerHandler('focusout');
    expect(inputElement.hasClass(errorCls)).toBe(true);
    expect(inputElement.hasClass('ng-invalid')).toBe(true);
    expect(directiveElement.hasClass('ng-hide')).toBe(false);
    expect(directiveElement.hasClass('ng-show')).toBe(true);
  }));
  it('should remove ui-error class from field on keypress', inject(function ($timeout) {
    var inputElement=element.find('[name="username"]');
    var directiveElement=element.find('[field="username"]');
    scope.$digest();
    $timeout.flush(0);
    inputElement.triggerHandler('keypress');
    expect(directiveElement.hasClass('ng-hide')).toBe(true);
    expect(directiveElement.hasClass('ng-show')).toBe(false);
    expect(inputElement.hasClass(errorCls)).toBe(false);
    expect(inputElement.hasClass('ng-invalid')).toBe(true);
  }));
  it('should remove ui-error class from field on focusout ', inject(function ($timeout) {
    var inputElement=element.find('[name="username"]');
    var directiveElement=element.find('[field="username"]');
    scope.username='test';
    scope.$digest();
    $timeout.flush(0);
    inputElement.triggerHandler('focusout');
    expect(directiveElement.hasClass('ng-hide')).toBe(true);
    expect(directiveElement.hasClass('ng-show')).toBe(false);
    expect(inputElement.hasClass(errorCls)).toBe(false);
    expect(inputElement.hasClass('ng-invalid')).toBe(false);
  }));
  it('should not add ui-error class on field on focusout still field is invalid ', inject(function ($timeout) {
    var inputElement=element.find('[name="email"]');
    var directiveElement=element.find('[field="email"]');
    scope.email='invalidEmail';
    scope.$digest();
    $timeout.flush(0);
    inputElement.triggerHandler('focusout');
    expect(directiveElement.hasClass('ng-hide')).toBe(true);
    expect(directiveElement.hasClass('ng-show')).toBe(false);
    expect(inputElement.hasClass(errorCls)).toBe(false);
    expect(inputElement.hasClass('ng-invalid')).toBe(true);
  }));
  it('should add ui-error class to field on focusout ', inject(function ($timeout,$rootScope,$compile) {
    scope3 = $rootScope.$new();
    scope3.numbers =[1,2,3];
    element3 = angular.element('<div>'+'<div ng-repeat="number in numbers">'+
      '<form name="myForm{{$index}}">' +
      '<div class="form-control">' +
      '<input type="text" name="number{{$index}}" ng-model="number" ui-number/>' +
      '<ui-form-validation-message field="number{{$index}}" validation="uiNumber">' +
      '<p>Please enter a number</p>' +
      '</ui-form-validation-message>' +
      '</div>' +
      '</form>'+'</div>'+'</div>');
    $compile(element3)(scope3);
    scope3.$digest();
    var inputElement=element3.find('[name="number0"]');
    var directiveElement=element3.find('[field="number0"]');
    inputElement.val('a').trigger('input');
    scope3.$digest();
    $timeout.flush(0);
    inputElement.triggerHandler('focusout');
    expect(directiveElement.hasClass('ng-hide')).toBe(false);
    expect(directiveElement.hasClass('ng-show')).toBe(true);
    expect(inputElement.hasClass(errorCls)).toBe(true);
    expect(inputElement.hasClass('ng-invalid')).toBe(true);
  }));
  it('should remove ui-error class to field on focusout ', inject(function ($timeout,$rootScope,$compile) {
    scope3 = $rootScope.$new();
    scope3.numbers =[1,2,3];
    element3 = angular.element('<div>'+'<div ng-repeat="number in numbers">'+
      '<form name="myForm{{$index}}">' +
      '<div class="form-control">' +
      '<input type="text" name="number{{$index}}" ng-model="number" ui-number/>' +
      '<ui-form-validation-message field="number{{$index}}" validation="uiNumber">' +
      '<p>Please enter a number</p>' +
      '</ui-form-validation-message>' +
      '</div>' +
      '</form>'+'</div>'+'</div>');
    $compile(element3)(scope3);
    scope3.$digest();
    var inputElement=element3.find('[name="number0"]');
    var directiveElement=element3.find('[field="number0"]');
    inputElement.val(4).trigger('input');
    scope3.$digest();
    $timeout.flush(0);
    inputElement.triggerHandler('focusout');
    expect(directiveElement.hasClass('ng-hide')).toBe(true);
    expect(directiveElement.hasClass('ng-show')).toBe(false);
    expect(inputElement.hasClass(errorCls)).toBe(false);
    expect(inputElement.hasClass('ng-invalid')).toBe(false);
  }));
});
