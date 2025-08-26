"use client";
import React from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function DestructuringPage() {
  // Example data
  const person = { name: "Alice", age: 30, city: "London" };
  const numbers = [10, 20, 30, 40];

  // Object destructuring
  const { name, age } = person;

  // Array destructuring
  const [first, second] = numbers;

  const codeExample = `// Object Destructuring
const person = { name: "Alice", age: 30, city: "London" };
const { name, age } = person;
console.log(name); // "Alice"
console.log(age);  // 30

// Array Destructuring
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first);  // 10
console.log(second); // 20

// Nested Destructuring
const user = { id: 1, profile: { username: "bob", email: "bob@mail.com" } };
const { profile: { username } } = user;
console.log(username); // "bob"

// Default values
const [a=1, b=2, c=3] = [5];
console.log(a, b, c); // 5 2 3
`;

  const result = (
    <div>
      <p>
        <b>Object Destructuring:</b> {name}, {age}
      </p>
      <p>
        <b>Array Destructuring:</b> {first}, {second}
      </p>
    </div>
  );

  return (
    <TopicLayout
      title="JavaScript Destructuring"
      steps={[
        "Destructuring allows unpacking values from arrays or properties from objects into variables.",
        "You can use object destructuring with { } for objects.",
        "You can use array destructuring with [ ] for arrays.",
        "Supports nested destructuring and default values.",
      ]}
      code={codeExample}
      result={result}
    />
  );
}
