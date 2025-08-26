"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// If/Else Demo
// ----------------------
function IfElseDemo() {
  const age = 20;
  let message = "";

  if (age < 13) {
    message = "You are a child.";
  } else if (age < 20) {
    message = "You are a teenager.";
  } else {
    message = "You are an adult.";
  }

  return <h3>{message}</h3>;
}

// ----------------------
// Switch Demo
// ----------------------
function SwitchDemo() {
  const day = 3;
  let dayName = "";

  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    default:
      dayName = "Weekend";
  }

  return <h3>Today is {dayName}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function ControlFlowPage() {
  const [selectedExample, setSelectedExample] = useState("ifelse");

  const controlExamples = {
    ifelse: {
      steps: [
        "The if statement is used to run code when a condition is true.",
        "You can use else if and else for additional conditions.",
        "Example: Checking age to determine category."
      ],
      code: `
function IfElseDemo() {
  const age = 20;
  let message = "";

  if (age < 13) {
    message = "You are a child.";
  } else if (age < 20) {
    message = "You are a teenager.";
  } else {
    message = "You are an adult.";
  }

  return <h3>{message}</h3>;
}
      `,
      result: <IfElseDemo />
    },
    switch: {
      steps: [
        "The switch statement is used to test a variable against multiple values.",
        "Each case is checked until a match is found.",
        "Use break to stop after a match, and default for fallback."
      ],
      code: `
function SwitchDemo() {
  const day = 3;
  let dayName = "";

  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    default:
      dayName = "Weekend";
  }

  return <h3>Today is {dayName}</h3>;
}
      `,
      result: <SwitchDemo />
    }
  };

  const { steps, code, result } = controlExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Control Flow in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="ifelse">If / Else</option>
        <option value="switch">Switch</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
