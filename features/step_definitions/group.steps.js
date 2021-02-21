const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


When(/^I POST a group$/, async function () {
    const body = {
        members: this.memberList
    }
    this.lastResponse = await this.client.post(`/groups`, body, null);
});
