export default class Page {
    
    open (path: string) {
        browser.maximizeWindow();
        return browser.url(path);
    } 
}