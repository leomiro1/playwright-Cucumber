const { expect } = require("chai");

class CartPage {
    async checkProduct(product) {
        let ProductLink = await page.$(".inventory_item_name");
        expect (await ProductLink).to.not.be.null;
        expect (await ProductLink.innerText()).to.include(product);
        await ProductLink.click();
    }
    async startCheckout() {
        await page.click("#checkout");
    }
    async returnToHome() {
        await page.click("#continue-shopping");
    }
}

module.exports = { CartPage };