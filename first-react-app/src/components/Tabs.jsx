export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // ButtonsContainer should starts with a capital letter to be used as a component
  // ButtonsContainer have a default value of "menu" and can be overriden by the parent component
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
