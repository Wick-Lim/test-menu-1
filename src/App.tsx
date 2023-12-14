import styled from "@emotion/styled";

const Test = styled.h1(({ theme }) => ({
  color: 'red',
}));

function App() {
  return (
    <>
      <Test>Test</Test>
    </>
  );
}

export default App;
