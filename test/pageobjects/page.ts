import WaitUtils from "../utils/WaitUtils";
import { WaitEnum } from '../enums/WaitEnums';

export default class Page {

    private Page() {}
    
    open (path: string) {
        browser.maximizeWindow();
        return browser.url(path);
    }

    protected click(element: WebdriverIO.Element, waittype: WaitEnum):void {
        WaitUtils.WaitFactory(element, waittype).click();
    }

    protected setData(element: WebdriverIO.Element, value:string, waittype: WaitEnum):void {
        WaitUtils.WaitFactory(element, waittype).setValue(value);
    }
}