import { Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const basename = import.meta.env.MODE === "production" ? "/inbound" : undefined;

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Typography variant="h1">Home</Typography>}
            />
            <Route
              path="/about"
              element={<Typography variant="h1">About</Typography>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
