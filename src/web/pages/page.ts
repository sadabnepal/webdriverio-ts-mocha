import { webelement } from "web/types/webelements";

export default class Page {

    protected open(path: string) {
        browser.maximizeWindow();
        return browser.url(path);
    }

    protected clickElement(element: webelement) {
        $(element).click();
    }

    protected setData(element: webelement, value: string) {
        $(element).setValue(value);
    }
}