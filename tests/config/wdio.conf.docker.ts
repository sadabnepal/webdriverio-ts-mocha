import type { Options } from '@wdio/types'
import { multipleBrowserCapabilities } from './capabilities'
import { config as mainConfig } from './wdio.conf'

export const config: Options.Testrunner = {
    ...mainConfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    maxInstances: 5,
    capabilities: multipleBrowserCapabilities,
    services: ['docker'],
    reporters: [
        'spec',
        [
            'allure', {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableMochaHooks: true,
                reportedEnvironmentVars: {
                    browserCapabilities: JSON.stringify(multipleBrowserCapabilities, null, 4)
                }
            }
        ]
    ]
}
