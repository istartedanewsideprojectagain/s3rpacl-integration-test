# cucumberjs-template 

## Introduction

A [CucumberJS](https://cucumber.io/docs/installation/javascript/) based configuration to make some integration tests for your project

## Write tests

1. Create a `***.feature` file in the folder `features`

2. Write a Scenario :

   ```gherkin
   Feature: Is it Friday yet?
     Everybody wants to know when it's Friday
   
     Scenario: Sunday isn't Friday
       Given today is Sunday
       When I ask whether it's Friday yet
       Then I should be told "Nope"
   ```

   

3. Create the steps definition in a `.js` file in `features/steps_definitions` 

   ```js
   const assert = require('assert');
   const { Given, When, Then } = require('@cucumber/cucumber');
   
   function isItFriday(today) {
       return 'Nope';
   }
   
   Given('today is Sunday', function () {
       this.today = 'Sunday';
   });
   
   When('I ask whether it\'s Friday yet', function () {
       this.actualAnswer = isItFriday(this.today);
   });
   
   Then('I should be told {string}', function (expectedAnswer) {
       assert.equal(this.actualAnswer, expectedAnswer);
   });
   
   ```

## Run the tests

Execute `npm test`



