import { ThemeProvider, Typography } from "@mui/material";
import { FC } from "react";
import theme from "./theme";
// import "./App.css";

const MyApp: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography color="primary">Material UI Vite.js example in TypeScript</Typography>
    </ThemeProvider>
  );
};

export default MyApp;
