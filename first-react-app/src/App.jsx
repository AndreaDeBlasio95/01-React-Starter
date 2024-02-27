import "./App.css";
import { CORE_TOPICS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreTopic from "./components/CoreTopic.jsx";
import TabButton from "./components/TabButton.jsx";
import "./components/MenuStyles.css";

function App() {
  function handleSelect() {
    console.log("Hello, selected!");
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
            <TabButton onSelect={handleSelect}>Topic 1</TabButton>
            <TabButton onSelect={handleSelect}>Topic 2</TabButton>
            <TabButton onSelect={handleSelect}>Topic 3</TabButton>
          </menu>
          <menu>Dynamic Content</menu>
        </section>
      </main>
    </div>
  );
}

export default App;
