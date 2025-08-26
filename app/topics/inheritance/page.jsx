"use client";
import React, { useState } from "react";
import TopicLayout from "../../../components/TopicLayout";

// ----------------------
// Single Inheritance
// ----------------------
function SingleInheritanceDemo() {
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return `${this.name} makes a sound.`;
    }
  }

  class Dog extends Animal {
    speak() {
      return `${this.name} barks.`;
    }
  }

  const d = new Dog("Buddy");
  return <h3>{d.speak()}</h3>;
}

// ----------------------
// Multi-level Inheritance
// ----------------------
function MultiLevelInheritanceDemo() {
  class LivingBeing {
    live() {
      return "All living beings need food and water.";
    }
  }

  class Animal extends LivingBeing {
    speak() {
      return "This animal makes a sound.";
    }
  }

  class Cat extends Animal {
    speak() {
      return "The cat meows.";
    }
  }

  const c = new Cat();
  return (
    <div>
      <h3>{c.live()}</h3>
      <h3>{c.speak()}</h3>
    </div>
  );
}

// ----------------------
// Using super()
// ----------------------
function SuperDemo() {
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return `${this.name} makes a sound.`;
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // call parent constructor
      this.breed = breed;
    }
    speak() {
      return `${super.speak()} Specifically, ${this.name} the ${this.breed} barks.`;
    }
  }

  const d = new Dog("Rocky", "German Shepherd");
  return <h3>{d.speak()}</h3>;
}

// ----------------------
// Method Overriding
// ----------------------
function OverrideDemo() {
  class Animal {
    speak() {
      return "This animal makes a sound.";
    }
  }

  class Bird extends Animal {
    speak() {
      return "The bird chirps.";
    }
  }

  const b = new Bird();
  return <h3>{b.speak()}</h3>;
}

// ----------------------
// Page Component
// ----------------------
export default function InheritancePage() {
  const [selectedExample, setSelectedExample] = useState("single");

  const inheritanceExamples = {
    single: {
      steps: [
        "Inheritance allows a class to use properties and methods of another class.",
        "In JavaScript, use `extends` to create a subclass.",
        "Example: Dog inherits from Animal."
      ],
      code: `
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

// Child class
class Dog extends Animal {
  speak() {
    return \`\${this.name} barks.\`;
  }
}

const d = new Dog("Buddy");
console.log(d.speak()); // Buddy barks.
      `,
      result: <SingleInheritanceDemo />
    },
    multilevel: {
      steps: [
        "Inheritance can be multi-level (class extends a class that extends another).",
        "Each child inherits all properties and methods from its parent and ancestors.",
        "Example: Cat extends Animal, Animal extends LivingBeing."
      ],
      code: `
// Grandparent class
class LivingBeing {
  live() {
    return "All living beings need food and water.";
  }
}

// Parent class
class Animal extends LivingBeing {
  speak() {
    return "This animal makes a sound.";
  }
}

// Child class
class Cat extends Animal {
  speak() {
    return "The cat meows.";
  }
}

const c = new Cat();
console.log(c.live());  // All living beings need food and water.
console.log(c.speak()); // The cat meows.
      `,
      result: <MultiLevelInheritanceDemo />
    },
    superKeyword: {
      steps: [
        "`super` is used to call the parent class constructor or methods.",
        "Useful when extending and adding more properties.",
        "Example: Dog calls Animal's constructor and overrides `speak()`."
      ],
      code: `
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }
  speak() {
    return \`\${super.speak()} Specifically, \${this.name} the \${this.breed} barks.\`;
  }
}

const d = new Dog("Rocky", "German Shepherd");
console.log(d.speak());
// Rocky makes a sound. Specifically, Rocky the German Shepherd barks.
      `,
      result: <SuperDemo />
    },
    overriding: {
      steps: [
        "Child classes can override parent methods with their own implementations.",
        "This is called **method overriding**.",
        "Example: Bird overrides Animal's `speak()` method."
      ],
      code: `
// Parent class
class Animal {
  speak() {
    return "This animal makes a sound.";
  }
}

// Child class
class Bird extends Animal {
  speak() {
    return "The bird chirps.";
  }
}

const b = new Bird();
console.log(b.speak()); // The bird chirps.
      `,
      result: <OverrideDemo />
    }
  };

  const { steps, code, result } = inheritanceExamples[selectedExample];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Inheritance in JavaScript</h2>
      <select
        value={selectedExample}
        onChange={(e) => setSelectedExample(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        <option value="single">Single Inheritance</option>
        <option value="multilevel">Multi-level Inheritance</option>
        <option value="superKeyword">Using super()</option>
        <option value="overriding">Method Overriding</option>
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
