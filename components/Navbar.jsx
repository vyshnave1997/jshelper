"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const topics = [
  { name: "Variables", path: "/topics/Variables" },
  { name: "Data Types", path: "/topics/data-types" },
  { name: "Operators", path: "/topics/operators" },
  { name: "Control Flow (if, switch)", path: "/topics/control-flow" },
  { name: "Loops (for, while, forEach)", path: "/topics/loops" },
  { name: "Functions", path: "/topics/functions" },
  { name: "Arrow Functions", path: "/topics/arrow-functions" },
  { name: "Arrays", path: "/topics/arrays" },
  { name: "Objects", path: "/topics/objects" },
  { name: "Strings", path: "/topics/strings" },
  { name: "Template Literals", path: "/topics/template-literals" },
  { name: "Destructuring", path: "/topics/destructuring" },
  { name: "Spread & Rest Operator", path: "/topics/spread-rest" },
  { name: "Modules (import/export)", path: "/topics/modules" },
  { name: "Classes", path: "/topics/classes" },
  { name: "Inheritance", path: "/topics/inheritance" },
  { name: "Promises", path: "/topics/promises" },
  { name: "Async / Await", path: "/topics/async-await" },
  { name: "Error Handling (try/catch)", path: "/topics/error-handling" },
  { name: "Events", path: "/topics/events" },
  { name: "DOM Manipulation", path: "/topics/dom" },
  { name: "ES6 Features", path: "/topics/es6" },
  { name: "Closures", path: "/topics/closures" },
  { name: "Scope (var, let, const)", path: "/topics/scope" },
  { name: "Hoisting", path: "/topics/hoisting" },
  { name: "this Keyword", path: "/topics/this" },
  { name: "Call, Apply, Bind", path: "/topics/call-apply-bind" },
  { name: "Prototype & Prototypal Inheritance", path: "/topics/prototype" },
  { name: "Map & Set", path: "/topics/map-set" },
  { name: "JSON", path: "/topics/json" },
  { name: "LocalStorage & SessionStorage", path: "/topics/storage" },
  { name: "Event Loop & Concurrency", path: "/topics/event-loop" },
  { name: "Regular Expressions (RegEx)", path: "/topics/regex" },
];


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
       <h2 className="sidebar-title">
        <Link href="/">javaScript helper</Link>
      </h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.path}>
            <Link
              href={topic.path}
              className={pathname === topic.path ? "active" : ""}
            >
              {topic.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}