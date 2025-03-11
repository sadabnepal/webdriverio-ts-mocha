export default class Page {

    protected async open(path: string) {
        await browser.maximizeWindow();
        return await browser.url('https://the-internet.herokuapp.com'.concat(path));
    }

}