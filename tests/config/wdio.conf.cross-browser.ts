import { multipleBrowserCapabilities } from './capabilities';
import { reportOptions } from './reportOptions';
import { config as mainConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
    ...mainConfig,
    capabilities: multipleBrowserCapabilities,
    reporters: reportOptions(multipleBrowserCapabilities)
};