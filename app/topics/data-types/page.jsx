"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function DataTypesPage() {
  const [selectedType, setSelectedType] = useState("string");

  const typeExamples = {
    string: {
      steps: [
        "Strings are sequences of characters used to represent text.",
        "They are written inside single quotes, double quotes, or backticks.",
        "Example: let name = 'John';"
      ],
      code: `
function StringExample() {
  const name = "John";
  return <h3>Name: {name}</h3>;
}
      `,
      result: <h3>Name: John</h3>
    },
    number: {
      steps: [
        "Numbers represent both integers and floating point values.",
        "JavaScript does not differentiate between int and float.",
        "Example: let age = 25; let pi = 3.14;"
      ],
      code: `
function NumberExample() {
  const age = 25;
  const pi = 3.14;
  return (
    <div>
      <h3>Age: {age}</h3>
      <h3>PI: {pi}</h3>
    </div>
  );
}
      `,
      result: (
        <div>
          <h3>Age: 25</h3>
          <h3>PI: 3.14</h3>
        </div>
      )
    },
    boolean: {
      steps: [
        "Booleans represent logical values: true or false.",
        "They are commonly used in conditional statements.",
        "Example: let isLoggedIn = true;"
      ],
      code: `
function BooleanExample() {
  const isLoggedIn = true;
  return <h3>User Logged In: {isLoggedIn ? "Yes" : "No"}</h3>;
}
      `,
      result: <h3>User Logged In: Yes</h3>
    },
    array: {
      steps: [
        "Arrays are used to store multiple values in a single variable.",
        "They are written inside square brackets [].",
        "Example: let fruits = ['Apple', 'Banana', 'Mango'];"
      ],
      code: `
function ArrayExample() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
      `,
      result: (
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Mango</li>
        </ul>
      )
    },
    object: {
      steps: [
        "Objects are collections of key-value pairs.",
        "They are written inside curly braces {}.",
        "Example: let person = { name: 'John', age: 30 };"
      ],
      code: `
function ObjectExample() {
  const person = { name: "John", age: 30 };
  return (
    <h3>
      Name: {person.name}, Age: {person.age}
    </h3>
  );
}
      `,
      result: <h3>Name: John, Age: 30</h3>
    }
  };

  const { steps, code, result } = typeExamples[selectedType];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>JavaScript Data Types</h2>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        <option value="array">Array</option>
        <option value="object">Object</option>
      </select>
      <TopicLayout title={selectedType} steps={steps} code={code} result={result} />
    </div>
  );
}
