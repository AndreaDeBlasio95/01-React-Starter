import CoreTopic from "./CoreTopic.jsx";
import { CORE_TOPICS } from "../data";

export default function CoreTopics() {
  return (
    <section id="core-topics">
      <h2>Main Topics</h2>
      <ul>
        {CORE_TOPICS.map((topic) => (
          <CoreTopic key={topic.title} {...topic} />
        ))}
      </ul>
    </section>
  );
}
