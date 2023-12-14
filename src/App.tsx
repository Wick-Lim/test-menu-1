import { FC } from 'react';
import loadable from '@loadable/component';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

const Container = loadable(() => import('@mui/material/Container'));
const Box = loadable(() => import('@mui/material/Box'));
const Typography = loadable(() => import('@mui/material/Typography'));

interface App extends FC {
  menus: any[];
}

const MyApp: App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Material UI Vite.js example in TypeScript
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

MyApp.menus = [
  "appbar", "button", "card", "checkbox", "dialog", "drawer", "form", "grid", "icon", "input", "list", "menu", "paper", "progress", "select", "slider", "snackbar", "stepper", "table", "tabs", "tooltip", "typography"
]

export default MyApp;
