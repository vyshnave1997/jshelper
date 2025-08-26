"use client";
import React from "react";
import TopicLayout from "../../../components/TopicLayout";

// Example Arrow Function Component
function ArrowFunctionDemo() {
  const multiply = (a, b) => a * b;
  const square = (n) => n * n;
  const greet = (name) => `Hello, ${name}!`;

  return (
    <div>
      <p>4 × 5 = {multiply(4, 5)}</p>
      <p>Square of 6 = {square(6)}</p>
      <p>{greet("React Learner")}</p>
    </div>
  );
}

export default function ArrowFunctionsPage() {
  const steps = [
    "Arrow functions were introduced in ES6.",
    "They provide a shorter syntax for writing functions.",
    "They are always anonymous, but can be assigned to variables.",
    "Arrow functions do not have their own `this` keyword."
  ];

  const code = `
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

// Example with one parameter
const square = n => n * n;
console.log(square(6)); // 36

// Example with no parameter
const greet = () => "Hello!";
console.log(greet()); // Hello!
  `;

  const result = <ArrowFunctionDemo />;

  return (
    <TopicLayout
      title="Arrow Functions in JavaScript"
      steps={steps}
      code={code}
      result={result}
    />
  );
}
