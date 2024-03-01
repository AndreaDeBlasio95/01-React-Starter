import { useState } from "react"; // this is react hook
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

// you can use the useState hook to create state variables only in functional components and not in nested functions, loops, or conditions.
// Rule 1: Only call hooks inside of Component Functions
// Rule 2: Only call hooks on the top level

export default function Example() {
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
    <Section title="Example" id="otherTopicsSection">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "topic_1"}
              onClick={() => handleSelect("topic_1")}
            >
              Topic 1
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "topic_2"}
              onClick={() => handleSelect("topic_2")}
            >
              Topic 2
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "topic_3"}
              onClick={() => handleSelect("topic_3")}
            >
              Topic 3
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
