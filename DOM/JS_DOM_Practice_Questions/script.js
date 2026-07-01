// JS QUESTIONS

// Q-1 Even or Odd Checker

function OddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(OddEven(10)); // Even
console.log(OddEven(7)); // Odd
console.log(OddEven(0)); // Even (0 is considered even)
console.log(OddEven(-4)); // Even (negative even numbers are also considered even)

// Q-2 Greeting Generator
function greet(name, age) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Yash", 21)); // Hello, Yash! You are 21 years old.

// Q-3 Rectangle Area Calculator
function rectArea(width, height) {
  return width * height;
}

console.log(rectArea(5, 10)); // 50
console.log(rectArea(7, 3)); // 21

// Q-4 Private Counter with Closures

function mainCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = mainCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Q-5 Find the Largest Number

function largeNum(num) {
  let large = num[0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] > large) {
      large = num[i];
    }
  }
  return large;
}
console.log(largeNum([10, 5, 20, 60, 40])); // 60

// Q-6 Product Data Processor

const products = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Phone", price: 30000, category: "Electronics" },
  { name: "Shirt", price: 1500, category: "Clothing" },
];

const names = products.map((product) => product.name);

const prodCatagory = products.filter(
  (product) => product.category === "Electronics",
);

const total = products.reduce((acc, val) => acc + val.price, 0);

console.log(names); // ['Laptop', 'Phone', 'Shirt']
console.log(prodCatagory); // [it give index 0 and 1]
console.log(total); // 81500

// Q-7 Debounce Utility from Scratch
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((text) => {
  console.log("Searching:", text);
}, 1000);

search("Y");
search("Ya");
search("Yas");
search("Yash");

// Q-8 Sequential Task Runner

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 done");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 done");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 done");
      resolve();
    }, 1000);
  });
}

async function runSteps() {
  await step1();
  await step2();
  await step3();
}

runSteps();

// Q-9 API Data Cleaner

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    const cleanedData = data.map((post) => ({
      id: post.id,
      title: post.title,
    }));

    return cleanedData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchPosts().then(console.log);


// Q-10 Mini Event Emitter

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => cb(data));
        }
    }

    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] =
                this.events[eventName].filter(
                    cb => cb !== callback
                );
        }
    }
}

const emitter = new EventEmitter();

function listener(data) {
    console.log(data);
}

emitter.on("message", listener);
emitter.emit("message", "Hello World");

emitter.off("message", listener);

// Q-11 Memoization Utility

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    };
}

const add = memoize((a, b) => {
    console.log("Calculating...");
    return a + b;
});

console.log(add(2, 3));
console.log(add(2, 3));

// Q-12 Auto-Retry for Failing Promises

async function retry(asyncFn, attempts) {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await asyncFn();
        } catch (error) {
            if (i === attempts) {
                throw error;
            }
        }
    }
}

let count = 0;

async function unstableTask() {
    count++;

    if (count < 3) {
        throw new Error("Failed");
    }

    return "Success";
}

retry(unstableTask, 5)
    .then(console.log)
    .catch(console.error);


// Q-13 Mini State Store

function createStore(initialState) {
    let state = initialState;
    const listeners = [];

    return {
        getState() {
            return state;
        },

        setState(newState) {
            state = newState;

            listeners.forEach(listener =>
                listener(state)
            );
        },

        subscribe(callback) {
            listeners.push(callback);

            return () => {
                const index =
                    listeners.indexOf(callback);

                if (index > -1) {
                    listeners.splice(index, 1);
                }
            };
        }
    };
}

const store = createStore(0);

store.subscribe(state => {
    console.log("State:", state);
});

store.setState(10);
store.setState(20);

// Q-14 Deep Clone Utility

function deepClone(value) {
    if (
        value === null ||
        typeof value !== "object"
    ) {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item =>
            deepClone(item)
        );
    }

    const clone = {};

    for (let key in value) {
        clone[key] = deepClone(value[key]);
    }

    return clone;
}

const original = {
    name: "Yash",
    details: {
        city: "Surat"
    }
};

const copied = deepClone(original);

copied.details.city = "Ahmedabad";

console.log(original);
console.log(copied);

// Q-15 Concurrency-Limited Task Queue

async function runTasks(tasks, limit) {
    let index = 0;

    async function worker() {
        while (index < tasks.length) {
            const currentIndex = index++;

            await tasks[currentIndex]();
        }
    }

    const workers = [];

    for (let i = 0; i < limit; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);
}

const tasks = [
    () => new Promise(r => setTimeout(() => {
        console.log("Task 1");
        r();
    }, 1000)),

    () => new Promise(r => setTimeout(() => {
        console.log("Task 2");
        r();
    }, 2000)),

    () => new Promise(r => setTimeout(() => {
        console.log("Task 3");
        r();
    }, 1000)),

    () => new Promise(r => setTimeout(() => {
        console.log("Task 4");
        r();
    }, 1500))
];

runTasks(tasks, 2);




