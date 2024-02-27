import { useState } from "react"; // this is react hook
import "./App.css";
import { CORE_TOPICS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreTopic from "./components/CoreTopic.jsx";
import TabButton from "./components/TabButton.jsx";
import "./components/MenuStyles.css";

function App() {
  // you can use the useState hook to create state variables only in functional components and not in nested functions, loops, or conditions.
  // Rule 1: Only call hooks inside of Component Functions
  // Rule 2: Only call hooks on the top level

  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  // Breakdown of the above line:
  // const [counter, setCounter] = useState(0);
  // we can think of useState as a function that returns an array with two elements:
  // const [ currentState, stateUpdatingFunction ] = useState(initialState);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

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
        <section id="otherTopicsSection">
          <h2>Other Topics</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Topic 1")}>
              Topic 1
            </TabButton>
            <TabButton onSelect={() => handleSelect("Topic 2")}>
              Topic 2
            </TabButton>
            <TabButton onSelect={() => handleSelect("Topic 3")}>
              Topic 3
            </TabButton>
          </menu>
          <menu>{selectedTopic}</menu>
        </section>
      </main>
    </div>
  );
}

export default App;
