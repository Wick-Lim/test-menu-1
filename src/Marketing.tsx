import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import { FC } from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const basename = import.meta.env.MODE === "production" ? "/marketing" : undefined;

const Layout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tab = location.pathname.split("/")[1] || "";

  return (
    <>
      <Box display="flex" flexDirection="row" flex="1">
        <Box display="flex" flexDirection="column" width="120px" p="16px 0px">
          <Tabs
            orientation="vertical"
            value={tab}
            onChange={(_, v) => navigate(`/${v}`)}
            sx={{
              ".MuiTab-root": {
                minWidth: 0,
                minHeight: 32,
                p: 0,
              },
            }}
          >
            <Tab value="newsletter" label="뉴스레터" />
            <Tab value="promotion" label="프로모션" />
            <Tab value="statistics" label="통계" />
          </Tabs>
        </Box>
        <Divider orientation="vertical" />
        <Box display="flex" flexDirection="column" flex="1">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Navigate to="/newsletter" />} />
          <Route element={<Layout />}>
            <Route path="/newsletter" element={<div>newsletter</div>} />
            <Route path="/promotion" element={<div>promotion</div>} />
            <Route path="/statistics" element={<div>statistics</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

class XMarketing extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    frame.style.display = "flex";
    frame.style.flexDirection = "column";
    frame.style.flex = "1";
    shadow.appendChild(frame);

    const cache = createCache({
      key: "x-marketing",
      container: shadow,
    });

    const root = ReactDOM.createRoot(frame, { identifierPrefix: "marketing" });
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    );
  }
}

customElements.define("x-marketing", XMarketing);

export default App;
