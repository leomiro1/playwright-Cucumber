const { expect } = require("chai");

class HomePage {
    async showProductDetail(product) {
        let ProductLink = await page.$("//div[contains(@class,'inventory_item_name')][contains(.,'"+product+"')]");
        expect (await ProductLink).to.not.be.null;
        expect (await ProductLink.innerText()).to.include(product);
        await ProductLink.click();
    }
    async goToCart() {
        await page.click('.shopping_cart_link');
    }
}
module.exports = { HomePage };