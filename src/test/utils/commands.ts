export const clickElement = (element: WebdriverIO.Element) => {
    $(element).click();
}

export const setData = (element: WebdriverIO.Element, value:string) => {
    $(element).setValue(value);
}