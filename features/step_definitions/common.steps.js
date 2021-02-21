const AxiosService = require("../../service/axios.service");
const JwtService = require("../../service/jwt.service");
const {assert} = require('chai');
const {Given,Then} = require('@cucumber/cucumber');
const { v4: uuidv4 } = require('uuid');

var ObjectID = require('mongodb').ObjectID;

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
Given(/^there is a memberList with (\d+) members$/, function (nbMembers) {
    this.memberList = [];
    for (let i =0; i< nbMembers;i++){
        this.memberList.push(new ObjectID());
    }
});
Given(/^I am member of the group \(Set the JWT\)$/, function () {
    const id = this.memberList[0];
    this.jwt = JwtService.createValidToken({_id: id});
});
