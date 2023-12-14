import styled from "@emotion/styled";


const Test = styled.h1({
  color: 'red',
});

function App() {
  return (
    <>
      {/* <ThemeProvider theme={{
        colors: {
          primary: "blue",
        },
      }}> */}
        <Test>Test</Test>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
