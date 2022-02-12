import { multipleBrowserCapabilities } from "./capabilities"
import { config as mainConfig } from "./wdio.conf"

export const config: WebdriverIO.Config = {
    ...mainConfig,
    capabilities: multipleBrowserCapabilities

}