# JavaScript One-Go Revision

A structured repository for revising JavaScript fundamentals, advanced concepts, internal mechanisms, coding problems, and interview questions.

## 1. What Is JavaScript?

JavaScript (JS) is a high-level, dynamically typed programming language used to build interactive applications.

It runs in different environments:

- **Browser:** Handles user interactions, updates webpages, and works with browser APIs.
- **Node.js:** Runs JavaScript outside the browser, including backend services and scripts.
- **Other runtimes:** Can power mobile applications, desktop applications, and more.

### History

- **Creator:** Brendan Eich
- **First released:** 1995
- **Standard:** ECMAScript, maintained by Ecma International
- **Original purpose:** Add interactivity to webpages

### Key Features

| Feature | Simple explanation |
|---|---|
| Dynamically typed | Variables can hold values of different types over time. |
| First-class functions | Functions can be stored in variables, passed to other functions, and returned. |
| Prototype-based | Objects can inherit properties and methods through prototypes. |
| Event-driven | Code can respond to clicks, keyboard input, network events, and more. |
| Asynchronous | Long-running operations can be handled without blocking the main thread while they wait. |
| Garbage-collected | The runtime automatically manages memory that is no longer reachable. |
| Cross-platform | JavaScript runs in browsers, servers, and other supported environments. |

**Important:** JavaScript is standardized by ECMAScript, but the browser DOM, Node.js APIs, and other runtime features are not all part of the ECMAScript language itself.

---

## 2. How JavaScript Executes

### 2.1 JavaScript Is Single-Threaded

JavaScript normally executes synchronous code on a single main thread, using a call stack to keep track of function execution.

```js
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

Each synchronous statement runs in order.

However, this does not mean the entire JavaScript environment can only perform one operation at a time. Browsers and Node.js can use background facilities, operating-system APIs, and worker threads.

### 2.2 Execution Context

An execution context is the environment in which JavaScript code runs.

Common execution contexts include:

1. **Global execution context:** Created for the top-level script.
2. **Function execution context:** Created when a function is called.
3. **Module execution context:** Used for JavaScript modules, which have their own scope.

A function call creates a new execution context, which is managed through the call stack.

### 2.3 Global Object

The global object depends on the environment.

- In browsers, the global object is generally `window`.
- In Node.js, the global object is `globalThis` (also accessible through `global`).
- `globalThis` provides a standard way to access the global object across environments.

```js
console.log(globalThis);
```

**Important:** In browser scripts, top-level declarations behave differently depending on whether you use `var`, `let`, `const`, or modules. A top-level `let` or `const` does not become a property of `window`.

### 2.4 Call Stack

The call stack tracks which functions are currently executing.

```js
function first() {
  second();
}

function second() {
  console.log("Inside second");
}

first();
```

Execution flow:

1. `first()` enters the stack.
2. `second()` enters the stack.
3. `console.log()` executes.
4. `second()` finishes and leaves the stack.
5. `first()` finishes and leaves the stack.

The stack follows **LIFO: Last In, First Out**.

### 2.5 Event Loop

The event loop coordinates when queued callbacks can run after the current synchronous work finishes.

JavaScript environments commonly distinguish between:

- **Call stack:** Currently executing synchronous functions.
- **Task queue:** Tasks such as timer callbacks and certain event callbacks.
- **Microtask queue:** Promise reactions and `queueMicrotask()` callbacks.
- **Host APIs:** Environment-provided facilities for timers, networking, events, and other operations.

Example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

Output:

```text
A
D
C
B
```

Why?

1. `"A"` runs synchronously.
2. The timer is scheduled.
3. The promise reaction is queued as a microtask.
4. `"D"` runs synchronously.
5. The microtask runs.
6. The timer callback runs in a later task.

A zero-millisecond timer does not mean the callback runs immediately.

---

## 3. JavaScript Fundamentals

### 3.1 Variables: `var`, `let`, and `const`

| Property | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function or global scope | Block scope | Block scope |
| Redeclaration in same scope | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Access before declaration | `undefined` after hoisting | ReferenceError in TDZ | ReferenceError in TDZ |

```js
var name = "Alex";
let age = 25;
const country = "India";

age = 26;
// country = "Japan"; // TypeError
```

**Best practice:** Prefer `const` by default. Use `let` when reassignment is necessary. Avoid `var` in modern code unless you have a specific reason.

Remember that `const` prevents reassignment of the binding, not mutation of an object.

```js
const user = { name: "Alex" };

user.name = "Sam"; // Allowed
// user = {};      // Not allowed
```

### 3.2 Data Types

JavaScript has seven primitive types and the non-primitive object type.

**Primitive types:**

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`

**Non-primitive category:**

- Objects, including arrays, functions, dates, maps, and sets.

```js
let username = "Alex";
let score = 95;
let isActive = true;
let result;
let emptyValue = null;
let uniqueId = Symbol("id");
let largeNumber = 12345678901234567890n;
let user = { name: "Alex" };
let numbers = [1, 2, 3];
```

Important details:

```js
typeof "hello";     // "string"
typeof 42;          // "number"
typeof undefined;   // "undefined"
typeof null;        // "object" (historical quirk)
typeof [];          // "object"
typeof function(){} // "function"
```

Use `Array.isArray(value)` to check whether a value is an array.

### 3.3 Equality and Type Coercion

```js
5 == "5";  // true
5 === "5"; // false
```

- `==` allows type conversion in many comparisons.
- `===` compares values without performing that implicit equality conversion.

Prefer `===` unless you intentionally need coercive comparison.

Watch out for `NaN`:

```js
NaN === NaN;       // false
Number.isNaN(NaN); // true
```

### 3.4 Truthy and Falsy Values

Falsy values include:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy, including empty arrays and empty objects.

```js
if ([]) {
  console.log("Runs");
}
```

Output:

```text
Runs
```

### 3.5 Operators

Learn these groups:

- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Comparison: `>`, `<`, `>=`, `<=`
- Equality: `==`, `!=`, `===`, `!==`
- Logical: `&&`, `||`, `!`
- Nullish coalescing: `??`
- Optional chaining: `?.`
- Assignment: `=`, `+=`, `-=`
- Ternary: `condition ? a : b`
- Spread and rest: `...`

Example:

```js
const username = "";
const displayName = username || "Guest"; // "Guest"
const actualName = username ?? "Guest";  // ""
```

`||` uses the fallback for any falsy value. `??` uses it only when the left side is `null` or `undefined`.

---

## 4. Scope, Hoisting, and the Temporal Dead Zone

### 4.1 Scope

Scope determines where a variable can be accessed.

Main types:

- Global scope
- Function scope
- Block scope
- Module scope
- Lexical scope

```js
function example() {
  let message = "Hello";

  if (true) {
    let count = 1;
    console.log(message); // Works
  }

  // console.log(count); // ReferenceError
}
```

The inner block can access variables from the outer scope, but the outer scope cannot access variables declared only inside the block.

### 4.2 Hoisting

Hoisting describes how declarations are established during scope creation before normal statement execution.

```js
console.log(value); // undefined
var value = 10;
```

This behaves approximately like:

```js
var value;
console.log(value);
value = 10;
```

The source code is not literally moved; the example illustrates the result of declaration processing.

With `let` and `const`:

```js
console.log(score); // ReferenceError
let score = 100;
```

These bindings exist before their declaration executes, but they cannot be accessed during the **Temporal Dead Zone (TDZ)**.

### 4.3 Function Hoisting

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

A function declaration can be called before its position in the source code.

By contrast:

```js
// sayHi(); // ReferenceError
const sayHi = function () {
  console.log("Hi");
};
```

The variable binding is in the TDZ until initialization.

---

## 5. Functions and Closures

### 5.1 Function Declaration vs Expression

```js
function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const subtract = (a, b) => a - b;
```

Arrow functions provide concise syntax but do not have their own `this` or `arguments`, and cannot be used as constructors.

### 5.2 Parameters, Arguments, and Return Values

```js
function calculateTotal(price, quantity = 1) {
  return price * quantity;
}

console.log(calculateTotal(100, 3)); // 300
console.log(calculateTotal(100));    // 100
```

Parameters are the named inputs in a function definition. Arguments are the values supplied during a call.

### 5.3 First-Class and Higher-Order Functions

JavaScript functions are values.

A higher-order function either accepts a function as an argument or returns a function.

```js
function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(5, 3, (x, y) => x + y);

console.log(result); // 8
```

This concept is the foundation of callbacks, event handlers, and many array methods.

### 5.4 Lexical Scope

A function can access variables from the scope where it was defined.

```js
const language = "JavaScript";

function showLanguage() {
  console.log(language);
}

showLanguage(); // JavaScript
```

Scope is determined by where a function is defined, not simply where it is called.

### 5.5 Closures

A closure occurs when a function retains access to variables from its lexical environment, even after the outer function has returned.

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

The inner function keeps access to `count`.

**Common uses:** Private state, function factories, callbacks, memoization, and event handlers.

**Important:** A closure does not automatically copy every outer variable. The function retains access to its lexical environment, and that environment remains reachable as needed.

---

## 6. Objects, Prototypes, and `this`

### 6.1 Objects

Objects store data as key-value properties and can also contain methods.

```js
const user = {
  name: "Alex",
  age: 25,

  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(user.greet());
```

### 6.2 Reference Types

```js
const first = { score: 10 };
const second = first;

second.score = 20;

console.log(first.score); // 20
```

Both variables refer to the same object.

Objects are not copied merely by assigning them to another variable.

### 6.3 Shallow Copy vs Deep Copy

```js
const original = {
  name: "Alex",
  address: { city: "Delhi" }
};

const copy = { ...original };

copy.name = "Sam";
copy.address.city = "Mumbai";

console.log(original.name);         // Alex
console.log(original.address.city); // Mumbai
```

Spread syntax creates a shallow copy: nested objects remain shared references.

For supported data structures, `structuredClone()` can create a deeper copy:

```js
const deepCopy = structuredClone(original);
```

It does not support every possible JavaScript value, and functions cannot be cloned this way.

### 6.4 Prototypes

JavaScript objects can delegate property lookup to another object through their prototype.

```js
const animal = {
  speak() {
    console.log("Animal sound");
  }
};

const dog = Object.create(animal);

dog.speak(); // Animal sound
```

JavaScript searches for `speak` on `dog`. If it is not found, lookup continues through the prototype chain.

Classes use this prototype system under the hood.

### 6.5 Classes and Inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog("Max");

console.log(dog.speak()); // Max barks
```

`extends` establishes inheritance, and `super()` can call the parent constructor.

### 6.6 How `this` Works

For ordinary functions, `this` generally depends on how the function is called.

```js
const user = {
  name: "Alex",

  greet() {
    console.log(this.name);
  }
};

user.greet(); // Alex
```

If the method is detached, its receiver is lost:

```js
const greet = user.greet;
greet(); // undefined in strict mode
```

In an ES module or strict-mode function, `this` is `undefined` for a plain function call.

Arrow functions inherit `this` from their surrounding lexical scope.

### 6.7 `call`, `apply`, and `bind`

```js
function introduce(city, country) {
  return `${this.name} lives in ${city}, ${country}`;
}

const person = { name: "Alex" };

introduce.call(person, "Delhi", "India");
introduce.apply(person, ["Delhi", "India"]);

const boundIntroduce = introduce.bind(person);
boundIntroduce("Delhi", "India");
```

- `call()` invokes a function immediately with individual arguments.
- `apply()` invokes it immediately with arguments supplied as an array-like value.
- `bind()` returns a new function with a predetermined `this` value and, optionally, preset arguments.

---

## 7. Arrays and Modern JavaScript

### 7.1 Important Array Methods

```js
const numbers = [1, 2, 3, 4, 5];

numbers.map(n => n * 2);                // Transform
numbers.filter(n => n > 2);             // Select
numbers.find(n => n > 3);               // First match
numbers.some(n => n > 4);               // Any match?
numbers.every(n => n > 0);              // All match?
numbers.reduce((sum, n) => sum + n, 0); // Accumulate
```

Know the distinction:

- `map()` returns a transformed array.
- `filter()` returns a subset.
- `find()` returns the first matching element or `undefined`.
- `reduce()` combines values into a single result, though it can also build other structures.
- `forEach()` executes a callback for each item and returns `undefined`.

### 7.2 Mutation vs Non-Mutation

```js
const values = [3, 1, 2];

const sorted = [...values].sort((a, b) => a - b);

console.log(values); // [3, 1, 2]
console.log(sorted); // [1, 2, 3]
```

`sort()` mutates the original array. Copy it first when the original must remain unchanged.

### 7.3 Destructuring

```js
const user = { name: "Alex", age: 25 };

const { name, age } = user;

const [first, second] = [10, 20];
```

### 7.4 Spread and Rest

The same `...` syntax has different meanings depending on its position.

```js
const first = [1, 2];
const combined = [...first, 3, 4]; // Spread

function sum(...numbers) {          // Rest
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### 7.5 Modules

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

```js
// app.js
import { add } from "./math.js";

console.log(add(2, 3));
```

Modules help separate responsibilities and prevent unnecessary global variables.

---

## 8. Asynchronous JavaScript

### 8.1 Callbacks

A callback is a function passed to another function to be executed later or at a particular point.

```js
setTimeout(() => {
  console.log("Executed later");
}, 1000);
```

Callbacks are useful, but deeply nested callbacks can make error handling and control flow difficult.

### 8.2 Promises

A promise represents the eventual outcome of an asynchronous operation.

Its states are:

- Pending
- Fulfilled
- Rejected

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject(new Error("Request failed"));
  }
});

promise
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Finished"));
```

A promise is not inherently asynchronous in every respect: its executor runs synchronously, while its `.then()` handlers execute as microtasks.

### 8.3 `async` and `await`

An `async` function always returns a promise. `await` pauses that function's continuation until the awaited promise settles; it does not block the entire JavaScript thread.

```js
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
```

### 8.4 Sequential vs Parallel Operations

Sequential execution:

```js
const first = await fetchFirst();
const second = await fetchSecond();
```

The second operation starts only after the first await completes, assuming these calls start their work when invoked.

Parallel execution:

```js
const [first, second] = await Promise.all([
  fetchFirst(),
  fetchSecond()
]);
```

Both operations are started before waiting for the combined result.

`Promise.all()` rejects if any input promise rejects. Use `Promise.allSettled()` when you need the outcome of every operation, even when some fail.

### 8.5 Fetch API

```js
async function getUser() {
  const response = await fetch("/api/user");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}
```

`fetch()` normally rejects for network-level failures, not simply because the server returns an HTTP error status such as 404 or 500. Check `response.ok`.

### 8.6 Event Loop Revision

Memorize this order for the standard browser example:

1. Execute synchronous code.
2. Run queued microtasks when the current stack is clear.
3. Continue event-loop processing, including eligible tasks such as timer callbacks.

Exact scheduling can depend on the runtime and host APIs, but promise reactions normally run before a pending timer callback in the familiar example.

---

## 9. DOM and Browser APIs

### 9.1 DOM Manipulation

The Document Object Model (DOM) represents an HTML document as a tree of objects.

```js
const heading = document.querySelector("h1");

if (heading) {
  heading.textContent = "Hello JavaScript";
}
```

Common methods:

- `querySelector()`
- `querySelectorAll()`
- `getElementById()`
- `createElement()`
- `append()`
- `remove()`

Use `textContent` for plain text. Be careful with `innerHTML` when inserting untrusted input because it can introduce cross-site scripting vulnerabilities.

### 9.2 Events and Bubbling

```js
button.addEventListener("click", event => {
  console.log("Button clicked");
});
```

In event bubbling, an event can propagate from the target element through its ancestors.

### 9.3 Event Delegation

Instead of adding listeners to many child elements, attach one listener to a common parent.

```js
document.querySelector("#list").addEventListener("click", event => {
  const item = event.target.closest("li");

  if (item && event.currentTarget.contains(item)) {
    console.log(item.textContent);
  }
});
```

This is useful for dynamic lists and reduces the number of listeners you need to manage.

### 9.4 Browser Storage

| Storage | Typical purpose | Lifetime |
|---|---|---|
| `localStorage` | Persistent client-side key-value data | Across browser sessions until cleared |
| `sessionStorage` | Data for a browsing session | Usually until the tab's page session ends |
| Cookies | Small pieces of data, often used with server requests | Depends on cookie attributes |

Do not store sensitive authentication secrets in JavaScript-accessible storage without carefully assessing the security implications. `HttpOnly` cookies cannot be read by client-side JavaScript.

---

## 10. Errors, Debugging, and Performance

### 10.1 Error Handling

```js
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Cleanup");
}
```

`try...catch` handles exceptions thrown in the synchronous flow and awaited operations inside the `try` block. It does not automatically catch errors from an unrelated asynchronous callback.

### 10.2 Custom Errors

```js
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient balance");
  }

  return balance - amount;
}
```

Use meaningful errors so failures are easier to diagnose.

### 10.3 Debugging

Learn to use:

- Browser DevTools
- Breakpoints
- `debugger`
- Console methods
- Network inspection
- Call stack inspection
- Performance profiling

### 10.4 Debouncing

Debouncing delays execution until calls stop occurring for a specified interval.

```js
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

Common use: search input where you want to wait until the user pauses typing.

### 10.5 Throttling

Throttling limits how frequently a function can execute.

Common use: scroll or resize handlers that should not run excessively.

### 10.6 Memoization

Memoization caches results so repeated calls with the same inputs can reuse previous computations.

It is useful for expensive, repeatable calculations, but caches require careful consideration of memory usage and cache invalidation.

### 10.7 Lazy Loading

Lazy loading postpones loading a resource until it is needed, such as loading images near the visible portion of a page.

```html
<img src="image.jpg" alt="Example" loading="lazy">
```

---

## 11. Advanced JavaScript Concepts

Revise these after mastering the fundamentals.

1. Execution contexts and lexical environments
2. Scope chains and closures
3. Hoisting and temporal dead zones
4. `this`, `call`, `apply`, and `bind`
5. Prototype chains and inheritance
6. Event loop, tasks, and microtasks
7. Promise chaining and error propagation
8. `Promise.all`, `Promise.allSettled`, `Promise.race`, and `Promise.any`
9. Iterators, iterables, and generators
10. Symbols and well-known symbols
11. `Map`, `Set`, `WeakMap`, and `WeakSet`
12. Property descriptors and getters/setters
13. Shallow copying, deep copying, and immutability
14. Memory management and garbage collection
15. ES modules and module loading
16. Functional programming and composition
17. Currying and partial application
18. Debouncing, throttling, and memoization
19. Web Workers and concurrency
20. Security, performance, and memory leaks

### Web Workers vs Main Thread

Web Workers allow certain JavaScript work to run on a separate thread in supported environments.

They cannot directly manipulate the DOM, and data is commonly exchanged through messages.

Use them for CPU-intensive work when moving it off the main thread improves responsiveness.

---

## 12. JavaScript Interview Questions

### Basic

**1. What is the difference between `let`, `const`, and `var`?**

Explain scope, reassignment, redeclaration, hoisting, and the temporal dead zone.

**2. What is the difference between `==` and `===`?**

`==` performs coercive equality comparison; `===` does not perform that implicit type conversion.

**3. What is hoisting?**

Explain declaration processing and why `var`, function declarations, `let`, and `const` behave differently.

**4. What is the difference between `null` and `undefined`?**

`undefined` commonly indicates a missing or uninitialized value. `null` is an explicitly assigned empty value.

**5. What is the difference between an arrow function and a normal function?**

Discuss lexical `this`, `arguments`, constructor behavior, and syntax.

### Intermediate

**6. Explain closures.**

A function retains access to its lexical environment after its outer function returns.

**7. Explain the event loop.**

Describe the call stack, host APIs, tasks, and microtasks.

**8. What is the difference between `map()` and `forEach()`?**

`map()` returns a new transformed array. `forEach()` returns `undefined`.

**9. What is the difference between shallow and deep copies?**

Explain shared nested references and when independent nested objects are necessary.

**10. What is the difference between `call()`, `apply()`, and `bind()`?**

Compare immediate invocation with creating a bound function.

### Advanced

**11. What happens when a promise is resolved?**

Explain settlement, promise reactions, microtasks, and chaining.

**12. Why does `Promise.all()` fail when one promise rejects?**

Explain fail-fast rejection and compare it with `Promise.allSettled()`.

**13. How does prototype inheritance work?**

Explain property lookup through the prototype chain.

**14. What causes memory leaks in JavaScript?**

Discuss unintended references, forgotten event listeners, unbounded caches, and detached DOM nodes that remain reachable.

**15. How would you improve JavaScript performance?**

Measure first, then reduce unnecessary work, avoid excessive DOM updates, optimize network requests, and use profiling tools.

---

## 13. Coding Practice Questions

Solve these without looking at the solution first.

### Beginner

1. Reverse a string.
2. Check whether a string is a palindrome.
3. Find the largest number in an array.
4. Find the sum of an array.
5. Count vowels in a string.
6. Remove duplicate values from an array.
7. Count the frequency of each character.
8. Find the factorial of a number.

### Intermediate

9. Flatten a nested array.
10. Group objects by a property.
11. Implement a custom `map()` function.
12. Implement a debounce function.
13. Implement a throttle function.
14. Implement a counter using closures.
15. Deeply compare supported data structures.
16. Find the first non-repeating character.
17. Sort an array of objects by a property.
18. Implement a simple promise-based retry mechanism.

### Advanced

19. Implement a memoization utility.
20. Implement a simplified `Promise.all()`.
21. Implement function currying.
22. Implement a rate limiter.
23. Build an event emitter.
24. Implement a task queue with a concurrency limit.
25. Explain and fix a closure-related bug in a loop.

### Example: Reverse a String

```js
function reverseString(str) {
  return [...str].reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```

The spread syntax handles Unicode code points better than `split("")` for many characters, but neither approach correctly reverses every grapheme cluster, such as all emoji sequences.

### Example: Find the Largest Number

```js
function maxNumber(numbers) {
  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }

  return numbers.reduce((max, current) =>
    current > max ? current : max
  );
}

console.log(maxNumber([1, 5, 3, 9])); // 9
```

This approach avoids spreading a potentially very large array into function arguments.

### Example: Palindrome Check

```js
function isPalindrome(str) {
  const normalized = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return normalized === [...normalized].reverse().join("");
}

console.log(isPalindrome("Madam")); // true
```

This version ignores capitalization and non-alphanumeric ASCII characters. A full Unicode-aware implementation requires more careful normalization and character handling.

---

## 14. Recommended Repository Structure

```text
Javascript_onego_revise/
│
├── README.md
├── 01-fundamentals/
│   ├── variables.js
│   ├── data-types.js
│   ├── operators.js
│   └── scope-hoisting.js
│
├── 02-functions/
│   ├── functions.js
│   ├── closures.js
│   └── this-call-apply-bind.js
│
├── 03-objects-prototypes/
│   ├── objects.js
│   ├── prototypes.js
│   └── classes.js
│
├── 04-arrays-modern-js/
│   ├── array-methods.js
│   ├── destructuring.js
│   └── modules.js
│
├── 05-async-js/
│   ├── callbacks.js
│   ├── promises.js
│   ├── async-await.js
│   └── event-loop.js
│
├── 06-dom-browser/
│   ├── dom.js
│   ├── events.js
│   └── storage.js
│
├── 07-advanced/
│   ├── iterators-generators.js
│   ├── memoization.js
│   ├── debounce-throttle.js
│   └── concurrency.js
│
├── 08-coding-problems/
│   ├── beginner.js
│   ├── intermediate.js
│   └── advanced.js
│
└── 09-interview-questions/
    ├── fundamentals.md
    ├── intermediate.md
    └── advanced.md
```

## 15. Revision Strategy

For every concept, maintain four things:

1. **Definition:** Explain it in two or three sentences.
2. **Example:** Write a small runnable program.
3. **Internal working:** Explain what the JavaScript engine or runtime does.
4. **Interview trap:** Record a common misconception or edge case.

A practical revision sequence:

- **Pass 1:** Fundamentals, variables, types, scope, and functions.
- **Pass 2:** Closures, objects, prototypes, `this`, and array methods.
- **Pass 3:** Promises, async/await, event loop, and browser APIs.
- **Pass 4:** Advanced patterns, performance, memory, and coding problems.
- **Pass 5:** Solve questions from memory and explain the output before running the code.

## 16. Official Reference

Use [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) for explanations and examples, and [ECMAScript specifications](https://tc39.es/ecma262/) for exact language behavior.

**Final objective:** Do not memorize definitions alone. For each concept, be able to predict the output, explain why it happens, identify the edge case, and write a working implementation.