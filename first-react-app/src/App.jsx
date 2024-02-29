import { useState } from "react"; // this is react hook
import "./App.css";
import { CORE_TOPICS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreTopic from "./components/CoreTopic.jsx";
import TabButton from "./components/TabButton.jsx";
import "./components/MenuStyles.css";
import { EXAMPLES } from "./data";

function App() {
  // you can use the useState hook to create state variables only in functional components and not in nested functions, loops, or conditions.
  // Rule 1: Only call hooks inside of Component Functions
  // Rule 2: Only call hooks on the top level

  const [selectedTopic, setSelectedTopic] = useState();
  // Breakdown of the above line:
  // const [counter, setCounter] = useState(0);
  // we can think of useState as a function that returns an array with two elements:
  // const [ currentState, stateUpdatingFunction ] = useState(initialState);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-topics">
          <h2>Main Topics</h2>
          <ul>
            {CORE_TOPICS.map((topic) => (
              <CoreTopic key={topic.title} {...topic} />
            ))}
          </ul>
        </section>
        <section id="otherTopicsSection">
          <h2>Other Topics</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "topic_1"}
              onSelect={() => handleSelect("topic_1")}
            >
              Topic 1
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "topic_2"}
              onSelect={() => handleSelect("topic_2")}
            >
              Topic 2
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "topic_3"}
              onSelect={() => handleSelect("topic_3")}
            >
              Topic 3
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
