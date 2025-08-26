"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// For Loop Demo
// ----------------------
function ForLoopDemo() {
  let numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
  }
  return <h3>{numbers.join(", ")}</h3>;
}

// ----------------------
// While Loop Demo
// ----------------------
function WhileLoopDemo() {
  let i = 1;
  let numbers = [];
  while (i <= 5) {
    numbers.push(i);
    i++;
  }
  return <h3>{numbers.join(", ")}</h3>;
}

// ----------------------
// For...of Loop Demo
// ----------------------
function ForOfLoopDemo() {
  const fruits = ["Apple", "Banana", "Cherry"];
  let list = [];
  for (const fruit of fruits) {
    list.push(fruit);
  }
  return <h3>{list.join(", ")}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function LoopsPage() {
  const [selectedExample, setSelectedExample] = useState("for");

  const loopExamples = {
    for: {
      steps: [
        "The for loop repeats code a fixed number of times.",
        "It has initialization, condition, and increment parts.",
        "Example: Printing numbers from 1 to 5."
      ],
      code: `
function ForLoopDemo() {
  let numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
  }
  return <h3>{numbers.join(", ")}</h3>;
}
      `,
      result: <ForLoopDemo />
    },
    while: {
      steps: [
        "The while loop runs as long as the condition is true.",
        "Be careful to update variables, or it may run forever.",
        "Example: Printing numbers from 1 to 5."
      ],
      code: `
function WhileLoopDemo() {
  let i = 1;
  let numbers = [];
  while (i <= 5) {
    numbers.push(i);
    i++;
  }
  return <h3>{numbers.join(", ")}</h3>;
}
      `,
      result: <WhileLoopDemo />
    },
    forof: {
      steps: [
        "The for...of loop iterates over arrays or iterable objects.",
        "It gives each element directly, without indexes.",
        "Example: Printing fruit names."
      ],
      code: `
function ForOfLoopDemo() {
  const fruits = ["Apple", "Banana", "Cherry"];
  let list = [];
  for (const fruit of fruits) {
    list.push(fruit);
  }
  return <h3>{list.join(", ")}</h3>;
}
      `,
      result: <ForOfLoopDemo />
    }
  };

  const { steps, code, result } = loopExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Loops in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="for">For Loop</option>
        <option value="while">While Loop</option>
        <option value="forof">For...of Loop</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
