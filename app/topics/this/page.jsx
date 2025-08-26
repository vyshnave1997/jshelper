"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Global `this` Demo
// ----------------------
function GlobalThisDemo() {
  return (
    <p>
      In the <b>global scope</b>, <code>this</code> refers to the{" "}
      <b>window object</b> in browsers (or <b>global object</b> in Node.js).
    </p>
  );
}

// ----------------------
// Object Method `this` Demo
// ----------------------
function ObjectThisDemo() {
  const person = {
    name: "Alice",
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  };
  return <p>{person.greet()}</p>;
}

// ----------------------
// Function `this` Demo
// ----------------------
function FunctionThisDemo() {
  function showThis() {
    return this; // in strict mode: undefined, in non-strict: global object
  }
  return (
    <p>
      In a <b>regular function</b>, <code>this</code> depends on how the
      function is called. (Try in console!)
    </p>
  );
}

// ----------------------
// Class `this` Demo
// ----------------------
function ClassThisDemo() {
  class Car {
    constructor(brand) {
      this.brand = brand;
    }
    getBrand() {
      return `Car brand is ${this.brand}`;
    }
  }
  const myCar = new Car("Tesla");
  return <p>{myCar.getBrand()}</p>;
}

// ----------------------
// Arrow Function `this` Demo
// ----------------------
function ArrowThisDemo() {
  const obj = {
    name: "Bob",
    regular: function () {
      return `Regular function: ${this.name}`;
    },
    arrow: () => {
      return `Arrow function: ${this?.name}`;
    }
  };
  return (
    <div>
      <p>{obj.regular()}</p>
      <p>{obj.arrow()}</p>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function ThisKeywordPage() {
  const [selectedExample, setSelectedExample] = useState("global");

  const thisExamples = {
    global: {
      steps: [
        "In the **global scope**, `this` refers to the global object.",
        "In browsers → `window`, in Node.js → `global`.",
        "In strict mode, `this` is `undefined`."
      ],
      code: `
// In Browser
console.log(this); // Window

"use strict";
console.log(this); // undefined
      `,
      result: <GlobalThisDemo />
    },
    object: {
      steps: [
        "When inside an **object method**, `this` refers to the object.",
        "So `this.name` points to the property of that object."
      ],
      code: `
const person = {
  name: "Alice",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // Hi, I'm Alice
      `,
      result: <ObjectThisDemo />
    },
    functionscope: {
      steps: [
        "In a **regular function**, `this` depends on how the function is called.",
        "If called in global scope → refers to global object (or undefined in strict mode).",
        "If called as a method → refers to that object."
      ],
      code: `
function showThis() {
  console.log(this);
}

showThis(); // Window (or undefined in strict mode)

const obj = { test: showThis };
obj.test(); // obj
      `,
      result: <FunctionThisDemo />
    },
    class: {
      steps: [
        "Inside a **class**, `this` refers to the current instance of the class.",
        "It allows access to properties and methods of that instance."
      ],
      code: `
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  getBrand() {
    console.log("Car brand is " + this.brand);
  }
}

const myCar = new Car("Tesla");
myCar.getBrand(); // Car brand is Tesla
      `,
      result: <ClassThisDemo />
    },
    arrow: {
      steps: [
        "Arrow functions do not have their own `this`.",
        "They inherit `this` from their surrounding lexical scope.",
        "So in an object, arrow functions don’t bind `this` to the object."
      ],
      code: `
const obj = {
  name: "Bob",
  regular: function () {
    console.log("Regular function:", this.name);
  },
  arrow: () => {
    console.log("Arrow function:", this.name);
  }
};

obj.regular(); // Regular function: Bob
obj.arrow();   // Arrow function: undefined
      `,
      result: <ArrowThisDemo />
    }
  };

  const { steps, code, result } = thisExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>The `this` Keyword in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="global">Global this</option>
        <option value="object">Object Method this</option>
        <option value="functionscope">Function this</option>
        <option value="class">Class this</option>
        <option value="arrow">Arrow Function this</option>
      </select>
      <TopicLayout
        title={selectedExample}
        steps={steps}
        code={code}
        result={result}
      />
    </div>
  );
}
