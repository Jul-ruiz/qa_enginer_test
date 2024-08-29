##Introduction

In this project, a comprehensive suite of tests was created to showcase my abilities as a tester, highlighting the effectiveness of various testing tools and techniques.
These tests demonstrate a strong understanding of end-to-end testing, unit testing, and session management, ensuring that the application performs as expected under different scenarios.

To execute this project, you will need the following dependencies installed: Node.js, Cypress, Playwright, and Jest the versions are located in package.json.
It is recommended to follow the tests in the order presented in this document for optimal results.



##Prerequisites

Ensure the React project is running on localhost:3000. You can start the development server by running:
npm start



##Playwright

To run Playwright tests, use the following command in your terminal:
npx playwright test



##Cypress

With the latest Cypress update, the integrations folder has been renamed to e2e to follow best practices. We have adopted this naming convention for consistency.

To run Cypress tests:
Ensure the React project is running on localhost:3000 (see Prerequisites).
In your terminal, enter the following command:

npx cypress open

Click on E2E Testing.
Select Firefox (preferred).

You will see the tests located in cypress/e2e/.
Click on each test to run it.


##Jest

Running Jest tests does not require the React app to be running.
To execute Jest tests, use the following command in your terminal:

npm test -- --findRelatedTests UserContext.test.js

