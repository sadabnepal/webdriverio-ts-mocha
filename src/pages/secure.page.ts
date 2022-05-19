import Page from "./page"

class SecurePage extends Page {

    get flashAlert() { return this.getElement('#flash') }

}
export default new SecurePage()