import loadable from "@loadable/component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const Home = loadable(() => import("./pages/home"));
const About = loadable(() => import("./pages/about"));

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
              element={<Home />}
            />
            <Route
              path="/online"
              element={<About />}
            />
            <Route
              path="/statistics"
              element={<About />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
