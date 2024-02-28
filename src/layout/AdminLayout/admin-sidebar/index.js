import { Box } from "@mui/material";
import Logo from "./Logo";
import AdminMenu from "./admin-menu";

const AdminSidebar = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#232323",
        height: {
          md: "100%",
        },
      }}
    >
      <Logo />
      <AdminMenu />
    </Box>
  );
};

export default AdminSidebar;
