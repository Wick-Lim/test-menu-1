import { Theme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

interface CustomTheme extends Theme {
  colors: {
    primary: string;
  };
}

const Test = styled.h1(({ theme }) => {
  const customTheme = theme as CustomTheme;
  const color = customTheme.colors.primary

  return {
    color: color,
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={{
        colors: {
          primary: "blue",
        },
      }}>
        <Test>Test</Test>
      </ThemeProvider>
    </>
  );
}

export default App;
