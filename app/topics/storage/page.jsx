"use client";
import React, { useState, useEffect } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// LocalStorage Demo
// ----------------------
function LocalStorageDemo() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) setName(savedName);
  }, []);

  const saveName = () => {
    localStorage.setItem("username", "Alice");
    setName("Alice");
  };

  const clearName = () => {
    localStorage.removeItem("username");
    setName("");
  };

  return (
    <div>
      <p>Stored Name: {name || "Nothing Saved"}</p>
      <button onClick={saveName} style={{ marginRight: "0.5rem" }}>
        Save "Alice"
      </button>
      <button onClick={clearName}>Clear</button>
    </div>
  );
}

// ----------------------
// SessionStorage Demo
// ----------------------
function SessionStorageDemo() {
  const [sessionValue, setSessionValue] = useState("");

  useEffect(() => {
    const savedValue = sessionStorage.getItem("sessionData");
    if (savedValue) setSessionValue(savedValue);
  }, []);

  const saveSession = () => {
    sessionStorage.setItem("sessionData", "Temporary Value");
    setSessionValue("Temporary Value");
  };

  const clearSession = () => {
    sessionStorage.removeItem("sessionData");
    setSessionValue("");
  };

  return (
    <div>
      <p>Session Value: {sessionValue || "Nothing Saved"}</p>
      <button onClick={saveSession} style={{ marginRight: "0.5rem" }}>
        Save Temp
      </button>
      <button onClick={clearSession}>Clear</button>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function StoragePage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      steps: [
        "**LocalStorage** → stores data with no expiration date (persists even after closing browser).",
        "**SessionStorage** → stores data only for the current tab session (cleared on tab/browser close).",
        "Both store data as key-value pairs (always strings)."
      ],
      code: `
// LocalStorage Example
localStorage.setItem("username", "Alice");
console.log(localStorage.getItem("username")); // Alice
localStorage.removeItem("username");

// SessionStorage Example
sessionStorage.setItem("sessionData", "12345");
console.log(sessionStorage.getItem("sessionData")); // 12345
sessionStorage.clear();
      `,
      result: (
        <p>
          LocalStorage → persists data | SessionStorage → cleared when tab closes
        </p>
      )
    },
    local: {
      steps: [
        "`localStorage.setItem(key, value)` → Save data",
        "`localStorage.getItem(key)` → Retrieve data",
        "`localStorage.removeItem(key)` → Remove specific key",
        "`localStorage.clear()` → Remove all keys"
      ],
      code: `
localStorage.setItem("username", "Alice");
console.log(localStorage.getItem("username")); // Alice
localStorage.removeItem("username");
      `,
      result: <LocalStorageDemo />
    },
    session: {
      steps: [
        "`sessionStorage.setItem(key, value)` → Save data",
        "`sessionStorage.getItem(key)` → Retrieve data",
        "`sessionStorage.removeItem(key)` → Remove specific key",
        "`sessionStorage.clear()` → Remove all keys"
      ],
      code: `
sessionStorage.setItem("sessionData", "12345");
console.log(sessionStorage.getItem("sessionData")); // 12345
sessionStorage.clear();
      `,
      result: <SessionStorageDemo />
    }
  };

  const { steps, code, result } = examples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>LocalStorage & SessionStorage</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">Intro</option>
        <option value="local">LocalStorage</option>
        <option value="session">SessionStorage</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
