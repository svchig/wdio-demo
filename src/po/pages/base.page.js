const { SiteToolBarComponent, LoginWindowComponent }= require("../components");

class BasePage {

    constructor(url) {
        this.url = url
        this.siteToolBarMenu = new SiteToolBarComponent();
        this.loginWindow = new LoginWindowComponent();
    }
    open() {
        return browser.url(this.url);
    } 
}

module.exports = BasePage;