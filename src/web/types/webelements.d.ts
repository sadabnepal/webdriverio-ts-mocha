import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio"

export type WebElement = ChainablePromiseElement<WebdriverIO.Element>
export type WebElements = ChainablePromiseArray<ElementArray>