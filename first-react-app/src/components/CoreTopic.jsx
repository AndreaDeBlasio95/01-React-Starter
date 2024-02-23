export default function CoreTopic(props) {
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
export default function CoreTopic({image, title,      description}) {
      return (
        <li>
          <h3>{title}</h3>
          <p>{description}</p>
          <img src={image} alt={title} />
        </li>
      );
    }
    */
