import type { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from 'webdriverio';
import type { ReporterEntry } from '../../node_modules/@wdio/types/build/Reporters.js';

export type WebdriverIOElement = ChainablePromiseElement<WebdriverIO.Element>;
export type WebdriverIOElements = ChainablePromiseArray<ElementArray>;
export type ReporterOptions = ReporterEntry[];

