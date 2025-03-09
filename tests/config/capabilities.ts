const browserArgs = [
    '--no-sandbox',
    '--headless',
    '--disable-gpu',
    '--enable-automation',
    '--window-size=1440,735'
];

export const chromeCapabilities = [
    {
        browserName: 'chrome',
        browserVersion: 'stable',
        acceptInsecureCerts: true,
        'wdio:maxInstances': 2,
        'goog:chromeOptions': {
            args: browserArgs,
            prefs: {
                'profile': {
                    'password_manager_leak_detection': false
                }
            }
        }
    }
];

export const msEdgeCapabilities = [
    {
        browserName: 'MicrosoftEdge',
        browserVersion: 'stable',
        acceptInsecureCerts: true,
        'wdio:maxInstances': 2,
        'ms:edgeOptions': {
            args: browserArgs
        }
    }
];

export const multipleBrowserCapabilities = [
    ...chromeCapabilities,
    ...msEdgeCapabilities
];