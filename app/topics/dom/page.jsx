"use client";
import React, { useState, useRef, useEffect } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Example 1: Change Text Content
// ----------------------
function ChangeTextDemo() {
  const [text, setText] = useState("Hello World!");
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Text Changed ✅")}>Change Text</button>
    </div>
  );
}

// ----------------------
// Example 2: Change Style
// ----------------------
function ChangeStyleDemo() {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <p style={{ color: color }}>This is styled text.</p>
      <button onClick={() => setColor("red")}>Change to Red</button>
      <button onClick={() => setColor("green")}>Change to Green</button>
    </div>
  );
}

// ----------------------
// Example 3: Using useRef (like getElementById)
// ----------------------
function RefDemo() {
  const paraRef = useRef(null);

  function changeText() {
    if (paraRef.current) {
      paraRef.current.innerText = "Changed via useRef (like DOM query) ✅";
      paraRef.current.style.color = "purple";
    }
  }

  return (
    <div>
      <p ref={paraRef}>Original text (manipulate me)</p>
      <button onClick={changeText}>Manipulate DOM</button>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function DOMManipulationPage() {
  const [selectedExample, setSelectedExample] = useState("changeText");

  const domExamples = {
    changeText: {
      steps: [
        "DOM manipulation allows us to change HTML content dynamically.",
        "In plain JavaScript: `document.getElementById('demo').innerText = 'New Text';`",
        "In React: we update state to re-render text."
      ],
      code: `
// Vanilla JS
document.getElementById("demo").innerText = "New Text";

// React way
const [text, setText] = useState("Hello");
<button onClick={() => setText("Changed!")}>Change Text</button>
      `,
      result: <ChangeTextDemo />
    },
    changeStyle: {
      steps: [
        "You can manipulate element styles dynamically.",
        "In plain JS: `document.getElementById('demo').style.color = 'red';`",
        "In React: change state and bind style."
      ],
      code: `
// Vanilla JS
document.getElementById("demo").style.color = "red";

// React way
const [color, setColor] = useState("blue");
<p style={{color}}>Styled Text</p>
      `,
      result: <ChangeStyleDemo />
    },
    refDemo: {
      steps: [
        "Sometimes you need direct access to a DOM node.",
        "In plain JS: `document.getElementById()`.",
        "In React: use `useRef` to access and manipulate the element."
      ],
      code: `
// Vanilla JS
document.getElementById("demo").innerText = "Changed!";

// React with useRef
const paraRef = useRef(null);
paraRef.current.innerText = "Changed!";
      `,
      result: <RefDemo />
    }
  };

  const { steps, code, result } = domExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>DOM Manipulation in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="changeText">Change Text</option>
        <option value="changeStyle">Change Style</option>
        <option value="refDemo">Using useRef (like getElementById)</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
