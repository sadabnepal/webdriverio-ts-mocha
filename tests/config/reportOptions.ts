import { config } from 'dotenv';
import type { ReporterOptions } from '../types/wdio';
const { Reporter } = require('@reportportal/agent-js-webdriverio');
config();

const allureOptions = (caps: any) => {
    return {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableMochaHooks: true,
        reportedEnvironmentVars: {
            browserCapabilities: JSON.stringify(caps, null, 4)
        }
    };
};

const reportPortalOptions = {
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
};

export const reportOptions = (caps: any): ReporterOptions => {
    if (process.env.REPORT_PORTAL_SWITCH === "ON") {
        return [
            'spec',
            ['allure', allureOptions(caps)],
            [Reporter, reportPortalOptions]
        ]
    } else {
        return [
            'spec',
            ['allure', allureOptions(caps)],
        ]
    }
};
