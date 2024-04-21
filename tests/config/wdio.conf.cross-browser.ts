import type { Options } from '@wdio/types'
import { multipleBrowserCapabilities } from './capabilities'
import { config as mainConfig } from './wdio.conf'

export const config: Options.Testrunner = {
    ...mainConfig,
    capabilities: multipleBrowserCapabilities,
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