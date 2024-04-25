import type { Options } from '@wdio/types';
import { msEdgeCapabilities } from './capabilities';
import { reportOptions } from './reportOptions';
import { config as mainConfig } from './wdio.conf';

export const config: Options.Testrunner = {
    ...mainConfig,
    capabilities: msEdgeCapabilities,
    reporters: reportOptions(msEdgeCapabilities)
};
