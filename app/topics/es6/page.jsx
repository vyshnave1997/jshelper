"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Let & Const
// ----------------------
function LetConstDemo() {
  let a = 10;
  const b = 20;
  return (
    <div>
      <p>let a = {a}</p>
      <p>const b = {b}</p>
    </div>
  );
}

// ----------------------
// Template Literals
// ----------------------
function TemplateLiteralDemo() {
  const name = "Alice";
  const age = 25;
  return <p>{`My name is ${name} and I am ${age} years old.`}</p>;
}

// ----------------------
// Destructuring
// ----------------------
function DestructuringDemo() {
  const person = { name: "Bob", age: 30 };
  const { name, age } = person;
  return <p>{`Name: ${name}, Age: ${age}`}</p>;
}

// ----------------------
// Spread & Rest
// ----------------------
function SpreadRestDemo() {
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
  return (
    <div>
      <p>Spread Example: {arr2.join(", ")}</p>
      <p>Rest Example (sum of 1,2,3,4,5): {sum(1, 2, 3, 4, 5)}</p>
    </div>
  );
}

// ----------------------
// Default Parameters
// ----------------------
function DefaultParamDemo() {
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  return <p>{greet()} | {greet("Charlie")}</p>;
}

// ----------------------
// Page Component
// ----------------------
export default function ES6FeaturesPage() {
  const [selectedExample, setSelectedExample] = useState("letconst");

  const es6Examples = {
    letconst: {
      steps: [
        "`let` and `const` were introduced in ES6.",
        "`let` is block-scoped, `const` is constant (cannot be reassigned).",
        "Use `let` for variables that may change, `const` for fixed ones."
      ],
      code: `
let a = 10;
const b = 20;

console.log(a); // 10
console.log(b); // 20
      `,
      result: <LetConstDemo />
    },
    template: {
      steps: [
        "Template literals use backticks `` for strings.",
        "They support interpolation with ${variable}.",
        "They also allow multi-line strings."
      ],
      code: `
const name = "Alice";
const age = 25;

console.log(\`My name is \${name} and I am \${age} years old.\`);
      `,
      result: <TemplateLiteralDemo />
    },
    destructuring: {
      steps: [
        "Destructuring extracts values from arrays/objects easily.",
        "Syntax: const {prop} = object or const [a, b] = array.",
        "Example: Object destructuring."
      ],
      code: `
const person = { name: "Bob", age: 30 };
const { name, age } = person;

console.log(name); // Bob
console.log(age);  // 30
      `,
      result: <DestructuringDemo />
    },
    spreadrest: {
      steps: [
        "Spread (...) expands arrays or objects.",
        "Rest (...) collects multiple values into an array.",
        "Spread is often used for copying/merging, Rest for function params."
      ],
      code: `
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1,2,3,4,5]

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4,5)); // 15
      `,
      result: <SpreadRestDemo />
    },
    defaultparam: {
      steps: [
        "Functions can have default values for parameters.",
        "If argument is missing, default will be used.",
        "Example: Greet function."
      ],
      code: `
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet());       // Hello, Guest!
console.log(greet("John")); // Hello, John!
      `,
      result: <DefaultParamDemo />
    }
  };

  const { steps, code, result } = es6Examples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>ES6 Features</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="letconst">let & const</option>
        <option value="template">Template Literals</option>
        <option value="destructuring">Destructuring</option>
        <option value="spreadrest">Spread & Rest</option>
        <option value="defaultparam">Default Parameters</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
