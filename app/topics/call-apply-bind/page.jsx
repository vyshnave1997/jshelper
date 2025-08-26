"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Call Demo
// ----------------------
function CallDemo() {
  function greet(greeting) {
    return `${greeting}, my name is ${this.name}`;
  }

  const person = { name: "Alice" };
  return <p>{greet.call(person, "Hello")}</p>;
}

// ----------------------
// Apply Demo
// ----------------------
function ApplyDemo() {
  function introduce(greeting, age) {
    return `${greeting}, I'm ${this.name} and I'm ${age} years old.`;
  }

  const person = { name: "Bob" };
  return <p>{introduce.apply(person, ["Hi", 25])}</p>;
}

// ----------------------
// Bind Demo
// ----------------------
function BindDemo() {
  function sayHello() {
    return `Hello, I'm ${this.name}`;
  }

  const person = { name: "Charlie" };
  const boundHello = sayHello.bind(person);
  return <p>{boundHello()}</p>;
}

// ----------------------
// Page Component
// ----------------------
export default function CallApplyBindPage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const cabExamples = {
    intro: {
      steps: [
        "`call`, `apply`, and `bind` are methods in JavaScript used to explicitly set the value of `this` when calling a function.",
        "`call` → calls the function immediately, arguments passed individually.",
        "`apply` → calls the function immediately, arguments passed as an array.",
        "`bind` → does not call immediately, returns a new function with `this` permanently bound."
      ],
      code: `
// Syntax
func.call(thisArg, arg1, arg2, ...);
func.apply(thisArg, [arg1, arg2, ...]);
const newFunc = func.bind(thisArg);

// call & apply → invoke immediately
// bind → returns new function
      `,
      result: (
        <p>
          <b>call</b>, <b>apply</b>, and <b>bind</b> let you control what{" "}
          <code>this</code> refers to inside a function.
        </p>
      )
    },
    call: {
      steps: [
        "`call` invokes the function immediately.",
        "You pass arguments one by one after the context object."
      ],
      code: `
function greet(greeting) {
  console.log(greeting + ", my name is " + this.name);
}

const person = { name: "Alice" };
greet.call(person, "Hello"); // Hello, my name is Alice
      `,
      result: <CallDemo />
    },
    apply: {
      steps: [
        "`apply` is similar to `call` but takes arguments as an array.",
        "Useful when you already have arguments in an array."
      ],
      code: `
function introduce(greeting, age) {
  console.log(greeting + ", I'm " + this.name + " and I'm " + age + " years old.");
}

const person = { name: "Bob" };
introduce.apply(person, ["Hi", 25]);
// Hi, I'm Bob and I'm 25 years old.
      `,
      result: <ApplyDemo />
    },
    bind: {
      steps: [
        "`bind` returns a **new function** with `this` permanently set to the given object.",
        "It does not execute immediately, you need to call the returned function."
      ],
      code: `
function sayHello() {
  console.log("Hello, I'm " + this.name);
}

const person = { name: "Charlie" };
const boundHello = sayHello.bind(person);
boundHello(); // Hello, I'm Charlie
      `,
      result: <BindDemo />
    }
  };

  const { steps, code, result } = cabExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Call, Apply & Bind in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">Intro</option>
        <option value="call">call()</option>
        <option value="apply">apply()</option>
        <option value="bind">bind()</option>
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
