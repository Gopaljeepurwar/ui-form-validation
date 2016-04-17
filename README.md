# form-validation
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/Gopaljeepurwar/ui-form-validation.svg?branch=master)](https://travis-ci.org/Gopaljeepurwar/ui-form-validation)
[![Dependency Status](https://gemnasium.com/badges/github.com/Gopaljeepurwar/ui-form-validation.svg)](https://gemnasium.com/github.com/Gopaljeepurwar/ui-form-validation)
[![codecov.io](https://codecov.io/github/Gopaljeepurwar/ui-form-validation/coverage.svg?branch=master)](https://codecov.io/github/Gopaljeepurwar/ui-form-validation?branch=master)
[![ReviewNinja](https://app.review.ninja/56203952/badge)](https://app.review.ninja/Gopaljeepurwar/ui-form-validation)
# Angular ui form validation
Perform your form validation using re-usable directives and API to create your own validation types. 

## Installing
#### Bower
```javascript
    bower install form-validation
    <script src="bower_components/form-validation/dist/scripts/scripts.js"></script>
```
#### CDN

##### You can use rawgit.com's cdn url to access the files in the Bower repository. These files are hosted by MaxCDN. Just alter the version as you need.
* https://rawgit.com/Gopaljeepurwar/ui-form-validation/master/dist/scripts/scripts.js

##### CODE
```javascript
angular.module('myApp',['uiFormValidationApp']);
```
## Directives :
* **ui-form-validation-message** : Checks the form validation and shows proper validation messages on focusout. It adds 'ui-error' class on input field if any validation fails.

    | Attribute | Type | Required | Description |
    | --- | --- | --- | ---|
    | field | String | Yes | input field name |
    | validation | String | Yes | validation type,can be single(e.g 'required') or comma separated(e.g 'required,email') |
    
```html
<form name="test">
       <div class="form-group">
         <input type="text" class="form-control" ng-model="uname" name="uname" placeholder="Enter your name" required>
         <ui-form-validation-message field="uname" validation="required">
           <div>
            <span>Please enter a valid name</span>
           </div>
         </ui-form-validation-message>
       </div>
     </form>
``` 

Gives comma seprated value for applying multiple validation on a field
```html
<form name="test">
       <div class="form-group">
         <input type="email" class="form-control" ng-model="email" name="email" placeholder="Enter your email" required>
         <ui-form-validation-message field="email" validation="required,email">
           <div>
              <span>Please enter a valid email</span>
           </div>
         </ui-form-validation-message>
       </div>
     </form>
```


* **ui-custom-validation** :
    | Attribute | Type | Required |Description |
    | --- | --- | --- | ---|
    | reg-exp | Regular Expression | Yes |Regular expression to validate input field |
    | validation | String | No (Default: uiCustomValidation) | Custom validation name |


```html
<form name="test">
       <div class="form-group">
         <input ng-model="userName" name="userName" reg-exp="^[A-z]+$" validation="uiAlphabet" ui-custom-validation/>
         <ui-form-validation-message field="email" validation="uiAlphabet">
           <div>
              <span>Please enter a valid email</span>
           </div>
         </ui-form-validation-message>
       </div>
     </form>
```


* **Default validations** :

    | Directive  | validaion name | Description |
    | --- | --- | ---|
    | ui-alpha-numeric  | uiAlphaNumeric | Only alphabets (i.e. a-z & A-Z) and numeric digits (i.e. 0-9) are allowed. |
    | ui-alphabet  | uiAlphabet | Only alphabets (i.e. a-z & A-Z) are allowed. |
    | ui-lowercase  | uiLowercase | Only alphabets (i.e. a-z) are allowed. |
    | ui-uppercase | uiUppercase | Only alphabets (i.e. A-Z) are allowed. |
    | ui-number  | uiNumber | Only alphabets (i.e. 0-9) are allowed. |
    
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


# form-validation
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/Gopaljeepurwar/ui-form-validation.svg?branch=master)](https://travis-ci.org/Gopaljeepurwar/ui-form-validation)
[![Dependency Status](https://gemnasium.com/badges/github.com/Gopaljeepurwar/ui-form-validation.svg)](https://gemnasium.com/github.com/Gopaljeepurwar/ui-form-validation)
[![codecov.io](https://codecov.io/github/Gopaljeepurwar/ui-form-validation/coverage.svg?branch=master)](https://codecov.io/github/Gopaljeepurwar/ui-form-validation?branch=master)
[![ReviewNinja](https://app.review.ninja/56203952/badge)](https://app.review.ninja/Gopaljeepurwar/ui-form-validation)
# Angular ui form validation
Perform your form validation using re-usable directives and API to create your own validation types. 

## Installing
#### Bower
```javascript
    bower install form-validation
    <script src="bower_components/form-validation/dist/scripts/scripts.js"></script>
```
#### CDN

##### You can use rawgit.com's cdn url to access the files in the Bower repository. These files are hosted by MaxCDN. Just alter the version as you need.
* https://rawgit.com/Gopaljeepurwar/ui-form-validation/master/dist/scripts/scripts.js

##### CODE
```javascript
angular.module('myApp',['uiFormValidationApp']);
```
## Directives :
* **ui-form-validation-message** : Checks the form validation and shows proper validation messages on focusout. It adds 'ui-error' class on input field if any validation fails.

    | Attribute | Type | Required | Description |
    | --- | --- | --- | ---|
    | field | String | Yes | input field name |
    | validation | String | Yes | validation type,can be single(e.g 'required') or comma separated(e.g 'required,email') |
    
```html
<form name="test">
       <div class="form-group">
         <input type="text" class="form-control" ng-model="uname" name="uname" placeholder="Enter your name" required>
         <ui-form-validation-message field="uname" validation="required">
           <div>
            <span>Please enter a valid name</span>
           </div>
         </ui-form-validation-message>
       </div>
     </form>
``` 

Gives comma seprated value for applying multiple validation on a field
```html
<form name="test">
       <div class="form-group">
         <input type="email" class="form-control" ng-model="email" name="email" placeholder="Enter your email" required>
         <ui-form-validation-message field="email" validation="required,email">
           <div>
              <span>Please enter a valid email</span>
           </div>
         </ui-form-validation-message>
       </div>
     </form>
```


* **ui-custom-validation** :
    | Attribute | Type | Required |Description |
    | --- | --- | --- | ---|
    | reg-exp | Regular Expression | Yes |Regular expression to validate input field |
    | validation | String | No (Default: uiCustomValidation) | Custom validation name |


```html
<form name="test">
       <div class="form-group">
         <input ng-model="userName" name="userName" reg-exp="^[A-z]+$" validation="uiAlphabet" ui-custom-validation/>
         <ui-form-validation-message field="email" validation="uiAlphabet">
           <div>
              <span>Please enter a valid email</span>
           </div>
         </ui-form-validation-message>
       </div>
     </form>
```


* **Default validations** :

    | Directive  | validaion name | Description |
    | --- | --- | ---|
    | ui-alpha-numeric  | uiAlphaNumeric | Only alphabets (i.e. a-z & A-Z) and numeric digits (i.e. 0-9) are allowed. |
    | ui-alphabet  | uiAlphabet | Only alphabets (i.e. a-z & A-Z) are allowed. |
    | ui-lowercase  | uiLowercase | Only alphabets (i.e. a-z) are allowed. |
    | ui-uppercase | uiUppercase | Only alphabets (i.e. A-Z) are allowed. |
    | ui-number  | uiNumber | Only alphabets (i.e. 0-9) are allowed. |
    
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


