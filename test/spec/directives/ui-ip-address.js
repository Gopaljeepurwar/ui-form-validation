'use strict';

describe('Directive: uiIpAddress', function () {

  // load the directive's module
  beforeEach(module('ui.formValidation'));

  var element,scope,form;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should throw an error if input value contains other then IP address', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="ipadd" name="ipadd" ui-ip-address/>' +
      '</form>'
    );

    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('asd1233').trigger('input');
    scope.$digest();
    expect(form.ipadd.$error.uiIpAddress).toBe(true);
  }));

  it('should not throw an error if input value contains only IP address', inject(function ($compile) {
    element = angular.element(
      '<form name="form">' +
      '<input ng-model="ipadd" name="ipadd" ui-ip-address/>' +
      '</form>'
    );



    $compile(element)(scope);
    form = scope.form;
    var inputElement = element.find('input');
    inputElement.val('192.168.23.11').trigger('input');
    scope.$digest();
    expect(form.ipadd.$error.uiIpAddress).toBe(undefined);

  }));
});
