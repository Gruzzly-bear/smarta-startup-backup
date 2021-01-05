# Purpose

This document is used to keep track of all details related to testing the React application using Jest. 
<br></br>

# Checklist

* For every file worked on, you must create your own unit tests!
  * Create a folder under: *smarta_web\smarta\src\\_\_tests\_\_* with the name of your page
  * Within this folder, store all tests related to your page
  * Testing file extension: \<name\>.test.js
* All tests go under the following folder: *smarta_web\smarta\src\\_\_tests\_\_*
* **NEVER** commit any code which doesn't pass its associated tests! 
<br></br>

# About Jest
* Javascript testing framework 
* Every time *npm test* is run, Jest only runs tests related to files changed since the last commit
* For an example to see how testing works in Jest, refer to: *smarta_web\smarta\src\\_\_tests\_\_\JestTutorial.test.js* and the resources below
<br></br>

# Jest CLI Options
* Run all tests: `npm test`
* Run tests and provide code coverage: `npm test -- --coverage`
* Show helpful information: `npm test -- --help`
* Prevent tests from printing console messages: `npm test -- --silent`
* Print jest version: `npm test -- --version`

# Resources 
* https://github.com/leveluptuts/React-Testing-For-Beginners#updating-to-new-releases
* https://jestjs.io/docs/en/getting-started
* https://jestjs.io/ 
* https://jestjs.io/docs/en/cli#using-with-npm-scripts
* https://www.valentinog.com/blog/jest/ 
* 