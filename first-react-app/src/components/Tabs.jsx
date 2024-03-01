export default function Tabs({ children, buttons, ButtonsContainer }) {
  // Buttons should starts with a capital letter to be used as a component
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
