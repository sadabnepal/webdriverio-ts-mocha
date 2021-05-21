import WaitUtils from "../utils/WaitUtils";
import { WaitEnum } from '../enums/WaitEnums';

export default class Page {

    private Page() {}
    
    open (path: string) {
        browser.maximizeWindow();
        return browser.url(path);
    }

    protected getElement(element: WebdriverIO.Element, waittype: WaitEnum):WebdriverIO.Element {
        return WaitUtils.WaitFactory(element, waittype);
    }

    protected getElements(element: WebdriverIO.ElementArray, waittype: WaitEnum):WebdriverIO.ElementArray {
        WaitUtils.WaitFactory(element[0], waittype);
        return element;
    }

    protected click(element: WebdriverIO.Element, waittype: WaitEnum):void {
        this.getElement(element, waittype).click();
    }

    protected setData(element: WebdriverIO.Element, value:string, waittype: WaitEnum):void {
        WaitUtils.WaitFactory(element, waittype).setValue(value);
    } 
}