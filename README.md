# form-validation
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/Gopaljeepurwar/ui-form-validation.svg?branch=master)](https://travis-ci.org/Gopaljeepurwar/ui-form-validation)
[![Dependency Status](https://gemnasium.com/badges/github.com/Gopaljeepurwar/ui-form-validation.svg)](https://gemnasium.com/github.com/Gopaljeepurwar/ui-form-validation)
[![codecov.io](https://codecov.io/github/Gopaljeepurwar/ui-form-validation/coverage.svg?branch=master)](https://codecov.io/github/Gopaljeepurwar/ui-form-validation?branch=master)
[![ReviewNinja](https://app.review.ninja/56203952/badge)](https://app.review.ninja/Gopaljeepurwar/ui-form-validation)

# Angular ui form validation
Perform your form validation using re-usable directives and API to create your own validation types. 

## Installation
#### Bower
```javascript
    bower install form-validation
    <script src="bower_components/form-validation/dist/scripts/vendor.js"></script>
    <script src="bower_components/form-validation/dist/scripts/scripts.js"></script>
```
#### CDN

##### You can use rawgit.com's cdn url to access the files in the Bower repository. These files are hosted by MaxCDN. Just alter the version as you need.
* https://rawgit.com/Gopaljeepurwar/ui-form-validation/master/dist/scripts/vendor.js
* https://rawgit.com/Gopaljeepurwar/ui-form-validation/master/dist/scripts/scripts.js

##### CODE
```javascript
angular.module('myApp',['ui.formValidation']);
```
## Directives :
* **ui-form-validation-message** : Checks the form validation and shows proper validation messages on focusout. It adds 'ui-error' class on input field if any validation fails.

    | Attribute | Type | Required | Description |
    | --- | --- | --- | ---|
    | field | String | Yes | input field name |
    | validation | String | Yes | validation type,can be single(e.g 'required') or comma separated(e.g 'required,email') |
    
```html
<form name="test">
   <input type="text" ng-model="uname" name="uname" placeholder="Enter your name" required>
   <ui-form-validation-message field="uname" validation="required">
     <div>
      <span>Please enter a valid name</span>
     </div>
   </ui-form-validation-message>
 </form>
``` 

Use comma separated value for multiple validation on a field
```html
<form name="test">
   <input type="email"  ng-model="email" name="email" placeholder="Enter your email" required>
   <ui-form-validation-message field="email" validation="required,email">
     <div>
        <span>Please enter a valid email</span>
     </div>
   </ui-form-validation-message>
</form>
```


* **ui-custom-validation** :

    | Attribute | Type | Required | Description |
    | --- | --- | --- | --- |
    | reg-exp | Regular Expression | Yes | Regular expression to validate input field |
    | validation | String | No (Default: uiCustomValidation) | Custom validation name |


```html
<form name="test">
   <input ng-model="userName" name="userName" reg-exp="^[A-z]+$" validation="customAlphabet" ui-custom-validation/>
   <ui-form-validation-message field="userName" validation="customAlphabet">
     <div>
        <span>Please enter a valid user name</span>
     </div>
   </ui-form-validation-message>
</form>
```


* **Predefined validations** :

    | Directive  | validaion name | Description |
    | --- | --- | ---|
    | ui-alpha-numeric  | uiAlphaNumeric | Only alphabets (i.e. a-z & A-Z) and numeric digits (i.e. 0-9) are allowed. |
    | ui-alphabet  | uiAlphabet | Only alphabets (i.e. a-z & A-Z) are allowed. |
    | ui-lowercase  | uiLowercase | Only alphabets (i.e. a-z) are allowed. |
    | ui-uppercase | uiUppercase | Only alphabets (i.e. A-Z) are allowed. |
    | ui-number  | uiNumber | Only alphabets (i.e. 0-9) are allowed. |
    | ui-ip-address  | uiIpAddress | Both IP address(IPv4 and IPv6) are allowed. |
    | ui-ipv4  | uiIPv4 | Only IP address(IPv4) is allowed. |
    | ui-ipv6  | uiIPv6 | Only IP address(IPv6) is allowed. |
    | ui-credit-card  | uiCreditCard | Only credit card number is allowed. |
    | required  | required | Required field |
    
```html
<form name="test">
   <div class="form-group">
     <input ng-model="quantity" name="quantity"  ui-number/>
     <ui-form-validation-message field="quantity" validation="uiNumber">
       <div>
          <span>Please enter a valid quantity</span>
       </div>
     </ui-form-validation-message>
   </div>
 </form>
```

* **Some special directives** :
   * **ui-same-as** : Validates whether one field is same as another field
```html
<form name="test">
   <div class="form-group">
      <input ng-model="value1" name="pwd"/>
      <input ng-model="value2" name="cnfPwd" ui-same-as="pwd"/>
      <ui-form-validation-message field="value2" validation="uiSameAs">
       <div>
          <span>Password does not match the confirmation password.</span>
       </div>
     </ui-form-validation-message>
   </div>
</form>
```

