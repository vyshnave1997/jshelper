"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Basic Class Example
// ----------------------
function BasicClassDemo() {
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  }

  const p = new Person("Alice");
  return <h3>{p.greet()}</h3>;
}

// ----------------------
// Class with Methods
// ----------------------
function MethodsClassDemo() {
  class Calculator {
    add(a, b) {
      return a + b;
    }
    multiply(a, b) {
      return a * b;
    }
  }

  const calc = new Calculator();
  return <h3>2 + 3 = {calc.add(2, 3)}, 4 × 5 = {calc.multiply(4, 5)}</h3>;
}

// ----------------------
// Inheritance Example
// ----------------------
function InheritanceClassDemo() {
  class Animal {
    speak() {
      return "This animal makes a sound.";
    }
  }

  class Dog extends Animal {
    speak() {
      return "The dog barks.";
    }
  }

  const d = new Dog();
  return <h3>{d.speak()}</h3>;
}

// ----------------------
// Static Methods
// ----------------------
function StaticClassDemo() {
  class MathHelper {
    static square(n) {
      return n * n;
    }
  }

  return <h3>Square of 6 = {MathHelper.square(6)}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function ClassesPage() {
  const [selectedExample, setSelectedExample] = useState("basic");

  const classExamples = {
    basic: {
      steps: [
        "Classes are templates for creating objects.",
        "They are defined using the `class` keyword.",
        "You can use a constructor method to initialize properties."
      ],
      code: `
// Defining a class
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
}

// Using the class
const p = new Person("Alice");
console.log(p.greet()); // Hello, my name is Alice
      `,
      result: <BasicClassDemo />
    },
    methods: {
      steps: [
        "Classes can contain multiple methods.",
        "Methods define behaviors for class objects.",
        "Example: A Calculator class with add and multiply methods."
      ],
      code: `
// Calculator class
class Calculator {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
}

// Using the class
const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.multiply(4, 5)); // 20
      `,
      result: <MethodsClassDemo />
    },
    inheritance: {
      steps: [
        "Classes can extend other classes using `extends`.",
        "The child class inherits methods and can override them.",
        "Example: Dog extends Animal."
      ],
      code: `
// Base class
class Animal {
  speak() {
    return "This animal makes a sound.";
  }
}

// Child class
class Dog extends Animal {
  speak() {
    return "The dog barks.";
  }
}

// Using the class
const d = new Dog();
console.log(d.speak()); // The dog barks.
      `,
      result: <InheritanceClassDemo />
    },
    static: {
      steps: [
        "Static methods belong to the class, not the object.",
        "They are called using the class name directly.",
        "Example: A MathHelper class with a static square method."
      ],
      code: `
// Class with static method
class MathHelper {
  static square(n) {
    return n * n;
  }
}

// Using the static method
console.log(MathHelper.square(6)); // 36
      `,
      result: <StaticClassDemo />
    }
  };

  const { steps, code, result } = classExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Classes in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="basic">Basic Class</option>
        <option value="methods">Class with Methods</option>
        <option value="inheritance">Inheritance</option>
        <option value="static">Static Methods</option>
      </select>
      <TopicLayout title={selectedExample} steps={steps} code={code} result={result} />
    </div>
  );
}
