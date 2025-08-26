"use client";
import React from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function SpreadRestPage() {
  // Spread example with arrays
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2]; // Spread merges arrays

  // Rest example in function
  function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
  }

  // Spread example with objects
  const obj1 = { name: "Alice", age: 25 };
  const obj2 = { city: "London", country: "UK" };
  const mergedObj = { ...obj1, ...obj2 };

  const codeExample = `// Spread with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread with Objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "London", country: "UK" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// { name: "Alice", age: 25, city: "London", country: "UK" }

// Rest in Function Parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1,2,3,4)); // 10

// Rest in Destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
`;

  const result = (
    <div>
      <p>
        <b>Spread Arrays:</b> {JSON.stringify(combined)}
      </p>
      <p>
        <b>Spread Objects:</b> {JSON.stringify(mergedObj)}
      </p>
      <p>
        <b>Sum with Rest:</b> {sum(1, 2, 3, 4)}
      </p>
    </div>
  );

  return (
    <TopicLayout
      title="Spread & Rest Operators"
      steps={[
        "Spread (`...`) expands elements of an array or object.",
        "Used to copy, merge, or pass arguments easily.",
        "Rest (`...`) collects multiple arguments into an array.",
        "Rest can also be used in destructuring to capture remaining values.",
      ]}
      code={codeExample}
      result={result}
    />
  );
}
