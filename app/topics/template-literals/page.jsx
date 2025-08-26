"use client";
import React from "react";
import TopicLayout from "../../../components/TopicLayout";

export default function TemplateLiteralsPage() {
  const name = "John";
  const age = 25;
  const city = "New York";

  const codeExample = `const name = "John";
const age = 25;
const city = "New York";

console.log(\`Hello, my name is \${name}. I am \${age} years old and I live in \${city}.\`);
// "Hello, my name is John. I am 25 years old and I live in New York."
`;

  const result = `Hello, my name is ${name}. I am ${age} years old and I live in ${city}.`;

  return (
    <TopicLayout
      title="JavaScript Template Literals"
      steps={[
        "Template literals use backticks (`) instead of quotes.",
        "They allow string interpolation with ${} syntax.",
        "They support multi-line strings without concatenation.",
      ]}
      code={codeExample}
      result={<p>{result}</p>}
    />
  );
}
