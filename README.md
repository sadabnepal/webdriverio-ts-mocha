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
npm test (all UI test)
npm run api (all API tests)
```

Generate allure report:
```bash
npm run report
```
### Key Features
	- Allure and mochawesome Report
	- Mocha framework
	- Parallel execution
	- Cross browser testing
	- Page Object Design pattern
	- API Testing using supertest

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
|   |     └───tests
|   |            └───reqres_users.ts
│   └───test
|	    ├───pages
|	    │  	 ├───secure.page.ts
|	    │	 ├───login.page.ts
|	    │	 └───page.ts
|	    ├───specs
|	    │    └───login.e2e.ts
|	    └───utils
|	         └───commands.ts
├───package.json
├───README.md
├───tsconfig.json
└───wdio.conf.js
```
	
### Sample Report
![sample_allure_report](https://user-images.githubusercontent.com/65847528/111063152-129a4c80-84d3-11eb-953e-a8e93a570ae5.png)
