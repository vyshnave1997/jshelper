"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Named Export Example
// ----------------------
function NamedExportDemo() {
  return <h3>Result: 10 + 20 = 30</h3>;
}

// ----------------------
// Default Export Example
// ----------------------
function DefaultExportDemo() {
  return <h3>Result: Greeting from Default Export!</h3>;
}

// ----------------------
// Import Multiple Exports
// ----------------------
function MultipleImportDemo() {
  return <h3>Area of Rectangle (5 × 4) = 20</h3>;
}

// ----------------------
// Re-export Example
// ----------------------
function ReExportDemo() {
  return <h3>Message: Re-exported Function Works!</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function ModulesPage() {
  const [selectedExample, setSelectedExample] = useState("named");

  const moduleExamples = {
    named: {
      steps: [
        "Modules allow you to split code into different files.",
        "You can export functions, variables, or classes using `export`.",
        "Named exports must be imported using curly braces `{}`."
      ],
      code: `
// mathUtils.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './mathUtils.js';
console.log(add(10, 20)); // 30
      `,
      result: <NamedExportDemo />
    },
    default: {
      steps: [
        "A module can have one default export.",
        "Default exports are imported without curly braces.",
        "Useful for exporting a single main function/class."
      ],
      code: `
// greet.js
export default function greet() {
  return "Hello from Default Export!";
}

// main.js
import greet from './greet.js';
console.log(greet()); // Hello from Default Export!
      `,
      result: <DefaultExportDemo />
    },
    multiple: {
      steps: [
        "You can export multiple things from the same module.",
        "They are imported using curly braces and exact names.",
        "Example: Calculating area and perimeter."
      ],
      code: `
// shapes.js
export function area(l, w) {
  return l * w;
}
export function perimeter(l, w) {
  return 2 * (l + w);
}

// main.js
import { area, perimeter } from './shapes.js';
console.log(area(5, 4)); // 20
console.log(perimeter(5, 4)); // 18
      `,
      result: <MultipleImportDemo />
    },
    reexport: {
      steps: [
        "Modules can re-export exports from other modules.",
        "Useful for creating a single entry point to multiple files.",
        "Example: `index.js` re-exporting utilities."
      ],
      code: `
// helper.js
export function sayHello() {
  return "Re-exported Function Works!";
}

// index.js
export { sayHello } from './helper.js';

// main.js
import { sayHello } from './index.js';
console.log(sayHello()); // Re-exported Function Works!
      `,
      result: <ReExportDemo />
    }
  };

  const { steps, code, result } = moduleExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Modules: Import & Export</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="named">Named Export</option>
        <option value="default">Default Export</option>
        <option value="multiple">Multiple Exports</option>
        <option value="reexport">Re-export</option>
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
