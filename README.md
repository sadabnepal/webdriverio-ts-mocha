# WebdriverIO TypeScript Mocha Framework
This is a sample project that uses WebdriverIO and TypeScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO for cross browser and parallel testing.

### Requirements
-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)

### Getting Started
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOTypeScriptMocha.git
2. Navigate to WebdriverIOTypeScriptMocha
```

Install the dependencies:
```bash
npm install
```

Run tests:
```bash
npm test    [ UI test ]
npm run api [ API tests ]
```

Generate mochawesome report (UI):
```bash
npm run report
```

Report Paths:
```
API: reports/api/mochawesome.html
UI: mochawesome-report/mochawesome-report.html
```

### Key Features
	- WebdriverIO (v7)
	- TypeScript
	- Mocha framework
	- Page Object Design pattern
	- Mochawesome Report
	- Parallel execution
	- Cross browser testing
	- API tests (supertest)
	- Screenshot in report for failed tests

### Folder Structure
```

├───config
|      └───APIConfig.ts
├───src
|   ├───api
|   |     ├───resources
|   |     |      └───payloads.ts
|   |     ├───services
|   |     |      └───endpoints.ts
|   |     └───test
|   |            └───reqres_users.ts
│   └───web
|	    ├───pages
|	    │  	 ├───secure.page.ts
|	    │	 ├───login.page.ts
|	    │	 └───page.ts
|	    ├───specs
|	    │    └───login.e2e.ts
|	    ├───static
|	    │    └───loginConstants.ts
|	    └───utils
|            ├───commands.ts
|            └───fileutils.ts
├───package.json
├───README.md
├───tsconfig.json
└───wdio.conf.js
```
	
### Sample Report
API:
![image](https://user-images.githubusercontent.com/65847528/143480364-2315b191-e8cd-460b-967c-e430abb29416.png)

UI:
![image](https://user-images.githubusercontent.com/65847528/143480443-cee233a4-6296-4773-8b54-c593d7dfd022.png)
