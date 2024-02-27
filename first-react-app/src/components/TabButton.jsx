// every custom component receives a props object as its first argument
// children is a special prop that includes any elements nested between the
// opening and closing tags when invoking a component

export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}