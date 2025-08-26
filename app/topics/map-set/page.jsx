"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Map Demo
// ----------------------
function MapDemo() {
  const myMap = new Map();
  myMap.set("name", "Alice");
  myMap.set("age", 25);

  return (
    <div>
      <p>Name: {myMap.get("name")}</p>
      <p>Age: {myMap.get("age")}</p>
      <p>Size: {myMap.size}</p>
    </div>
  );
}

// ----------------------
// Set Demo
// ----------------------
function SetDemo() {
  const mySet = new Set([1, 2, 3, 2, 1]); // duplicates removed

  return (
    <div>
      <p>Values: {[...mySet].join(", ")}</p>
      <p>Has 2? {mySet.has(2) ? "Yes" : "No"}</p>
      <p>Size: {mySet.size}</p>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function MapSetPage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      steps: [
        "`Map` and `Set` were introduced in ES6.",
        "`Map` → stores key-value pairs (keys can be objects, functions, primitives).",
        "`Set` → stores unique values only (no duplicates).",
        "Both preserve insertion order."
      ],
      code: `
// Map: key-value store
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a")); // 1

// Set: unique values only
const set = new Set([1, 2, 2, 3]);
console.log(set); // {1, 2, 3}
      `,
      result: (
        <p>
          <b>Map</b> → key-value pairs | <b>Set</b> → unique values
        </p>
      )
    },
    map: {
      steps: [
        "`Map` is a collection of keyed data items.",
        "Unlike objects, keys can be of any type (string, number, object, function).",
        "Useful when you need a dictionary-like structure."
      ],
      code: `
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 25);

console.log(myMap.get("name")); // Alice
console.log(myMap.get("age"));  // 25
console.log(myMap.size);        // 2
      `,
      result: <MapDemo />
    },
    set: {
      steps: [
        "`Set` is a collection of unique values.",
        "Automatically removes duplicates.",
        "Useful for filtering unique items from arrays."
      ],
      code: `
const mySet = new Set([1, 2, 3, 2, 1]);

console.log(mySet);          // {1, 2, 3}
console.log(mySet.has(2));   // true
console.log(mySet.size);     // 3
      `,
      result: <SetDemo />
    }
  };

  const { steps, code, result } = examples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Map & Set in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">Intro</option>
        <option value="map">Map</option>
        <option value="set">Set</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
