import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box, Tabs, Tab, Divider } from "@mui/material";
import { FC } from "react";

const basename = import.meta.env.MODE === "production" ? "/follow-up" : undefined;

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
            <Tab value="claim" label="클레임" />
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
          <Route path="/" element={<Navigate to="/claim" />} />
          <Route element={<Layout />}>
            <Route path="/claim" element={<div>claim</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

class XFollowUp extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    shadow.appendChild(frame);

    const cache = createCache({
      key: "x-follow-up",
      container: shadow,
    });

    const root = ReactDOM.createRoot(frame, { identifierPrefix: "follow-up" });
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    );
  }
}

customElements.define("x-follow-up", XFollowUp);

export default App;
