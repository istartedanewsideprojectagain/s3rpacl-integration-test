const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const FormData = require('form-data');
const fs = require('fs');


When(/^I GET the file for path "([^"]*)"$/, async function (path) {
    this.lastResponse = await this.client.get('/auth',this.jwt, { 'x-original-uri': path+this.uuid});
});
