import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Words we will use to describe React
const reactDescriptions = [
  "Fundamentals",
  "Crucial Concepts",
  "Advanced Topics",
];
// random index for the reactDescriptions array
function getRandomInt(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <h1>First React</h1>
      <p>This is the first react project!</p>
      <p>{description} - This is a dynamic value</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
