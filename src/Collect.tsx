import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box, Tabs, Tab, Divider } from "@mui/material";
import { FC } from "react";

const basename = import.meta.env.MODE === "production" ? "/collect" : undefined;

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
            <Tab value="office" label="사무실" />
            <Tab value="retail" label="리테일" />
            <Tab value="warehouse" label="물류창고" />
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
          <Route path="/" element={<Navigate to="/office" />} />
          <Route element={<Layout />}>
            <Route path="/office" element={<div>office</div>} />
            <Route path="/retail" element={<div>retail</div>} />
            <Route path="/warehouse" element={<div>warehouse</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

class XCollect extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    frame.style.display = "flex";
    frame.style.flexDirection = "column";
    frame.style.flex = "1";
    shadow.appendChild(frame);

    const cache = createCache({
      key: "x-collect",
      container: shadow,
    });

    const root = ReactDOM.createRoot(frame, { identifierPrefix: "collect" });
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    );
  }
}

customElements.define("x-collect", XCollect);

export default App;
