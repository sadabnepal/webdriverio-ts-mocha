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
        browserVersion: 'stable',
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
        browserVersion: 'stable',
        acceptInsecureCerts: true,
        'ms:edgeOptions': {
            args: browserArgs
        }
    },
]