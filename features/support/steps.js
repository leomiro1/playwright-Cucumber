const {Given, When, Then} = require ('@cucumber/cucumber')

const {LoginPage} = require('../../page_object/login.page')
const {HomePage} = require('../../page_object/home.page')
const {ProductPage} = require('../../page_object/product.page')
const {CartPage} = require('../../page_object/cart.page')

const loginpage = new LoginPage();
const homepage = new HomePage();
const productpage = new ProductPage();
const cartpage = new CartPage();

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

When('User clicks on the {string} link', async (product) =>{
    await homepage.showProductDetail(product);
});

When('User adds product to the cart', async()=>{
    await productpage.addProductToCart();
    await productpage.returnToHome();
});

Then('User should be able to see the listed product {string} on the cart', async (product) =>{
    await homepage.goToCart();
    await cartpage.checkProduct(product);
});