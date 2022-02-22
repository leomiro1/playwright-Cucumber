const { expect } = require("chai");

class LoginPage {

    async navigate() {
        await page.goto('https://www.saucedemo.com/');
    }
    async login(username, password) {
        await page.fill('#user-name',username);
        await page.fill('#password',password);
        await page.click('#login-button');
    }
    async loginFailed(){
        await page.waitForSelector('#login_button_container > div > form > div.error-message-container.error');
        let error = await page.$eval('#login_button_container > div > form > div.error-message-container.error', (errortext) => errortext.textContent);
        expect (error).to.include("Epic sadface: Username and password do not match any user in this service")
    }
    async lockedUser(){
        await page.waitForSelector('#login_button_container > div > form > div.error-message-container.error');
        let error = await page.$eval('#login_button_container > div > form > div.error-message-container.error', (errortext) => errortext.textContent);
        expect (error).to.include("Epic sadface: Sorry, this user has been locked out.")
    }
    async loginSuccessful(){ 
        let homeElement = await page.$('.title');
        expect (homeElement).to.not.be.null;
    }
    
  }
  module.exports = { LoginPage };