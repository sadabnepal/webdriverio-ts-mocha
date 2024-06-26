import type { Options } from '@wdio/types';
import { multipleBrowserCapabilities } from './capabilities';
import { reportOptions } from './reportOptions';
import { config as mainConfig } from './wdio.conf';

export const config: Options.Testrunner = {
    ...mainConfig,
    capabilities: multipleBrowserCapabilities,
    reporters: reportOptions(multipleBrowserCapabilities)
};