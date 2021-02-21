const { assert } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');
const FormData = require('form-data');
const fs = require('fs');


Given(/^there is a file in "([^"]*)"$/, async function (path) {
    const formData = new FormData();
    formData.append('path',path+this.uuid);
    const file = fs.readFileSync(__dirname+'/../../../files/a.jpg');
    formData.append('file',file,{
        filepath: 'a.jpg',
        contentType: 'image/jpeg',
    });
    this.lastResponse = await this.client.postFile(`/upload`, formData, this.jwt, formData.getHeaders());
    assert.equal(this.lastResponse.response.status,200);
});
