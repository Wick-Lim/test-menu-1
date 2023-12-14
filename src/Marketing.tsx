import { Box, Tabs, Tab, Divider } from "@mui/material";
import { FC } from "react";
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

export default App;
