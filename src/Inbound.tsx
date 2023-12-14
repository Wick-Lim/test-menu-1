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

const basename = import.meta.env.MODE === "production" ? "/inbound" : undefined;

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
            <Tab value="call" label="전화문의" iconPosition="start" />
            <Tab value="online" label="온라인문의" iconPosition="start" />
            <Tab value="statistics" label="통계" iconPosition="start" />
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
          <Route path="/" element={<Navigate to="/call" />} />
          <Route element={<Layout />}>
            <Route path="/call" element={<div>call</div>} />
            <Route path="/online" element={<div>online</div>} />
            <Route path="/statistics" element={<div>statistics</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

class XInbound extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    frame.style.display = "flex";
    frame.style.flexDirection = "column";
    frame.style.flex = "1";
    shadow.appendChild(frame);

    const cache = createCache({
      key: "x-inbound",
      container: shadow,
    });

    const root = ReactDOM.createRoot(frame, { identifierPrefix: "inbound" });
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    );
  }
}

customElements.define("x-inbound", XInbound);

export default App;
