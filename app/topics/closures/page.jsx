"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Basic Closure Example
// ----------------------
function BasicClosureDemo() {
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }

  const counter = outer();

  return (
    <div>
      <p>Each click increases count (closure keeps the value):</p>
      <button onClick={() => alert(counter())}>Increment Counter</button>
    </div>
  );
}

// ----------------------
// Closure with Parameters
// ----------------------
function ClosureParamDemo() {
  function multiplier(x) {
    return function(y) {
      return x * y;
    };
  }

  const double = multiplier(2);
  const triple = multiplier(3);

  return (
    <div>
      <p>double(5) = {double(5)}</p>
      <p>triple(5) = {triple(5)}</p>
    </div>
  );
}

// ----------------------
// Closure for Private Variables
// ----------------------
function PrivateVarDemo() {
  function secretHolder() {
    let secret = "I am hidden!";
    return {
      getSecret: () => secret,
      setSecret: (newSecret) => (secret = newSecret),
    };
  }

  const holder = secretHolder();

  return (
    <div>
      <p>Secret: {holder.getSecret()}</p>
      <button
        onClick={() => {
          holder.setSecret("New secret revealed!");
          alert(holder.getSecret());
        }}
      >
        Change Secret
      </button>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function ClosuresPage() {
  const [selectedExample, setSelectedExample] = useState("basic");

  const closureExamples = {
    basic: {
      steps: [
        "A closure is when a function remembers variables from its outer scope even after that scope is gone.",
        "Here, `inner` remembers `count` from `outer`.",
        "Each time we call inner, it updates the same count."
      ],
      code: `
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
      `,
      result: <BasicClosureDemo />
    },
    parameter: {
      steps: [
        "Closures can capture parameters too.",
        "`multiplier(x)` returns a new function that multiplies by x.",
        "Different closures keep different `x` values."
      ],
      code: `
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
      `,
      result: <ClosureParamDemo />
    },
    private: {
      steps: [
        "Closures can be used to create private variables.",
        "Here, `secret` is not accessible directly, only through getter/setter.",
        "This mimics private data in objects."
      ],
      code: `
function secretHolder() {
  let secret = "I am hidden!";
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => (secret = newSecret)
  };
}

const holder = secretHolder();
console.log(holder.getSecret()); // I am hidden!
holder.setSecret("New secret");
console.log(holder.getSecret()); // New secret
      `,
      result: <PrivateVarDemo />
    }
  };

  const { steps, code, result } = closureExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Closures in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="basic">Basic Closure</option>
        <option value="parameter">Closure with Parameters</option>
        <option value="private">Closure for Private Variables</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
