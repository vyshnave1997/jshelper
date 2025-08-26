"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function StringsPage() {
  const [selected, setSelected] = useState("toUpperCase");

  const text = "Hello World";

  const examples = {
    toUpperCase: {
      desc: "Converts the string to uppercase letters.",
      code: `const text = "Hello World";
console.log(text.toUpperCase()); // "HELLO WORLD"`,
      result: text.toUpperCase(),
    },
    toLowerCase: {
      desc: "Converts the string to lowercase letters.",
      code: `console.log(text.toLowerCase()); // "hello world"`,
      result: text.toLowerCase(),
    },
    slice: {
      desc: "Extracts part of a string and returns it as a new string.",
      code: `console.log(text.slice(0,5)); // "Hello"`,
      result: text.slice(0, 5),
    },
    substring: {
      desc: "Similar to slice, but does not allow negative indexes.",
      code: `console.log(text.substring(0,5)); // "Hello"`,
      result: text.substring(0, 5),
    },
    replace: {
      desc: "Replaces part of the string with another value.",
      code: `console.log(text.replace("World","JS")); // "Hello JS"`,
      result: text.replace("World", "JS"),
    },
    split: {
      desc: "Splits a string into an array based on a separator.",
      code: `console.log(text.split(" ")); // ["Hello","World"]`,
      result: JSON.stringify(text.split(" ")),
    },
    trim: {
      desc: "Removes whitespace from both ends of the string.",
      code: `const str = "   Hello JS   ";
console.log(str.trim()); // "Hello JS"`,
      result: "   Hello JS   ".trim(),
    },
    includes: {
      desc: "Checks if the string contains a substring.",
      code: `console.log(text.includes("World")); // true`,
      result: text.includes("World").toString(),
    },
    charAt: {
      desc: "Returns the character at a specified index.",
      code: `console.log(text.charAt(0)); // "H"`,
      result: text.charAt(0),
    },
    indexOf: {
      desc: "Returns the first index of a substring, or -1 if not found.",
      code: `console.log(text.indexOf("World")); // 6`,
      result: text.indexOf("World").toString(),
    },
  };

  return (
    <TopicLayout
      title="JavaScript Strings"
      steps={[
        "Strings are sequences of characters.",
        "They support many built-in methods for manipulation.",
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
