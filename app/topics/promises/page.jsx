"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Basic Promise
// ----------------------
function BasicPromiseDemo() {
  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("✅ Data fetched successfully!"), 1000);
    });

  const [message, setMessage] = React.useState("Loading...");

  React.useEffect(() => {
    fetchData().then((res) => setMessage(res));
  }, []);

  return <h3>{message}</h3>;
}

// ----------------------
// Promise Chaining
// ----------------------
function ChainingPromiseDemo() {
  const delayedDouble = (n) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(n * 2), 500);
    });

  const [result, setResult] = React.useState("Calculating...");

  React.useEffect(() => {
    delayedDouble(2)
      .then((res) => delayedDouble(res))
      .then((res) => delayedDouble(res))
      .then((final) => setResult(`Final Result = ${final}`));
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Promise Error Handling
// ----------------------
function ErrorHandlingPromiseDemo() {
  const riskyOperation = (shouldFail) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) reject("❌ Operation failed!");
        else resolve("✅ Operation succeeded!");
      }, 800);
    });

  const [result, setResult] = React.useState("Running...");

  React.useEffect(() => {
    riskyOperation(true)
      .then((res) => setResult(res))
      .catch((err) => setResult(err))
      .finally(() => console.log("Promise completed."));
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Async / Await Example
// ----------------------
function AsyncAwaitDemo() {
  const fetchNumber = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(42), 700);
    });

  const [result, setResult] = React.useState("Loading...");

  React.useEffect(() => {
    async function getData() {
      const num = await fetchNumber();
      setResult(`Number fetched = ${num}`);
    }
    getData();
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function PromisesPage() {
  const [selectedExample, setSelectedExample] = useState("basic");

  const promiseExamples = {
    basic: {
      steps: [
        "A Promise represents a value that will be available in the future.",
        "It can be in one of three states: pending, fulfilled, or rejected.",
        "Example: Fetching data after a delay."
      ],
      code: `
// Creating a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
}

// Using the promise
fetchData().then((msg) => console.log(msg)); 
// Data fetched!
      `,
      result: <BasicPromiseDemo />
    },
    chaining: {
      steps: [
        "Promises can be chained using `.then()`.",
        "Each `.then()` passes its return value to the next one.",
        "Example: Multiply a number step by step."
      ],
      code: `
// Function returning a promise
function delayedDouble(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500);
  });
}

// Chaining promises
delayedDouble(2)
  .then((res) => delayedDouble(res)) // 4
  .then((res) => delayedDouble(res)) // 8
  .then((final) => console.log(final)); // 16
      `,
      result: <ChainingPromiseDemo />
    },
    errorHandling: {
      steps: [
        "Use `.catch()` to handle errors in promises.",
        "`.finally()` runs whether the promise is fulfilled or rejected.",
        "Example: Simulating a risky operation."
      ],
      code: `
// Function with success/failure
function riskyOperation(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Error occurred!");
      else resolve("Success!");
    }, 800);
  });
}

// Handling with catch
riskyOperation(true)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("Done"));
// Error occurred!
      `,
      result: <ErrorHandlingPromiseDemo />
    },
    asyncAwait: {
      steps: [
        "`async/await` is a cleaner way to work with promises.",
        "`await` pauses execution until the promise resolves.",
        "Example: Fetching a number with await."
      ],
      code: `
// Function returning a promise
function fetchNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 700);
  });
}

// Using async/await
async function getData() {
  const num = await fetchNumber();
  console.log(num); // 42
}

getData();
      `,
      result: <AsyncAwaitDemo />
    }
  };

  const { steps, code, result } = promiseExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Promises in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="basic">Basic Promise</option>
        <option value="chaining">Promise Chaining</option>
        <option value="errorHandling">Error Handling</option>
        <option value="asyncAwait">Async / Await</option>
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
