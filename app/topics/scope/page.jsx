"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// var Scope Demo
// ----------------------
function VarScopeDemo() {
  if (true) {
    var x = 10; // function-scoped, not block-scoped
  }
  return <p>Value of x (var inside block): {x}</p>; // accessible outside block
}

// ----------------------
// let Scope Demo
// ----------------------
function LetScopeDemo() {
  let output = "";
  if (true) {
    let y = 20; // block-scoped
    output = `Inside block y = ${y}`;
  }
  // Uncommenting below will cause ReferenceError
  // output = y;
  return <p>{output} (y is NOT accessible outside the block)</p>;
}

// ----------------------
// const Scope Demo
// ----------------------
function ConstScopeDemo() {
  const z = 30;
  return <p>const z = {z} (cannot be reassigned)</p>;
}

// ----------------------
// Function Scope Demo
// ----------------------
function FunctionScopeDemo() {
  function test() {
    var a = "I'm inside function";
    return a;
  }
  return (
    <p>
      Function Scope: {test()} (but <b>cannot</b> access `a` outside function)
    </p>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function ScopePage() {
  const [selectedExample, setSelectedExample] = useState("var");

  const scopeExamples = {
    var: {
      steps: [
        "`var` is **function-scoped**, not block-scoped.",
        "It can be accessed outside the block where it was declared.",
        "This often leads to unexpected behavior."
      ],
      code: `
if (true) {
  var x = 10;
}
console.log(x); // 10 (accessible outside block)
      `,
      result: <VarScopeDemo />
    },
    let: {
      steps: [
        "`let` is **block-scoped**.",
        "It can only be accessed inside the block where it is declared.",
        "This makes it safer than `var`."
      ],
      code: `
if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ❌ ReferenceError
      `,
      result: <LetScopeDemo />
    },
    const: {
      steps: [
        "`const` is also **block-scoped** like `let`.",
        "But it cannot be reassigned after declaration.",
        "Useful for constants and values that should not change."
      ],
      code: `
const z = 30;
console.log(z); // 30

z = 40; // ❌ TypeError (cannot reassign const)
      `,
      result: <ConstScopeDemo />
    },
    functionscope: {
      steps: [
        "Functions create their own scope.",
        "Variables declared with `var`, `let`, or `const` inside a function are local to that function.",
        "They cannot be accessed from outside."
      ],
      code: `
function test() {
  var a = "I'm inside function";
  console.log(a); // works
}

test();
console.log(a); // ❌ ReferenceError
      `,
      result: <FunctionScopeDemo />
    }
  };

  const { steps, code, result } = scopeExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Scope, var, let, and const</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="var">var Scope</option>
        <option value="let">let Scope</option>
        <option value="const">const Scope</option>
        <option value="functionscope">Function Scope</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
