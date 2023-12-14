import { Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/inbound">
        <Routes>
          <Route
            path="/"
            element={<Typography variant="h1">Home</Typography>}
          />
          <Route
            path="/about"
            element={<Typography variant="h1">About</Typography>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
