import type { ReporterEntry } from '@wdio/types/build/Reporters.js';
import type { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from 'webdriverio';

export type WebdriverIOElement = ChainablePromiseElement<WebdriverIO.Element>;
export type WebdriverIOElements = ChainablePromiseArray<ElementArray>;
export type ReporterOptions = ReporterEntry[];

