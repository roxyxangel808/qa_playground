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
    .build()
    //*Above these are always need/
    //*Actual test cases are here on the bottom/
    test("async await functionality", async () => {
        await driver.get("https://www.google.com")
        await driver.wait(until.elementLocated(By.name("q")))
        await driver.findElement(By.name("q")).sendKeys("Penguins\n")
        await driver.wait(until.elementLocated(By.id("rso")))
        let value = await (await driver.findElement(By.id("rso"))).getText()

        expect(value.toLowerCase()).toContain("penguins")
})
    test("googling something else", async () => {
        await driver.get("https://www.google.com")
        await driver.wait(until.elementLocated(By.name("q")))
        await driver.findElement(By.name("q")).sendKeys("Dwight identity theft\n")
        await driver.wait(until.elementLocated(By.id("rso")))
        let value = await (await driver.findElement(By.id("rso"))).getText()

        expect(value.toLowerCase()).toContain("dwight")
    })
//** Loop*/
afterAll(async () => {
    await driver.quit()
    console.log("Look I googled something!")
})