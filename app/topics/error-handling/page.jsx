"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Using .then() / .catch()
// ----------------------
function ThenCatchDemo() {
  function riskyOperation(shouldFail) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) reject("❌ Error: Operation failed!");
        else resolve("✅ Operation succeeded!");
      }, 800);
    });
  }

  const [result, setResult] = React.useState("Running...");

  React.useEffect(() => {
    riskyOperation(true) // change to false for success
      .then((res) => setResult(res))
      .catch((err) => setResult(err))
      .finally(() => console.log("Finished (then/catch)."));
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Using async/await with try/catch
// ----------------------
function AsyncAwaitDemo() {
  function riskyOperation(shouldFail) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) reject("❌ Error: Operation failed!");
        else resolve("✅ Operation succeeded!");
      }, 800);
    });
  }

  const [result, setResult] = React.useState("Running...");

  React.useEffect(() => {
    async function run() {
      try {
        const res = await riskyOperation(true); // change to false for success
        setResult(res);
      } catch (err) {
        setResult(err);
      } finally {
        console.log("Finished (async/await).");
      }
    }
    run();
  }, []);

  return <h3>{result}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function ErrorHandlingPage() {
  const [selectedExample, setSelectedExample] = useState("thenCatch");

  const errorExamples = {
    thenCatch: {
      steps: [
        "Promises can handle errors with `.catch()`.",
        "Use `.finally()` to run cleanup code regardless of success or failure.",
        "Example: risky operation may fail."
      ],
      code: `
// Function returning a promise
function riskyOperation(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Error occurred!");
      else resolve("Success!");
    }, 800);
  });
}

// Handling with .then() / .catch()
riskyOperation(true)
  .then((res) => console.log(res))
  .catch((err) => console.error("Caught:", err))
  .finally(() => console.log("Done"));
// Output: Caught: Error occurred!
      `,
      result: <ThenCatchDemo />
    },
    asyncAwait: {
      steps: [
        "`async/await` lets you use `try...catch` for errors.",
        "This looks similar to synchronous error handling.",
        "Example: risky operation may fail."
      ],
      code: `
// Function returning a promise
function riskyOperation(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Error occurred!");
      else resolve("Success!");
    }, 800);
  });
}

// Handling with async/await
async function run() {
  try {
    const res = await riskyOperation(true);
    console.log(res);
  } catch (err) {
    console.error("Caught:", err); 
  } finally {
    console.log("Done");
  }
}

run();
// Output: Caught: Error occurred!
      `,
      result: <AsyncAwaitDemo />
    }
  };

  const { steps, code, result } = errorExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>
        Error Handling in JavaScript (Promises vs Async/Await)
      </h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="thenCatch">Using .then() / .catch()</option>
        <option value="asyncAwait">Using async/await (try/catch)</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
