import "./App.css";
import Header from "./components/Header/Header.jsx";
import "./components/MenuStyles.css";
import CoreTopics from "./components/CoreTopics.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreTopics />
        <Examples />
      </main>
    </>
  );
}

export default App;
