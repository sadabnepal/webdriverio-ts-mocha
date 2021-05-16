# WebdriverIO TypeScript Mocha Framework
This is a sample project that uses WebdriverIO and TypeScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO for cross browser and parallel testing.

### Requirements
-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

### Getting Started
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOMochaFramework.git
2. Navigate to WebdriverIOMochaFramework
```

Install the dependencies:
```bash
npm install
```

Run e2e tests:
```bash
npm test
```

Generate allure report:
```bash
npm run report
```

### Folder Structure
```
├───test
│   ├───enums
|   │   	└───WaitEnums.ts
|   ├───Utils
|   │   	└───WaitUtils.ts
|   ├───pagesobjects
|   │  	   	├───secure.page.ts
|   │		├───login.page.ts
|   │		└───page.ts
|   └───specs
|		    └───login.e2e.ts
├───package.json
├───README.md
├───tsconfig.json
└───wdio.conf.js
```

### Key Features
	- Allure Report
	- Mocha framework
	- Parallel execution
	- Cross browser testing
	- Page Object Design pattern
	
### Sample Report
![sample_allure_report](https://user-images.githubusercontent.com/65847528/111063152-129a4c80-84d3-11eb-953e-a8e93a570ae5.png)
