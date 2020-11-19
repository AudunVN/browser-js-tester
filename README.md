# browser-js-tester
A very small test runner for browser-side JavaScript code. [Opening test.html](https://471.no/browser-js-tester/test.html) in whichever web browser you want runs the tests you've defined in [tests.js](test.js) and prints the results.

Based on ["Unit Test Your JavaScript Code Without a Framework"](https://medium.com/javascript-in-plain-english/unit-test-front-end-javascript-code-without-a-framework-8f00c63eb7d4) by Amit Gupta, which also contains useful insight into how to write more complex (async, etc.) tests for this. Whether my version of it is an improvement or not is debatable, but I found it useful to have the output available in HTML for quickly running tests in mobile/embedded/weird browsers where the output of `console.log()` isn't easily available.
