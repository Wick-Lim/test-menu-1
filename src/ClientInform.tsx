import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box, Tabs, Tab, Divider } from "@mui/material";
import { FC } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

const basename = import.meta.env.MODE === "production" ? "/client-inform" : undefined;

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
            <Tab value="client" label="거래처" />
            <Tab value="customer" label="고객" />
            <Tab value="target" label="타겟" />
            <Tab value="browse" label="외부정보 탐색" />
            <Tab value="inquiry" label="컨택통합조회" />
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
          <Route path="/" element={<Navigate to="/client" />} />
          <Route element={<Layout />}>
            <Route path="/client" element={<div>client</div>} />
            <Route path="/customer" element={<div>customer</div>} />
            <Route path="/target" element={<div>target</div>} />
            <Route path="/browse" element={<div>browse</div>} />
            <Route path="/inquiry" element={<div>inquiry</div>} />
            <Route path="/statistics" element={<div>statistics</div>} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

class XClientInform extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    frame.style.display = "flex";
    frame.style.flexDirection = "column";
    frame.style.flex = "1";
    shadow.appendChild(frame);

    const cache = createCache({
      key: "x-client-inform",
      container: shadow,
    });

    const root = ReactDOM.createRoot(frame, { identifierPrefix: "client-inform" });
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    );
  }
}

customElements.define("x-client-inform", XClientInform);
App.title = "고객정보관리";
export default App;
