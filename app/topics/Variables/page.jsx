"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Variable Demo
// ----------------------
function VariablesDemo() {
  // Example variables
  var oldVar = "I am var";
  let blockScoped = "I am let";
  const constantValue = "I am const";

  return (
    <div>
      <p><strong>var:</strong> {oldVar}</p>
      <p><strong>let:</strong> {blockScoped}</p>
      <p><strong>const:</strong> {constantValue}</p>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function VariablesPage() {
  const [selectedType, setSelectedType] = useState("var");

  const variableExamples = {
    var: {
      steps: [
        "`var` is function-scoped.",
        "It can be re-declared and updated.",
        "Not recommended in modern JavaScript."
      ],
      code: `
var name = "John";
var name = "Doe"; // re-declared
console.log(name); // Output: Doe
      `,
      result: <VariablesDemo />
    },
    let: {
      steps: [
        "`let` is block-scoped.",
        "It can be updated but not re-declared in the same scope.",
        "Preferred for values that change."
      ],
      code: `
let age = 25;
age = 26; // ✅ valid
console.log(age); // Output: 26
      `,
      result: <VariablesDemo />
    },
    const: {
      steps: [
        "`const` is block-scoped.",
        "It cannot be updated or re-declared.",
        "Best for values that should never change."
      ],
      code: `
const PI = 3.14159;
PI = 3.14; // ❌ Error
console.log(PI); // Output: 3.14159
      `,
      result: <VariablesDemo />
    }
  };

  const { steps, code, result } = variableExamples[selectedType];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>JavaScript Variables</h2>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="var">var</option>
        <option value="let">let</option>
        <option value="const">const</option>
      </select>
      <TopicLayout title={selectedType} steps={steps} code={code} result={result} />
    </div>
  );
}
