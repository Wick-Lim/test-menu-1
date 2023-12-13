import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FC } from 'react';

interface App extends FC {
  menus: any[];
}

const MyApp: App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
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
