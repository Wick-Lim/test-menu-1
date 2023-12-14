import styled from "@emotion/styled";

const Test = styled.h1(({ theme }) => ({
  color: (theme as any).colors?.primary,
}));

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
