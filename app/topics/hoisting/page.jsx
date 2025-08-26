"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// var Hoisting Demo
// ----------------------
function VarHoistingDemo() {
  var output;
  try {
    output = a; // undefined because declaration is hoisted, not value
    var a = 10;
  } catch (err) {
    output = err.message;
  }
  return <p>Value of a before initialization: {output}</p>;
}

// ----------------------
// let Hoisting Demo
// ----------------------
function LetHoistingDemo() {
  let output;
  try {
    output = b; // ReferenceError (Temporal Dead Zone)
    let b = 20;
  } catch (err) {
    output = err.message;
  }
  return <p>Accessing let before declaration: {output}</p>;
}

// ----------------------
// const Hoisting Demo
// ----------------------
function ConstHoistingDemo() {
  let output;
  try {
    output = c; // ReferenceError
    const c = 30;
  } catch (err) {
    output = err.message;
  }
  return <p>Accessing const before declaration: {output}</p>;
}

// ----------------------
// Function Hoisting Demo
// ----------------------
function FunctionHoistingDemo() {
  return (
    <p>
      Function hoisting works! greet() returns: <b>{greet()}</b>
    </p>
  );

  function greet() {
    return "Hello!";
  }
}

// ----------------------
// Page Component
// ----------------------
export default function HoistingPage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const hoistingExamples = {
    intro: {
      steps: [
        "Hoisting is JavaScript's default behavior of moving **declarations** to the top of their scope.",
        "Only **declarations** are hoisted, not initializations.",
        "`var` is hoisted with `undefined`, while `let` and `const` are hoisted but stay in a **Temporal Dead Zone (TDZ)` until initialized.",
        "Function declarations are fully hoisted and can be used before definition."
      ],
      code: `
// Hoisting Concept
console.log(x); // undefined (var is hoisted but not initialized)
var x = 5;

console.log(y); // ❌ ReferenceError (TDZ)
let y = 10;

console.log(z); // ❌ ReferenceError (TDZ)
const z = 15;

console.log(greet()); // Works (function hoisted)
function greet() {
  return "Hello!";
}
      `,
      result: (
        <p>
          Hoisting means <b>declarations are moved up</b> in their scope before
          code execution.
        </p>
      )
    },
    var: {
      steps: [
        "`var` is hoisted and initialized with `undefined`.",
        "So accessing it before assignment gives `undefined` instead of an error."
      ],
      code: `
console.log(a); // undefined
var a = 10;
console.log(a); // 10
      `,
      result: <VarHoistingDemo />
    },
    let: {
      steps: [
        "`let` is hoisted but not initialized.",
        "Accessing it before declaration causes a **ReferenceError** because of the Temporal Dead Zone."
      ],
      code: `
console.log(b); // ❌ ReferenceError
let b = 20;
      `,
      result: <LetHoistingDemo />
    },
    const: {
      steps: [
        "`const` behaves like `let` with hoisting.",
        "Accessing it before declaration causes a ReferenceError."
      ],
      code: `
console.log(c); // ❌ ReferenceError
const c = 30;
      `,
      result: <ConstHoistingDemo />
    },
    function: {
      steps: [
        "Function **declarations** are hoisted completely.",
        "You can call a function before it is defined in the code."
      ],
      code: `
console.log(greet()); // Hello!

function greet() {
  return "Hello!";
}
      `,
      result: <FunctionHoistingDemo />
    }
  };

  const { steps, code, result } = hoistingExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Hoisting in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">What is Hoisting?</option>
        <option value="var">Hoisting with var</option>
        <option value="let">Hoisting with let</option>
        <option value="const">Hoisting with const</option>
        <option value="function">Hoisting with Functions</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
