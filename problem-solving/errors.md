# Errors

Understanding errors and how to approach them is a integral skill for any software developer. Errors can be quite daunting at first, but they are actually very helpful. We will look at errors and how to handle them in more detail on the bootcamp, but for now we'd like you to start familiarising yourself with them.

Below is an example of an error message from a failing test:

    getFirstItem › returns first item in the array

    ReferenceError: firstitem is not defined

       5 |   const firstItem = arr[0];
       6 |
    >  7 |   return firstitem;
         |   ^
       8 | }
       9 |
      10 |

      at getFirstItem (problem-solving/errors.js:7:3)
      at Object.<anonymous> (__tests__/errors.test.js:5:12)

- The test suite is telling us here that `firstitem is not defined` and the arrows point out line 7 as the location of the problem.

- We can confirm where this error is coming from through the stack trace: `at getFirstItem (problem-solving/errors.js:7:3)`.

- The stack trace tells us the error is within the `getFirstItem` function inside the file `problem-solving/errors.js` on line `7`.

- _NOTE: The `3` refers to which character it begins at on line 7_.

Using this information we can consider what our first steps may be in solving this error.

📖 _NOTE: You may notice this example has been flagged as a ReferenceError. If you would like to read more about the different types of error you may encounter, [this article](https://www.educative.io/edpresso/what-are-the-6-types-of-errors-in-javascript-codes) has a brief overview. However we will be going into errors and types in much more detail on the bootcamp._

💻 **In [errors.js](./errors.js) there are a number of katas designed to help you improve your understanding of errors and how to fix them.**

If you run `npm test errors.test.js` you will see that all of these tests fail for various reasons.

Fix the existing code for each kata so that they pass the tests associated with them.

Once you have fixed all the broken katas, move onto section 6 (What is Javascript) in the [README](../README.md).
