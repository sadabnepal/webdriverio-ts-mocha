import type { Options } from '@wdio/types';
import { config as dotEnvConfig } from 'dotenv';
import { chromeCapabilities } from './capabilities';
import { config as mainConfig } from './wdio.conf';

const { Reporter } = require('@reportportal/agent-js-webdriverio');
dotEnvConfig();

const reportPortalConfig = {
    apiKey: process.env.REPORT_PORTAL_KEY,
    endpoint: 'http://localhost:8080/api/v2',
    project: process.env.REPORT_PORTAL_PROJECT,
    launch: 'WebdriverIO-Mocha-Web-App',
    description: 'Testing wdio mocha integration',
    attachPicturesToLogs: true,
    reportSeleniumCommands: true,
    seleniumCommandsLogLevel: 'debug',
    attributes: [
        {
            key: 'test type',
            value: 'Smoke',
        },
        {
            value: 'integration',
        }
    ]
}

export const config: Options.Testrunner = {
    ...mainConfig,
    maxInstances: 5,
    capabilities: chromeCapabilities,
    reporters: ['spec', [Reporter, reportPortalConfig]],
    reporterSyncInterval: 1000
}