"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Normal Function
// ----------------------
function NormalFunctionDemo() {
  function greet() {
    return "Hello from Normal Function!";
  }
  return <h3>{greet()}</h3>;
}

// ----------------------
// Function with Parameters
// ----------------------
function ParameterFunctionDemo() {
  function add(a, b) {
    return a + b;
  }
  return <h3>2 + 3 = {add(2, 3)}</h3>;
}

// ----------------------
// Arrow Function
// ----------------------
function ArrowFunctionDemo() {
  const multiply = (a, b) => a * b;
  return <h3>4 × 5 = {multiply(4, 5)}</h3>;
}

// ----------------------
// Function Returning Value
// ----------------------
function ReturnFunctionDemo() {
  function square(n) {
    return n * n;
  }
  return <h3>Square of 6 = {square(6)}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function FunctionsPage() {
  const [selectedExample, setSelectedExample] = useState("normal");

  const functionExamples = {
    normal: {
      steps: [
        "Functions are reusable blocks of code.",
        "A normal function is defined using the function keyword.",
        "Example: A simple greet function."
      ],
      code: `
function greet() {
  return "Hello from Normal Function!";
}

console.log(greet()); // Hello from Normal Function!
      `,
      result: <NormalFunctionDemo />
    },
    parameter: {
      steps: [
        "Functions can take parameters as inputs.",
        "They can return the result of operations using those inputs.",
        "Example: Adding two numbers."
      ],
      code: `
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
      `,
      result: <ParameterFunctionDemo />
    },
    arrow: {
      steps: [
        "Arrow functions are a shorter syntax for writing functions.",
        "They use the => operator.",
        "Example: Multiplying two numbers."
      ],
      code: `
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20
      `,
      result: <ArrowFunctionDemo />
    },
    return: {
      steps: [
        "Functions can return values to be used later.",
        "Return stops the function and gives back the result.",
        "Example: Square of a number."
      ],
      code: `
function square(n) {
  return n * n;
}

console.log(square(6)); // 36
      `,
      result: <ReturnFunctionDemo />
    }
  };

  const { steps, code, result } = functionExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Functions in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="normal">Normal Function</option>
        <option value="parameter">Function with Parameters</option>
        <option value="arrow">Arrow Function</option>
        <option value="return">Function Returning Value</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
