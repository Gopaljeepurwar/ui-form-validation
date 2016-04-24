'use strict';

describe('Directive: uiIpv4', function () {


  // load the directive's module
  beforeEach(module('ui.formValidation'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input value contains other then IPv4', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="ipv4" name="ipv4" ui-ipv4/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('asd1233').trigger('input');
    scope.$digest();
    expect(form.ipv4.$error.uiIPv4).toBe(true);
  }));

  it('should not throw an error if input value contains only IPv4', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="ipv4" name="ipv4" ui-ipv4/>' +
      '</form>'
    );


    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('192.168.23.11').trigger('input');
    scope.$digest();
    expect(form.ipv4.$error.uiIPv4).toBe(undefined);

  }));
});
