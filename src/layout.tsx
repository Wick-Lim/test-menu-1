import { Help, Home } from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tab = location.pathname.split("/")[1] || "";

  return (
    <>
      <Box display="flex" flexDirection="row" flex="1">
        <Box display="flex" flexDirection="column" width="64px">
          <Tabs
            orientation="vertical"
            value={tab}
            onChange={(_, v) => navigate(`/${v}`)}
          >
            <Tab value="" icon={<Home />} sx={{ minWidth: 0, p: 0 }} />
            <Tab value="about" icon={<Help />} sx={{ minWidth: 0, p: 0 }} />
          </Tabs>
        </Box>
        <Box display="flex" flexDirection="column" flex="1">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
