
![Playwright Test Execution]
    
# Playwright with CucumberJS
    
Playwright end-to-end test automation with CucumberJS
    
## Getting Started

* To install Playwright : `npm i -D playwright`
* To install Cucumber   : `npm install --save-dev @cucumber/cucumber`
* To install Chai : `npm i -D chai`
* To install Cucumber HMTL reporter: `npm i -D cucumber-html-reporter`
 
## To execute the tests

Define the scripts in package.json as follows :
```json
"scripts": {
    "test": "cucumber-js --publish-quiet --parallel 1 -f json:report/report.json && node report.js"
  }
```
Finally execute the tests with `npm test`


### Create a fresh browser context for each test
```Javascript
Before(async() =>{
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});
```
### A sample Feature file
```gherkin
Scenario Outline: Login to the E-Shop Application with Wrong Password
    Given User launched eshop login page
    When User logged in eshop using the invalid emailid "<EmailID>" and the invalid password "<Password>"
    Then User should not get logged in

    Examples:
      | EmailID                    | Password  |
      | testuser_negative@shop.com | Testing$1 |
```
### A sample stepdefinition
```Javascript
When('User logged in eshop using the invalid emailid {string} and the invalid password {string}',async(username,password) =>{
    await loginpage.login(username,password);
});
```
### Example of how a Playwright code snippet looks
```Javascript
const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.example.com/');
  await page.screenshot({ path: 'page.png', fullPage: true });

  await browser.close();
})();
```
For more on Playwright click [here](https://playwright.dev/)

