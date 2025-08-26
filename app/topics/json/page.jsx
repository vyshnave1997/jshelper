"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// JSON.parse Demo
// ----------------------
function JSONParseDemo() {
  const jsonString = '{"name":"Alice","age":25}';
  const obj = JSON.parse(jsonString);

  return (
    <div>
      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>
    </div>
  );
}

// ----------------------
// JSON.stringify Demo
// ----------------------
function JSONStringifyDemo() {
  const person = { name: "Bob", age: 30 };
  const jsonString = JSON.stringify(person);

  return (
    <div>
      <p>Object: {JSON.stringify(person)}</p>
      <p>JSON String: {jsonString}</p>
    </div>
  );
}

// ----------------------
// Nested JSON Demo
// ----------------------
function JSONNestedDemo() {
  const jsonString = '{"user":{"name":"Charlie","hobbies":["coding","music"]}}';
  const obj = JSON.parse(jsonString);

  return (
    <div>
      <p>User: {obj.user.name}</p>
      <p>Hobbies: {obj.user.hobbies.join(", ")}</p>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function JSONPage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      steps: [
        "JSON stands for **JavaScript Object Notation**.",
        "It is a lightweight format for storing and transporting data.",
        "Often used when sending data between a server and client.",
        "Two key methods: `JSON.stringify()` (object → JSON string) and `JSON.parse()` (JSON string → object)."
      ],
      code: `
// Object to JSON
const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":25}'

// JSON to Object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // Alice
      `,
      result: <p>JSON = lightweight format for storing and exchanging data</p>
    },
    parse: {
      steps: [
        "`JSON.parse()` converts a JSON string into a JavaScript object.",
        "If the string is not valid JSON, it throws an error."
      ],
      code: `
const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // Alice
console.log(obj.age);  // 25
      `,
      result: <JSONParseDemo />
    },
    stringify: {
      steps: [
        "`JSON.stringify()` converts a JavaScript object into a JSON string.",
        "Useful when sending data to a server."
      ],
      code: `
const person = { name: "Bob", age: 30 };
const jsonString = JSON.stringify(person);

console.log(jsonString); // '{"name":"Bob","age":30}'
      `,
      result: <JSONStringifyDemo />
    },
    nested: {
      steps: [
        "JSON can represent nested objects and arrays.",
        "Access them by parsing first and then using dot or bracket notation."
      ],
      code: `
const jsonString = '{"user":{"name":"Charlie","hobbies":["coding","music"]}}';
const obj = JSON.parse(jsonString);

console.log(obj.user.name);       // Charlie
console.log(obj.user.hobbies[0]); // coding
      `,
      result: <JSONNestedDemo />
    }
  };

  const { steps, code, result } = examples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>JSON in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">Intro</option>
        <option value="parse">JSON.parse()</option>
        <option value="stringify">JSON.stringify()</option>
        <option value="nested">Nested JSON</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
