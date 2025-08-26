"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Event Loop Demo
// ----------------------
function EventLoopDemo() {
  const logs = [];

  console.log("Start");

  logs.push("Start");

  setTimeout(() => {
    logs.push("setTimeout callback (Macrotask)");
    console.log("setTimeout callback (Macrotask)");
  }, 0);

  Promise.resolve().then(() => {
    logs.push("Promise.then callback (Microtask)");
    console.log("Promise.then callback (Microtask)");
  });

  logs.push("End");
  console.log("End");

  return (
    <div>
      <p>
        Open the console to see order:
        <br />
        <strong>Start → End → Promise.then → setTimeout</strong>
      </p>
      <ul>
        {logs.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

// ----------------------
// Concurrency Simulation
// ----------------------
function ConcurrencyDemo() {
  const logs = [];

  console.log("Task 1 (sync)");
  logs.push("Task 1 (sync)");

  setTimeout(() => {
    logs.push("Task 2 (async - timeout)");
    console.log("Task 2 (async - timeout)");
  }, 1000);

  Promise.resolve().then(() => {
    logs.push("Task 3 (async - microtask)");
    console.log("Task 3 (async - microtask)");
  });

  logs.push("Task 4 (sync)");
  console.log("Task 4 (sync)");

  return (
    <div>
      <p>
        Demonstrates concurrency:
        <br />
        <strong>Sync tasks run first, then microtasks, then macrotasks.</strong>
      </p>
      <ul>
        {logs.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function EventLoopPage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      steps: [
        "JavaScript is **single-threaded**, meaning it runs one task at a time.",
        "The **event loop** manages execution of synchronous and asynchronous code.",
        "Tasks are divided into **call stack (sync)**, **microtask queue (promises, async/await)**, and **macrotask queue (setTimeout, setInterval, I/O)**.",
        "Execution order: Sync → Microtasks → Macrotasks."
      ],
      code: `
// Example of Event Loop
console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then callback (Microtask)");
});

console.log("End");

// Output order:
// Start
// End
// Promise.then callback (Microtask)
// setTimeout callback (Macrotask)
      `,
      result: <p>Event Loop controls execution order of sync & async tasks</p>
    },
    eventloop: {
      steps: [
        "`setTimeout()` goes to the **macrotask queue**.",
        "`Promise.then()` goes to the **microtask queue**.",
        "Microtasks always run **before macrotasks**."
      ],
      code: `
console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then callback (Microtask)");
});

console.log("End");

// Output:
// Start
// End
// Promise.then callback (Microtask)
// setTimeout callback (Macrotask)
      `,
      result: <EventLoopDemo />
    },
    concurrency: {
      steps: [
        "Concurrency in JS means handling multiple tasks without running them at the exact same time.",
        "Sync code runs first, then async tasks are handled in order by the event loop.",
        "Microtasks (Promises) run before macrotasks (setTimeout)."
      ],
      code: `
console.log("Task 1 (sync)");

setTimeout(() => {
  console.log("Task 2 (async - timeout)");
}, 1000);

Promise.resolve().then(() => {
  console.log("Task 3 (async - microtask)");
});

console.log("Task 4 (sync)");

// Output:
// Task 1 (sync)
// Task 4 (sync)
// Task 3 (async - microtask)
// Task 2 (async - timeout)
      `,
      result: <ConcurrencyDemo />
    }
  };

  const { steps, code, result } = examples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Event Loop & Concurrency</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">Intro</option>
        <option value="eventloop">Event Loop</option>
        <option value="concurrency">Concurrency</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
