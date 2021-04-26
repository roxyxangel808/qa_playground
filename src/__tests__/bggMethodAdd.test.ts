import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
} from "selenium-webdriver"


const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

    class BggPage{
        driver: WebDriver
        url: string = "https://boardgamegeek.com/";
        headerLogo: By = By.className("menu-logo-symbol"); // need a locator
        searchBar: By = By.name("searchTerm"); // need a locator
        gamePageName: By = By.xpath("//h1/a"); // need a locator
        gamePageRating: By = By.css('[ng-show="showRating"]');// need a locator
        constructor(driver: WebDriver) {
            this.driver = driver
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.headerLogo))
        await this.driver.wait(until.elementIsVisible(await driver.findElement(this.headerLogo)))
    }
    async getResultNameLink(name:string){
        let xpathToFind = `//div[@id='maincontent']//a[text()='${name}']`
        await this.driver.wait(until.elementLocated(By.xpath(xpathToFind)))
        return By.xpath(xpathToFind)
    }
    async getText(elementBy: By) { 
        // we make sure the element is available to us 
        await this.driver.wait(until.elementLocated(elementBy)); 
        // and return the Promise<string> from the getText() 
        return this.driver.findElement(elementBy).getText(); 
        } 
        async getAttribute(elementBy: By, attribute: string) { 
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).getAttribute(attribute); 
        } 
        async click(elementBy: By) { 
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click(); 
        } 
        async sendKeys(elementBy: By, keys) { 
        await this.driver.wait(until.elementLocated(elementBy)); 
        return driver.findElement(elementBy).sendKeys(keys); 
        }
}