import loadable from "@loadable/component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const Home = loadable(() => import("./pages/home"));
const About = loadable(() => import("./pages/about"));

const basename = import.meta.env.MODE === "production" ? "/inbound" : undefined;

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
