const {Given, When, Then} = require ('@cucumber/cucumber')
const {LoginPage} = require('../../page_object/login.page')

const loginpage = new LoginPage();


Given('User launched eshop login page', async()=>{
    await loginpage.navigate();
 });

When('User logged in eshop using the invalid emailid {string} and the invalid password {string}',async(username,password) =>{
    await loginpage.login(username,password);
});

When('User logged in eshop using the valid emailid {string} and the valid password {string}', async (email, password) =>{
    await loginpage.login(email,password); 
});

Then('User should see a message of locked user', async()=>{
    await loginpage.lockedUser();
});

Then('User should not get logged in', async()=>{
    await loginpage.loginFailed();
});

Then('user should see a shop home page', async()=>{
    await loginpage.loginSuccessful();
});

