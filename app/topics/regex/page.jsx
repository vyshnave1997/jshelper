"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Regex Demo - Test
// ----------------------
function RegexTestDemo() {
  const regex = /hello/i; // i = case-insensitive
  const text = "Hello World";
  const result = regex.test(text);

  return <h3>{`Does "${text}" contain 'hello'? → ${result}`}</h3>;
}

// ----------------------
// Regex Demo - Match
// ----------------------
function RegexMatchDemo() {
  const text = "My numbers are 123 and 456";
  const numbers = text.match(/\d+/g); // \d+ = digits
  return <h3>{`Extracted Numbers: ${numbers.join(", ")}`}</h3>;
}

// ----------------------
// Regex Demo - Replace
// ----------------------
function RegexReplaceDemo() {
  const text = "I like cats, cats are cute.";
  const replaced = text.replace(/cats/g, "dogs");
  return <h3>{replaced}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function RegexPage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      steps: [
        "Regular Expressions (**Regex**) are patterns used to match strings.",
        "They are very useful for validation, searching, and text manipulation.",
        "Regex modifiers: `i` = case-insensitive, `g` = global (all matches), `m` = multi-line."
      ],
      code: `
// Example: Test if "Hello" exists
const regex = /hello/i; 
console.log(regex.test("Hello World")); // true

// Example: Extract numbers
const text = "My numbers are 123 and 456";
console.log(text.match(/\\d+/g)); // ["123", "456"]

// Example: Replace
console.log("I like cats".replace(/cats/, "dogs")); // "I like dogs"
      `,
      result: <p>Regex is used for **matching, testing, extracting, replacing** text</p>
    },
    test: {
      steps: [
        "`regex.test(str)` → returns true/false if pattern is found",
        "Example: Check if 'hello' exists in a string"
      ],
      code: `
const regex = /hello/i;
console.log(regex.test("Hello World")); // true
console.log(regex.test("Hi there"));    // false
      `,
      result: <RegexTestDemo />
    },
    match: {
      steps: [
        "`string.match(regex)` → returns array of matches or null",
        "Use `g` flag for multiple matches.",
        "Example: Extract all numbers from a string."
      ],
      code: `
const text = "My numbers are 123 and 456";
console.log(text.match(/\\d+/g)); // ["123", "456"]
      `,
      result: <RegexMatchDemo />
    },
    replace: {
      steps: [
        "`string.replace(regex, newText)` → replaces matching text",
        "Use `g` for replacing all matches.",
        "Example: Replace 'cats' with 'dogs'."
      ],
      code: `
const text = "I like cats, cats are cute.";
console.log(text.replace(/cats/g, "dogs"));
// Output: "I like dogs, dogs are cute."
      `,
      result: <RegexReplaceDemo />
    }
  };

  const { steps, code, result } = examples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Regular Expressions (Regex)</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">Intro</option>
        <option value="test">Test</option>
        <option value="match">Match</option>
        <option value="replace">Replace</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
