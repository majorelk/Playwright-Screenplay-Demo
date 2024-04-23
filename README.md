# Playwright-Screenplay-Demo
This repository contains an automated testing suite for the Sauce Demo e-commerce website, crafted using Playwright with TypeScript and the Screenplay pattern. The suite demonstrates both front-end UI interactions and hypothetical API interactions to provide a robust example of automation best practices.

## Overview
The purpose of this project is to showcase various testing techniques in Playwright, utilising the Screenplay pattern to enhance readability and maintainability of the test code. I would like it to serve as a resource for testers and developers looking to deepen their understanding of browser-based automation and API testing strategies.

## Features

- **Front-End UI Testing**: Automated checks that perform various user interactions with the Sauce Demo website.
- **API Interaction**: Examples of how API tests could be integrated using Playwright.
- **Screenplay Pattern**: Implementation of the Screenplay pattern to organise test scripts in a highly readable and modular format.

# Preequisites
Before you can run these tests, you will need to install several dependencies

- Node.js
- npm
- Playwright
- TypeScript

You can install Node.js and NPM from [NodeJs.org](https://nodejs.org). After installation, you can install Playwright and TypeScript using npm:

```bash
npm install playwright typescript
```
## Installation

Clone this repository with Git:
```bash
git clone https://github.com/majorelk/Playwright-Screenplay-Demo.git
cd Playwright-Screenplay-Demo
```

Install the required NPM packages:
```
npm install
```

## Running the tests
To run the front-end UI tests, execute:
```bash
npm run test-ui
```

To execute the hypothetical API tests (as the saucelabs site doesn't provide external API endpoints):
```
npm run test-api
```

## Contributing
Contributions are welcome, please consider forking the repository and submitting a pull request with your improvements.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

---

### Note

This README assumes that you will set up scripts named `test-ui` and `test-api` in your `package.json`. You should adapt the content to match the actual configuration and scripts of your project. This README provides a comprehensive guide for users to get started with the project, explaining how to set up, run tests, and contribute.

