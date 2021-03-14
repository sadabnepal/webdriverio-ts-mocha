import { WaitEnum } from '../enums/WaitEnums';

class WaitUtils {
    
    getErrorMsg(type:string) { return "Failed while waiting for element to be "+type; }

    public WaitFactory(element: WebdriverIO.Element, waittype:WaitEnum):WebdriverIO.Element {
        if(waittype == "CLICKABLE") {
            browser.waitUntil(
                () => element.isClickable() == true, 
                {timeout: 60000, timeoutMsg: this.getErrorMsg("CLICKABLE")}
            )
            return element;
        }
        else if (waittype == "DISPLAYED") {
            browser.waitUntil(
                () => element.isDisplayed() == true, 
                {timeout: 60000, timeoutMsg: this.getErrorMsg("DISPLAYED")}
            )
            return element;
        }
        else if (waittype == "EXIST") {
            browser.waitUntil(
                () => element.isExisting() == true, 
                {timeout: 60000, timeoutMsg: this.getErrorMsg("EXIST")}
            )
            return element;
        }
        else if (waittype == "NONE") {
            return element;
        }
        else {   
            return null;
        }
    }

}
export default new WaitUtils()