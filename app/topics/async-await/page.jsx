"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Basic Async / Await
// ----------------------
function BasicAsyncAwaitDemo() {
  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("✅ Data fetched!"), 1000);
    });

  const [message, setMessage] = React.useState("Loading...");

  React.useEffect(() => {
    async function getData() {
      const result = await fetchData();
      setMessage(result);
    }
    getData();
  }, []);

  return <h3>{message}</h3>;
}

// ----------------------
// Handling Errors with try/catch
// ----------------------
function ErrorHandlingDemo() {
  const riskyOperation = (shouldFail) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) reject("❌ Operation failed!");
        else resolve("✅ Operation succeeded!");
      }, 800);
    });

  const [result, setResult] = React.useState("Running...");

  React.useEffect(() => {
    async function runOperation() {
      try {
        const res = await riskyOperation(true);
        setResult(res);
      } catch (err) {
        setResult(err);
      }
    }
    runOperation();
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Await in Loop (Sequential Execution)
// ----------------------
function LoopSequentialDemo() {
  const waitAndDouble = (n) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(n * 2), 500);
    });

  const [result, setResult] = React.useState("Calculating...");

  React.useEffect(() => {
    async function processNumbers() {
      let num = 1;
      for (let i = 0; i < 3; i++) {
        num = await waitAndDouble(num);
      }
      setResult(`Final number after doubling thrice: ${num}`);
    }
    processNumbers();
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Parallel Execution with Promise.all
// ----------------------
function ParallelDemo() {
  const fetchNumber = (n) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(n), 700);
    });

  const [result, setResult] = React.useState("Fetching...");

  React.useEffect(() => {
    async function getNumbers() {
      const numbers = await Promise.all([
        fetchNumber(1),
        fetchNumber(2),
        fetchNumber(3)
      ]);
      setResult(`Numbers fetched: ${numbers.join(", ")}`);
    }
    getNumbers();
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function AsyncAwaitPage() {
  const [selectedExample, setSelectedExample] = useState("basic");

  const asyncExamples = {
    basic: {
      steps: [
        "`async` functions always return a promise.",
        "`await` pauses execution until the promise resolves.",
        "Example: Fetching data with async/await."
      ],
      code: `
// Example: async/await
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result); // Data fetched!
}

getData();
      `,
      result: <BasicAsyncAwaitDemo />
    },
    errorHandling: {
      steps: [
        "Use `try...catch` blocks to handle errors with async/await.",
        "This works like synchronous error handling.",
        "Example: risky operation may fail."
      ],
      code: `
function riskyOperation(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Error occurred!");
      else resolve("Success!");
    }, 800);
  });
}

async function run() {
  try {
    const res = await riskyOperation(true);
    console.log(res);
  } catch (err) {
    console.error(err); // Error occurred!
  }
}

run();
      `,
      result: <ErrorHandlingDemo />
    },
    loopSequential: {
      steps: [
        "`await` inside a loop makes the loop run sequentially.",
        "Each iteration waits for the previous one to finish.",
        "Example: doubling a number three times."
      ],
      code: `
function waitAndDouble(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500);
  });
}

async function process() {
  let num = 1;
  for (let i = 0; i < 3; i++) {
    num = await waitAndDouble(num);
  }
  console.log(num); // 8
}

process();
      `,
      result: <LoopSequentialDemo />
    },
    parallel: {
      steps: [
        "Use `Promise.all()` to run async tasks in parallel.",
        "`await` waits for all promises to resolve.",
        "Example: fetching multiple numbers together."
      ],
      code: `
function fetchNumber(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n), 700);
  });
}

async function getNumbers() {
  const numbers = await Promise.all([
    fetchNumber(1),
    fetchNumber(2),
    fetchNumber(3),
  ]);
  console.log(numbers); // [1, 2, 3]
}

getNumbers();
      `,
      result: <ParallelDemo />
    }
  };

  const { steps, code, result } = asyncExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Async / Await in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="basic">Basic Async / Await</option>
        <option value="errorHandling">Error Handling</option>
        <option value="loopSequential">Await in Loop (Sequential)</option>
        <option value="parallel">Parallel Execution</option>
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
