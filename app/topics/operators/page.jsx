"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function OperatorsPage() {
  const [selectedOp, setSelectedOp] = useState("arithmetic");

  const operatorExamples = {
    arithmetic: {
      steps: [
        "Arithmetic operators are used to perform mathematical operations.",
        "Examples: +, -, *, /, %, **",
        "They work with numbers and return numerical results."
      ],
      code: `
function ArithmeticExample() {
  const a = 10;
  const b = 3;
  return (
    <div>
      <p>Addition: {a + b}</p>
      <p>Subtraction: {a - b}</p>
      <p>Multiplication: {a * b}</p>
      <p>Division: {a / b}</p>
      <p>Modulus: {a % b}</p>
      <p>Exponentiation: {a ** b}</p>
    </div>
  );
}
      `,
      result: (
        <div>
          <p>Addition: 13</p>
          <p>Subtraction: 7</p>
          <p>Multiplication: 30</p>
          <p>Division: 3.333...</p>
          <p>Modulus: 1</p>
          <p>Exponentiation: 1000</p>
        </div>
      )
    },
    comparison: {
      steps: [
        "Comparison operators are used to compare values.",
        "Examples: ==, ===, !=, !==, >, <, >=, <=",
        "`==` checks value only, `===` checks value + type."
      ],
      code: `
function ComparisonExample() {
  const x = 5;
  const y = "5";
  return (
    <div>
      <p>x == y: {x == y ? "true" : "false"}</p>
      <p>x === y: {x === y ? "true" : "false"}</p>
      <p>x != y: {x != y ? "true" : "false"}</p>
      <p>x !== y: {x !== y ? "true" : "false"}</p>
      <p>x > 3: {x > 3 ? "true" : "false"}</p>
      <p>x <= 5: {x <= 5 ? "true" : "false"}</p>
    </div>
  );
}
      `,
   result: (
  <div>
    <p>x == y: true</p>
    <p>x === y: false</p>
    <p>x != y: false</p>
    <p>x !== y: true</p>
    <p>x &gt; 3: true</p>
    <p>x &lt;= 5: true</p>
  </div>
)

    },
    logical: {
      steps: [
        "Logical operators are used to combine multiple conditions.",
        "Examples: && (AND), || (OR), ! (NOT)",
        "`&&` returns true if both are true, `||` returns true if one is true."
      ],
      code: `
function LogicalExample() {
  const a = true;
  const b = false;
  return (
    <div>
      <p>a && b: {a && b ? "true" : "false"}</p>
      <p>a || b: {a || b ? "true" : "false"}</p>
      <p>!a: {!a ? "true" : "false"}</p>
      <p>!b: {!b ? "true" : "false"}</p>
    </div>
  );
}
      `,
      result: (
        <div>
          <p>a && b: false</p>
          <p>a || b: true</p>
          <p>!a: false</p>
          <p>!b: true</p>
        </div>
      )
    },
    assignment: {
      steps: [
        "Assignment operators are used to assign values to variables.",
        "Examples: =, +=, -=, *=, /=, %=",
        "They update variable values directly."
      ],
      code: `
function AssignmentExample() {
  let x = 10;
  x += 5; // x = 15
  x -= 3; // x = 12
  x *= 2; // x = 24
  x /= 4; // x = 6
  return <p>Final value of x: {x}</p>;
}
      `,
      result: <p>Final value of x: 6</p>
    }
  };

  const { steps, code, result } = operatorExamples[selectedOp];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>JavaScript Operators</h2>
      <select
        value={selectedOp}
        onChange={(e) => setSelectedOp(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="arithmetic">Arithmetic Operators</option>
        <option value="comparison">Comparison Operators</option>
        <option value="logical">Logical Operators</option>
        <option value="assignment">Assignment Operators</option>
      </select>
      <TopicLayout
        title={selectedOp}
        steps={steps}
        code={code}
        result={result}
      />
    </div>
  );
}
