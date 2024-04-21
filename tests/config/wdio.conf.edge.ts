import type { Options } from '@wdio/types'
import { msEdgeCapabilities } from './capabilities'
import { config as mainConfig } from './wdio.conf'

export const config: Options.Testrunner = {
    ...mainConfig,
    capabilities: msEdgeCapabilities,
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableMochaHooks: true,
            reportedEnvironmentVars: {
                browserCapabilities: JSON.stringify(msEdgeCapabilities[0], null, 4)
            }
        }]
    ]
}
