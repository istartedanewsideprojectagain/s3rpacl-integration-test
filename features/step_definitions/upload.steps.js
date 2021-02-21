const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const FormData = require('form-data');
const fs = require('fs');

Given(/^there is an acl for "([^"]*)" with action "([^"]*)"$/, async function (path,actions) {
    const actionList = actions.split(",");
    const body = {
        path: path+this.uuid,
        action: actionList,
        group: this.groupId
    }
    this.lastResponse = await this.client.post(`/acls`, body, this.jwt);
    this.aclId = this.lastResponse.response.data.data._id;
});
When(/^I POST a file on path "([^"]*)"$/, async function (path) {
    const formData = new FormData();
    formData.append('path',path+this.uuid);
    const file = fs.readFileSync(__dirname+'/../../files/a.jpg');
    formData.append('file',file,{
        filepath: 'a.jpg',
        contentType: 'image/jpeg',
    });
    this.lastResponse = await this.client.postFile(`/upload`, formData, this.jwt, formData.getHeaders());
});
