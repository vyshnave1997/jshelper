"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function ObjectsPage() {
  const [selected, setSelected] = useState("keys");

  const person = { name: "Alice", age: 25, city: "NY" };

  const examples = {
    keys: {
      desc: "Object.keys() returns an array of property names.",
      code: `const person = { name: "Alice", age: 25, city: "NY" };
console.log(Object.keys(person)); // ["name","age","city"]`,
      result: Object.keys(person).join(", "),
    },
    values: {
      desc: "Object.values() returns an array of property values.",
      code: `console.log(Object.values(person)); // ["Alice",25,"NY"]`,
      result: Object.values(person).join(", "),
    },
    entries: {
      desc: "Object.entries() returns key-value pairs.",
      code: `console.log(Object.entries(person));
// [["name","Alice"],["age",25],["city","NY"]]`,
      result: JSON.stringify(Object.entries(person)),
    },
    assign: {
      desc: "Object.assign() copies properties into a new object.",
      code: `const clone = Object.assign({}, person, { country: "USA" });
console.log(clone);`,
      result: JSON.stringify(Object.assign({}, person, { country: "USA" })),
    },
    spread: {
      desc: "Spread operator `{...}` copies or merges objects.",
      code: `const spreadClone = { ...person, hobby: "Reading" };
console.log(spreadClone);`,
      result: JSON.stringify({ ...person, hobby: "Reading" }),
    },
    fromEntries: {
      desc: "Object.fromEntries() builds an object from key-value pairs.",
      code: `const obj = Object.fromEntries([["x", 10], ["y", 20]]);
console.log(obj); // {x:10, y:20}`,
      result: JSON.stringify(Object.fromEntries([["x", 10], ["y", 20]])),
    },
  };

  return (
    <TopicLayout
      title="JavaScript Objects"
      steps={[
        "Objects store key-value pairs.",
        "Use methods to manipulate or inspect them.",
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
