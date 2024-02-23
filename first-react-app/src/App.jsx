import "./App.css";
import { CORE_TOPICS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreTopic from "./components/CoreTopic.jsx";

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
