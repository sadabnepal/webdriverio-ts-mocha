export default class Page {

    protected async open(path: string) {
        await browser.maximizeWindow();
        return await browser.url(path);
    }

}