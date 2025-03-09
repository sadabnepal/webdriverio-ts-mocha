import { msEdgeCapabilities } from './capabilities';
import { reportOptions } from './reportOptions';
import { config as mainConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
    ...mainConfig,
    capabilities: msEdgeCapabilities,
    reporters: reportOptions(msEdgeCapabilities)
};
