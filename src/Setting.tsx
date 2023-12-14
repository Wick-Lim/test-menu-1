import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box, Tabs, Tab, Divider } from "@mui/material";
import { FC } from "react";

const basename = import.meta.env.MODE === "production" ? "/setting" : undefined;

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
            <Tab value="work" label="업무환경" />
            <Tab value="system" label="시스템환경" />
            <Tab value="property" label="매물환경" />
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
          <Route path="/" element={<Navigate to="/work" />} />
          <Route element={<Layout />}>
            <Route path="/work" element={<div>work</div>} />
            <Route path="/system" element={<div>system</div>} />
            <Route path="/property" element={<div>property</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

class XSetting extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    shadow.appendChild(frame);

    const cache = createCache({
      key: "x-setting",
      container: shadow,
    });

    const root = ReactDOM.createRoot(frame, { identifierPrefix: "setting" });
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    );
  }
}

customElements.define("x-setting", XSetting);

export default App;
