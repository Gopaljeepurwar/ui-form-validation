'use strict';

describe('Directive: uiIpv6', function () {
  // load the directive's module
  beforeEach(module('ui.formValidation'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input value contains other then IPv6', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="ipv6" name="ipv6" ui-ipv6/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('asd1233').trigger('input');
    scope.$digest();
    expect(form.ipv6.$error.uiIPv6).toBe(true);
  }));

  it('should not throw an error if input value contains only IPv6', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="ipv6" name="ipv6" ui-ipv6/>' +
      '</form>'
    );


    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('FF02:0:0:0:0:0:0:12').trigger('input');
    scope.$digest();
    expect(form.ipv6.$error.uiIPv6).toBe(undefined);

  }));
});
