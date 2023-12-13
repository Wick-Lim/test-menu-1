import { FC, lazy } from 'react';

const Container = lazy(() => import('@mui/material/Container'));
const Box = lazy(() => import('@mui/material/Box'));
const Typography = lazy(() => import('@mui/material/Typography'));

interface App extends FC {
  menus: any[];
}

const MyApp: App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Material UI Vite.js example in TypeScript
        </Typography>
      </Box>
    </Container>
  );
}

MyApp.menus = [
  "appbar", "button", "card", "checkbox", "dialog", "drawer", "form", "grid", "icon", "input", "list", "menu", "paper", "progress", "select", "slider", "snackbar", "stepper", "table", "tabs", "tooltip", "typography"
]

export default MyApp;
