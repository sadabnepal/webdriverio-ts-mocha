const browserArgs = [
    '--no-sandbox',
    '--disable-infobars',
    '--headless',
    '--disable-gpu',
    '--window-size=1440,735'
]

export const chromeCapabilities = [
    {
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: browserArgs
        }
    }
]

export const multipleBrowserCapabilities = [
    ...chromeCapabilities,
    {
        maxInstances: 2,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true,
        'ms:edgeOptions': {
            args: browserArgs
        }
    },
]