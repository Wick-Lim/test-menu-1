import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const basename = import.meta.env.MODE === "production" ? "/inbound" : undefined;

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Navigate to="/call" />} />
          <Route element={<Layout />}>
            <Route
              path="/call"
              element={<div>call</div>}
            />
            <Route
              path="/online"
              element={<div>online</div>}
            />
            <Route
              path="/statistics"
              element={<div>statistics</div>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
