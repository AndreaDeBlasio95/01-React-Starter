import { useState } from "react";
import reactLogo from "./assets/react-icon-280.png";
import "./App.css";
import { CORE_TOPICS } from "./data";

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
      <img src={reactLogo} alt="React Logo" />
      <h1>First React</h1>
      <p>This is the first react project!</p>
      <p>{description} - This is a dynamic value</p>
    </header>
  );
}

function CoreTopic(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </li>
  );
}
/*
Destructing 
function CoreTopic({image, title, description}) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
    </li>
  );
}
*/

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-topics">
          <h2>Main Topics</h2>
          <ul>
            <CoreTopic
              title={CORE_TOPICS[0].title}
              description={CORE_TOPICS[0].description}
              image={CORE_TOPICS[0].image}
            />
            <CoreTopic {...CORE_TOPICS[1]} />
            <CoreTopic {...CORE_TOPICS[2]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
