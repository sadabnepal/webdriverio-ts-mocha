import type { Options } from '@wdio/types';
import { config as dotEnvConfig } from 'dotenv';
import { config as mainConfig } from './wdio.conf';
dotEnvConfig();

export const config: Options.Testrunner = {
    ...mainConfig,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    services: [
        [
            'browserstack',
            {
                testObservability: true,
                testObservabilityOptions: {
                    'projectName': 'WebdriverIO TypeScript Mocha Framework',
                    'buildName': 'Nightly regression'
                },
                browserstackLocal: true,
                opts: { forceLocal: false }

            }
        ]
    ],
    capabilities: [
        {
            browserName: 'Chrome',
            'bstack:options': {
                os: 'Windows',
                osVersion: '10',
                browserVersion: '120.0',
                buildName: 'wdio-browserStack-demo',
                buildIdentifier: '${BUILD_NUMBER}',
                projectName: 'WebdriverIO TypeScript Mocha Framework'
            }
        },
        {
            browserName: 'Chrome',
            'bstack:options': {
                os: 'OS X',
                osVersion: 'Sonoma',
                browserVersion: 'latest',
                buildName: 'wdio-browserStack-demo',
                buildIdentifier: '${BUILD_NUMBER}',
                projectName: 'WebdriverIO TypeScript Mocha Framework'
            }
        }
    ]
};
