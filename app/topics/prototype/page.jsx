"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Prototype Demo
// ----------------------
function PrototypeDemo() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    return `Hello, my name is ${this.name}`;
  };

  const p1 = new Person("Alice");
  return <p>{p1.sayHello()}</p>;
}

// ----------------------
// Prototypical Inheritance Demo
// ----------------------
function PrototypicalInheritanceDemo() {
  function Animal(type) {
    this.type = type;
  }

  Animal.prototype.eat = function () {
    return `${this.type} is eating`;
  };

  function Dog(name) {
    this.name = name;
  }

  // Inherit from Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  Dog.prototype.bark = function () {
    return `${this.name} is barking`;
  };

  const d1 = new Dog("Buddy");
  d1.type = "Dog";

  return (
    <div>
      <p>{d1.eat()}</p>
      <p>{d1.bark()}</p>
    </div>
  );
}

// ----------------------
// Class Syntax (Sugar over Prototype)
// ----------------------
function ClassInheritanceDemo() {
  class Animal {
    constructor(type) {
      this.type = type;
    }
    eat() {
      return `${this.type} is eating`;
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super("Dog");
      this.name = name;
    }
    bark() {
      return `${this.name} is barking`;
    }
  }

  const dog = new Dog("Charlie");
  return (
    <div>
      <p>{dog.eat()}</p>
      <p>{dog.bark()}</p>
    </div>
  );
}

// ----------------------
// Page Component
// ----------------------
export default function PrototypeInheritancePage() {
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      steps: [
        "Every JavaScript object has an internal link to another object called its **prototype**.",
        "A prototype is also an object, and it can have its own prototype.",
        "This chain of objects is called the **prototype chain**.",
        "Prototypical inheritance means objects can inherit properties and methods from other objects via their prototype."
      ],
      code: `
// Example: Simple prototype chain
const obj = {};
console.log(obj.__proto__); // Object.prototype
console.log(Object.prototype.__proto__); // null (end of chain)
      `,
      result: (
        <p>
          Objects in JavaScript are linked through the{" "}
          <b>prototype chain</b>.
        </p>
      )
    },
    prototype: {
      steps: [
        "Functions in JavaScript automatically have a **prototype** property.",
        "Methods added to `Function.prototype` are shared by all instances.",
        "This saves memory and allows reuse."
      ],
      code: `
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return "Hello, my name is " + this.name;
};

const p1 = new Person("Alice");
console.log(p1.sayHello()); // Hello, my name is Alice
      `,
      result: <PrototypeDemo />
    },
    inheritance: {
      steps: [
        "One constructor function can **inherit** from another using `Object.create`.",
        "Set `Child.prototype = Object.create(Parent.prototype)`.",
        "Then reset `Child.prototype.constructor = Child` to keep constructor reference intact."
      ],
      code: `
function Animal(type) {
  this.type = type;
}
Animal.prototype.eat = function () {
  return this.type + " is eating";
};

function Dog(name) {
  this.name = name;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return this.name + " is barking";
};

const d1 = new Dog("Buddy");
d1.type = "Dog";
console.log(d1.eat());  // Dog is eating
console.log(d1.bark()); // Buddy is barking
      `,
      result: <PrototypicalInheritanceDemo />
    },
    class: {
      steps: [
        "ES6 introduced the `class` syntax which is syntactic sugar over prototypes.",
        "`extends` keyword allows one class to inherit from another.",
        "`super()` calls the parent constructor."
      ],
      code: `
class Animal {
  constructor(type) {
    this.type = type;
  }
  eat() {
    return this.type + " is eating";
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog");
    this.name = name;
  }
  bark() {
    return this.name + " is barking";
  }
}

const dog = new Dog("Charlie");
console.log(dog.eat());  // Dog is eating
console.log(dog.bark()); // Charlie is barking
      `,
      result: <ClassInheritanceDemo />
    }
  };

  const { steps, code, result } = examples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>
        Prototype & Prototypical Inheritance in JavaScript
      </h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="intro">Intro</option>
        <option value="prototype">Prototype</option>
        <option value="inheritance">Prototypical Inheritance</option>
        <option value="class">Class (ES6)</option>
      </select>
      <TopicLayout
        title={selectedExample}
        steps={steps}
        code={code}
        result={result}
      />
    </div>
  );
}
