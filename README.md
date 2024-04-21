# WebdriverIO TypeScript Mocha Framework

This is a sample project that uses WebdriverIO and TypeScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO for cross browser and parallel testing.

### Requirements

[![NodeJs](https://img.shields.io/badge/-NodeJS%20v%20>=%2016-white?logo=node.js)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started

Clone Repository

```bash
git clone https://github.com/sadabnepal/webdriverio-ts-mocha.git
cd webdriverio-ts-mocha
```

Install packages:

```bash
npm install
```

Run tests:

```bash
npm run test            [ test in chrome ]
npm run test:edge       [ test in edge ]
npm run cross-browser   [ test in chrome and edge ]
npm run test:docker     [ test inside container ]
```

Docker:

```bash
docker compose -f docker-compose.yml up
open http://localhost:4444/ to check if server is running
docker compose -f docker-compose-arm.yml up  [ for m1 chip mac user]
```

Generate report:

```bash
npm run report
```

Cleanup Report folder

```bash
npm run cleanup
```

### Key Features
- Custom types for web elements
- Parallel execution and Cross browser testing
- Docker for run test again/using containerization
- Github actions CI/CD integration

### Folder Structure

```ini
├───.github
├───.vscode
├───tests
|    ├───config
|    ├───pages
|    ├───specs
|    ├───static
|    └───types
├───package-lock.json
├───package.json
├───README.md
└───tsconfig.json
```

### Sample Report

![image](https://user-images.githubusercontent.com/65847528/143480443-cee233a4-6296-4773-8b54-c593d7dfd022.png)
