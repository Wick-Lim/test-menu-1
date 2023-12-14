import { Typography } from "@mui/material";
import { FC } from "react";
// import "./App.css";

interface App extends FC {
  menus: any[];
}

const MyApp: App = () => {
  return <Typography>Material UI Vite.js example in TypeScript</Typography>;
};

MyApp.menus = [
  "appbar",
  "button",
  "card",
  "checkbox",
  "dialog",
  "drawer",
  "form",
  "grid",
  "icon",
  "input",
  "list",
  "menu",
  "paper",
  "progress",
  "select",
  "slider",
  "snackbar",
  "stepper",
  "table",
  "tabs",
  "tooltip",
  "typography",
];

export default MyApp;
