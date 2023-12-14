import { ThemeProvider, Typography } from "@mui/material";
import { FC } from "react";
import theme from "./theme";
// import "./App.css";

const MyApp: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" component="h1" gutterBottom>
        app content
      </Typography>
    </ThemeProvider>
  );
};

export default MyApp;
