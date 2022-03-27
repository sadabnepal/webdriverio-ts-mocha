# WebdriverIO TypeScript Mocha Framework
This is a sample project that uses WebdriverIO and TypeScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO for cross browser and parallel testing.

### Requirements
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

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
npm test                [ UI test in chrome ]
npm run multi-browser   [ UI test in chrome and edge ]
npm run api             [ API tests ]
```

Generate report (UI):
```bash
npm run report
```

Report Paths:
```
UI:  reports/mocha/mocha.html
API: reports/api/mochawesome.html
```

Cleanup Report folder
```
npm run cleanup
```

### Key Features
	- Web App and API testing
	- Page Object Design pattern
	- Custome types for web elements
	- Parallel execution and Cross browser testing
	- Report integration with screenshot on failure

### Folder Structure
```
├───src
|   ├───api
|   |    ├───config
|   |    ├───resources
|   |    ├───services
|   |    └───test
│   └───web
|        ├───config
|        ├───pages
|        ├───specs
|        ├───static
|        └───types
├───package-lock.json
├───package.json
├───README.md
└───tsconfig.json
```
	
### Sample Report
API:
![image](https://user-images.githubusercontent.com/65847528/143480364-2315b191-e8cd-460b-967c-e430abb29416.png)

UI:
![image](https://user-images.githubusercontent.com/65847528/143480443-cee233a4-6296-4773-8b54-c593d7dfd022.png)
