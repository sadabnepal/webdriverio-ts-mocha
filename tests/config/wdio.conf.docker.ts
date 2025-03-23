import { multipleBrowserCapabilities } from './capabilities';
import { reportOptions } from './reportOptions';
import { config as mainConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
    ...mainConfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    maxInstances: 5,
    capabilities: multipleBrowserCapabilities,
    services: ['docker'],
    reporters: reportOptions(multipleBrowserCapabilities)
};
