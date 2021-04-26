import * as movies from "../googleSomething.json"
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
import { moveEmitHelpers, moveSyntheticComments } from "typescript";
  const chromedriver = require("chromedriver");
  
  // this is standard "boilerplate" code.
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

    movies.forEach((movies) => {
        test(`seaerching for ${movies}`, async () => )
    })