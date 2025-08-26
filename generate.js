const fs = require("fs");
const path = require("path");

// all your topics
const topics = [
  "variables",
  "data-types",
  "operators",
  "control-flow",
  "loops",
  "functions",
  "arrow-functions",
  "arrays",
  "objects",
  "strings",
  "template-literals",
  "destructuring",
  "spread-rest",
  "modules",
  "classes",
  "inheritance",
  "promises",
  "async-await",
  "error-handling",
  "events",
  "dom",
  "es6",
  "closures",
  "scope",
  "hoisting",
  "this",
  "call-apply-bind",
  "prototype",
  "map-set",
  "json",
  "storage",
  "event-loop",
  "regex",
];

const basePath = path.join(__dirname, "app/topics");

topics.forEach((topic) => {
  const dir = path.join(basePath, topic);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, "page.jsx");

  if (!fs.existsSync(filePath)) {
    const content = `export default function Page() {
  return (
    <div>
      <h1>${topic.replace(/-/g, " ").toUpperCase()}</h1>
      <p>Steps, explanation, and code examples about ${topic} will go here.</p>
      <pre>{\`// Example code\`}</pre>
      <div>✅ Result here</div>
    </div>
  );
}`;
    fs.writeFileSync(filePath, content, "utf8");
  }
});

console.log("✅ Topics generated in app/topics/");
