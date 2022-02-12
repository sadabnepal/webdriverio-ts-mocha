import { WebElement } from "web/types/webelements";

export default class Page {

    protected async open(path: string) {
        await browser.maximizeWindow();
        return browser.url(path);
    }

    protected async clickElement(element: WebElement) {
        await element.click();
    }

    protected async setData(element: WebElement, value: string) {
        await element.setValue(value);
    }
}