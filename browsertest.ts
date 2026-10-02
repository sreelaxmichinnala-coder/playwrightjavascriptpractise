import { BROWSERS, ENVS } from "./enumTest.js";


let browserName = 'chrome';//coming from csv/config file

switch (browserName) {
    case BROWSERS.CHROME:
        console.log('open chrome');
        break;
    case BROWSERS.FIREFOX:
        console.log('open ff');
        console.log('testing');
        break;

    default:
        break;
}
