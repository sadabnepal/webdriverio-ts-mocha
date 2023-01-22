import { config as mainConfig } from "wdio.conf"
import { multipleBrowserCapabilities } from "./src/config/capabilities"

export const config: WebdriverIO.Config = {
    ...mainConfig,
    capabilities: multipleBrowserCapabilities

}