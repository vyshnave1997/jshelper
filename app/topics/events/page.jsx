"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Click Event
// ----------------------
function ClickEventDemo() {
  const [message, setMessage] = useState("Click the button 👇");

  function handleClick() {
    setMessage("✅ Button clicked!");
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// ----------------------
// Change Event
// ----------------------
function ChangeEventDemo() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

// ----------------------
// MouseOver Event
// ----------------------
function MouseOverEventDemo() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        style={{
          padding: "1rem",
          background: hovered ? "lightgreen" : "lightgray",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        Hover over me
      </div>
      <p>{hovered ? "🟢 Mouse is inside" : "⚪ Mouse is outside"}</p>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function EventsPage() {
  const [selectedExample, setSelectedExample] = useState("click");

  const eventExamples = {
    click: {
      steps: [
        "Events let you respond to user interactions.",
        "A click event triggers when a user clicks an element.",
        "Example: Button with onClick handler."
      ],
      code: `
function handleClick() {
  console.log("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
      `,
      result: <ClickEventDemo />
    },
    change: {
      steps: [
        "Change events are used with inputs, textboxes, etc.",
        "Triggered when the value of an element changes.",
        "Example: Typing in a textbox updates text."
      ],
      code: `
function handleChange(e) {
  console.log("Value:", e.target.value);
}

<input type="text" onChange={handleChange} />
      `,
      result: <ChangeEventDemo />
    },
    mouseover: {
      steps: [
        "Mouse events handle hovering, entering, or leaving an element.",
        "onMouseOver triggers when mouse enters; onMouseOut triggers when it leaves.",
        "Example: Change color when hovering."
      ],
      code: `
<div 
  onMouseOver={() => console.log("Mouse entered")}
  onMouseOut={() => console.log("Mouse left")}
>
  Hover over me
</div>
      `,
      result: <MouseOverEventDemo />
    }
  };

  const { steps, code, result } = eventExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Events in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="click">Click Event</option>
        <option value="change">Change Event</option>
        <option value="mouseover">MouseOver Event</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
