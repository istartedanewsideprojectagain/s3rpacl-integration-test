const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^there is a group$/, async function () {
    const body = {
        members: this.memberList
    }
    this.lastResponse = await this.client.post(`/groups`, body, null);
    this.groupId = this.lastResponse.response.data.data._id;
});

When(/^I POST an acl with path "(.*?)" and actions "(.*?)"$/, async function (path,actions) {
    const actionList = actions.split(",");
    const body = {
        path: path+this.uuid,
        action: actionList,
        group: this.groupId
    }
    this.lastResponse = await this.client.post(`/acls`, body, null);
});
