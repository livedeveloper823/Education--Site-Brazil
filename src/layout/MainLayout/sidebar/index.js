import { Box } from "@mui/material";
import Logo from "./Logo";
import Menu from "./menu-item";

const Sidebar = () => {
  return (
    <Box sx={{
      backgroundColor: "#232323",
      height: {
        md: "100%",
      },
    }}>
      <Logo />
      <Menu />
    </Box>
  );
};

export default Sidebar;
