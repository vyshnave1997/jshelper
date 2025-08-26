"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function ArraysPage() {
  const [selected, setSelected] = useState("map");

  const examples = {
    map: {
      desc: "map() creates a new array by applying a function to each element.",
      code: `const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2,4,6]`,
      result: [1, 2, 3].map((n) => n * 2).join(", "),
    },
    filter: {
      desc: "filter() returns elements that pass a condition.",
      code: `const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2,4]`,
      result: [1, 2, 3, 4].filter((n) => n % 2 === 0).join(", "),
    },
    find: {
      desc: "find() returns the first element that matches the condition.",
      code: `const nums = [1, 2, 3, 4];
const found = nums.find(n => n > 2);
console.log(found); // 3`,
      result: [1, 2, 3, 4].find((n) => n > 2),
    },
    join: {
      desc: "join() combines elements into a string.",
      code: `const fruits = ["apple","banana","cherry"];
console.log(fruits.join(", ")); // "apple, banana, cherry"`,
      result: ["apple", "banana", "cherry"].join(", "),
    },
    slice: {
      desc: "slice() copies part of the array without modifying it.",
      code: `const fruits = ["apple","banana","cherry"];
console.log(fruits.slice(1,2)); // ["banana"]`,
      result: ["apple", "banana", "cherry"].slice(1, 2).join(", "),
    },
    splice: {
      desc: "splice() changes the array by removing/replacing elements.",
      code: `const fruits = ["apple","banana","cherry"];
fruits.splice(1,1,"mango");
console.log(fruits); // ["apple","mango","cherry"]`,
      result: ["apple", "banana", "cherry"].splice(1, 1, "mango") || "Check console",
    },
  };

  return (
    <TopicLayout
      title="JavaScript Arrays"
      steps={[
        "Arrays store ordered collections of data.",
        "Use methods to transform or inspect them.",
      ]}
      code={examples[selected].code}
      result={
        <div>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            style={{ padding: "8px", marginBottom: "12px", borderRadius: "5px" }}
          >
            {Object.keys(examples).map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
          <p><b>Description:</b> {examples[selected].desc}</p>
          <p><b>Result:</b> {examples[selected].result.toString()}</p>
        </div>
      }
    />
  );
}
