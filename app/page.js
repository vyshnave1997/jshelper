import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
       
        <h1 className={styles.title}>Welcome to JavaScript Documentation Hub 🚀</h1>
        <p className={styles.subtitle}>
          Master JavaScript — from fundamentals to advanced interview prep.
        </p>
      </section>

      {/* News Section */}
      <section>
        <h2 className={styles.sectionTitle}>📢 Latest News & Updates</h2>
        <ul className={styles.cardList}>
          <li className={styles.card}>
            <span className={styles.highlight}>ES2024</span> – New methods like <code>Object.groupBy()</code>.
          </li>
          <li className={styles.card}>
            <span className={styles.highlight}>TC39 Proposals</span> – Exciting upcoming features.
          </li>
          <li className={styles.card}>
            <span className={styles.highlight}>JavaScript in AI</span> – Growing use in ML & AI libraries.
          </li>
        </ul>
      </section>

      {/* Documentation */}
      <section>
        <h2 className={styles.sectionTitle}>📚 Core Documentation</h2>
        <div className={styles.grid}>
          <div className={styles.gridCard}>
            <h3>Fundamentals</h3>
            <ul>
              <li>Variables (var, let, const)</li>
              <li>Functions & Scope</li>
              <li>Hoisting</li>
              <li>Closures</li>
              <li>This Keyword</li>
            </ul>
          </div>
          <div className={styles.gridCard}>
            <h3>Advanced Concepts</h3>
            <ul>
              <li>Promises & Async/Await</li>
              <li>Event Loop & Concurrency</li>
              <li>Prototype & Inheritance</li>
              <li>Modules (Import/Export)</li>
              <li>Regular Expressions</li>
            </ul>
          </div>
          <div className={styles.gridCard}>
            <h3>Browser APIs</h3>
            <ul>
              <li>DOM Manipulation</li>
              <li>Events</li>
              <li>LocalStorage & SessionStorage</li>
              <li>Fetch API</li>
              <li>Web Workers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interview Prep */}
      <section>
        <h2 className={styles.sectionTitle}>💡 JavaScript Interview Questions</h2>
        <div className={styles.grid3}>
          <div className={styles.topicCard}>
            <h3>Beginner</h3>
            <ul>
              <li>
                <strong>What is Hoisting?</strong>
                <p className={styles.answer}>
                  Hoisting is JavaScript’s behavior of moving variable and function
                  declarations to the top of their scope before code execution.
                </p>
              </li>
              <li>
                <strong>Difference between == and ===?</strong>
                <p className={styles.answer}>
                  <code>==</code> compares values after type coercion, 
                  while <code>===</code> compares both value and type.
                </p>
              </li>
              <li>
                <strong>Explain closures with example.</strong>
                <p className={styles.answer}>
                  A closure is when a function remembers variables from its
                  outer scope even after that scope has returned.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.topicCard}>
            <h3>Intermediate</h3>
            <ul>
              <li>
                <strong>Event loop & concurrency model?</strong>
                <p className={styles.answer}>
                  The event loop lets JavaScript handle asynchronous operations
                  by putting callbacks in a queue and executing them one by one.
                </p>
              </li>
              <li>
                <strong>Difference between var, let, const?</strong>
                <p className={styles.answer}>
                  <code>var</code> is function-scoped, <code>let</code> and <code>const</code> 
                  are block-scoped. <code>const</code> cannot be reassigned.
                </p>
              </li>
             <li>
  <strong>What is &quot;this&quot; keyword behavior?</strong>
  <p className={styles.answer}>
    <code>this</code> refers to the object that is calling the function.
    In strict mode/global scope it is <code>undefined</code>.
  </p>
</li>

            </ul>
          </div>
          <div className={styles.topicCard}>
            <h3>Advanced</h3>
            <ul>
              <li>
                <strong>Explain prototypical inheritance.</strong>
                <p className={styles.answer}>
                  Objects in JavaScript inherit properties from their prototype, 
                  forming a prototype chain.
                </p>
              </li>
              <li>
                <strong>Difference between call, apply, and bind?</strong>
                <p className={styles.answer}>
                  All set <code>this</code> explicitly. <code>call</code> takes arguments separately, 
                  <code>apply</code> takes them as an array, 
                  <code>bind</code> returns a new function.
                </p>
              </li>
              <li>
                <strong>How does async/await work under the hood?</strong>
                <p className={styles.answer}>
                  <code>async</code> functions always return a promise. 
                  <code>await</code> pauses execution until the promise settles, 
                  making async code look synchronous.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deep Topics */}
      <section>
        <h2 className={styles.sectionTitle}>🔎 Deep Dive Topics</h2>
        <div className={styles.grid3}>
          <div className={styles.topicCard}>
            <h3>Event Loop</h3>
            <p>Understand how JavaScript handles concurrency and async code.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>Memory Management</h3>
            <p>Learn about garbage collection, leaks, and optimization.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>ES6+ Features</h3>
            <p>Master modern syntax: destructuring, spread, rest, arrow functions.</p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className={styles.sectionTitle}>🚀 Learning Resources</h2>
        <ul className={styles.links}>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              MDN JavaScript Docs
            </a>
          </li>
          <li>
            <a href="https://tc39.es/" target="_blank">
              TC39 Proposals
            </a>
          </li>
          <li>
            <a href="https://javascript.info" target="_blank">
              JavaScript.info
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
