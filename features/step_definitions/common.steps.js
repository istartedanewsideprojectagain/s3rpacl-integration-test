const AxiosService = require("../../service/axios.service");
const JwtService = require("../../service/jwt.service");
const {assert} = require('chai');
const {Given,Then} = require('@cucumber/cucumber');
const { v4: uuidv4 } = require('uuid');

Given(/^there is a server and a client$/, function () {
    this.client = AxiosService;
})

Then(/^I receive a (\d+) status code$/, function (expectedCode) {
    assert.equal(expectedCode,this.lastResponse.response.status);
})

Given('I have a valid JWT with role {string}', function (role) {
    this.jwt = JwtService.createValidToken({role: role,sub: this.uuid});
});

Given(/^I have a invalid JWT$/, function () {
    this.jwt = JwtService.createBadSignatureToken({role: 'admin',sub: this.uuid});
});


Given(/^I have an expired JWT$/, function () {
    this.jwt = JwtService.createExpiredToken({role: 'admin',sub: this.uuid});
});
Given(/^A random a UUID$/, function () {
    this.uuid =uuidv4();
});
