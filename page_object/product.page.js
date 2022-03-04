class ProductPage {

    async addProductToCart() {
        await page.click("//button[contains(@id,'add-to-cart')]");
    }

    async returnToHome() {
        await page.click("//button[contains(@id,'back-to-products')]");
    }
}

module.exports = { ProductPage };