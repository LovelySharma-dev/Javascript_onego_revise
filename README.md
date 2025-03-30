# Javascript_onego_revise
A code repo to do revision of JavaScript in future

### Javacript is single threaded.

# JavaScript (JS) - Comprehensive Guide

## Introduction
JavaScript (JS) is a high-level, dynamic programming language primarily used for web development. It enables interactive web pages and is a core technology alongside HTML and CSS.

## History
- **Created By**: Brendan Eich
- **First Released**: 1995
- **Developed By**: Netscape (now maintained by ECMA International as ECMAScript)
- **Why Created?**: To add interactivity to web pages.

## Key Features
- **Interpreted Language**: Executes code line-by-line without compilation.
- **Dynamic Typing**: Variables do not require explicit type declarations.
- **Prototype-Based Object Orientation**: Uses prototypes instead of classical inheritance.
- **First-Class Functions**: Functions can be assigned to variables, passed as arguments, and returned from other functions.
- **Asynchronous Programming**: Supports callbacks, promises, and async/await.
- **Event-Driven**: Handles user and browser events efficiently.
- **Client-Side & Server-Side**: Works in browsers (via DOM) and on servers (via Node.js).
- **Cross-Platform Compatibility**: Runs on various operating systems and environments.

## Uses of JavaScript
- **Web Development**: Enhancing interactivity and UI behavior.
- **Server-Side Development**: With Node.js for backend processing.
- **Mobile App Development**: Using frameworks like React Native.
- **Game Development**: Using WebGL, Three.js, and Phaser.
- **Machine Learning**: With TensorFlow.js.
- **Data Visualization**: Using D3.js and Chart.js.

## Important JavaScript Topics

### 1. JavaScript Basics
- Variables (`let`, `const`, `var`)
- Data Types (String, Number, Boolean, Object, Array, Undefined, Null, Symbol, BigInt)
- Operators (Arithmetic, Comparison, Logical, Bitwise, Assignment)
- Control Structures (if-else, switch, loops)

### 2. Functions
- Function Declarations vs Expressions
- Arrow Functions (`=>`)
- Higher-Order Functions
- Closures & Lexical Scope

### 3. Objects and Prototypes
- Object Creation (`Object.create`, constructors, classes)
- Prototype Chain & Inheritance

### 4. ES6+ Features
- Template Literals
- Destructuring
- Spread & Rest Operators
- Default Parameters
- Modules (`import` / `export`)
- Async/Await & Promises

### 5. DOM Manipulation
- `document.querySelector`, `getElementById`, `createElement`
- Event Handling (`addEventListener`)
- Event Delegation & Bubbling

### 6. Asynchronous JavaScript
- Callbacks
- Promises (`then`, `catch`, `finally`)
- Async/Await
- Fetch API & AJAX

### 7. JavaScript in Browsers
- Local Storage & Session Storage
- Cookies
- Web APIs (Geolocation, Notifications, WebSockets)

### 8. Error Handling & Debugging
- `try...catch`
- `throw` statements
- Debugging with DevTools

### 9. Performance Optimization
- Debouncing & Throttling
- Memoization
- Lazy Loading

### 10. JavaScript Frameworks & Libraries
- **Frontend**: React, Angular, Vue.js
- **Backend**: Node.js, Express.js
- **Testing**: Jest, Mocha, Cypress

## Important Interview Questions & Answers

### Basic Questions
1. **What are the differences between `let`, `const`, and `var`?**
   - `var`: Function-scoped, can be redeclared and updated.
   - `let`: Block-scoped, can be updated but not redeclared.
   - `const`: Block-scoped, cannot be updated or redeclared.

2. **Explain the difference between `==` and `===`.**
   - `==` checks for value equality with type coercion.
   - `===` checks for strict equality (both value and type).

3. **What is hoisting in JavaScript?**
   - Hoisting is JavaScript's default behavior of moving declarations to the top of the scope before execution.

4. **How does the `this` keyword work?**
   - `this` refers to the object that is executing the function:
     - In a method, `this` refers to the object.
     - Alone or in a function, it refers to `window` (or `undefined` in strict mode).
     - In an arrow function, `this` is lexically inherited from the surrounding scope.

5. **What is the difference between function declaration and function expression?**
   - Function declaration (`function foo() {}`) is hoisted.
   - Function expression (`const foo = function() {}`) is not hoisted.

### Advanced Questions
6. **What is closure? Provide an example.**
   - A closure is a function that remembers its lexical scope even when executed outside of it.
   ```js
   function outer() {
     let count = 0;
     return function inner() {
       count++;
       console.log(count);
     };
   }
   const counter = outer();
   counter(); // 1
   counter(); // 2
   ```

7. **Explain event delegation.**
   - Event delegation allows handling events efficiently by assigning a parent element instead of multiple child elements.

8. **What is the prototype chain?**
   - JavaScript uses prototypes for inheritance, forming a chain linking objects up to `Object.prototype`.

9. **How does the JavaScript event loop work?**
   - The event loop handles asynchronous code execution by pushing tasks to the callback queue and executing them when the call stack is empty.

10. **Explain promises and async/await with examples.**
   - Promises handle asynchronous operations, avoiding callback hell.
   ```js
   function fetchData() {
     return new Promise((resolve) => {
       setTimeout(() => resolve("Data received"), 1000);
     });
   }
   fetchData().then(console.log);
   ```
   - Async/Await simplifies handling promises.
   ```js
   async function getData() {
     let data = await fetchData();
     console.log(data);
   }
   getData();
   ```

### Coding Questions
11. **Reverse a string in JavaScript.**
   ```js
   function reverseString(str) {
     return str.split('').reverse().join('');
   }
   console.log(reverseString("hello"));
   ```

12. **Find the largest number in an array.**
   ```js
   function maxNumber(arr) {
     return Math.max(...arr);
   }
   console.log(maxNumber([1, 5, 3, 9]));
   ```

13. **Write a function to check if a string is a palindrome.**
   ```js
   function isPalindrome(str) {
     return str === str.split('').reverse().join('');
   }
   console.log(isPalindrome("madam"));
   ```

14. **Implement a debounce function.**
   ```js
   function debounce(fn, delay) {
     let timer;
     return function (...args) {
       clearTimeout(timer);
       timer = setTimeout(() => fn(...args), delay);
     };
   }
   ```

15. **Explain how `call`, `apply`, and `bind` work.**
   - `call`: Calls a function with a given `this` value and arguments.
   - `apply`: Similar to `call`, but takes an array of arguments.
   - `bind`: Returns a new function with `this` bound to a specified object.

---

## Conclusion
JavaScript is a versatile and powerful language essential for modern web development. Understanding its concepts and best practices ensures efficient and scalable applications.

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
