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
        <Box display="flex" flexDirection="column" flex="1">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
