import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box paddingX={5} paddingTop="70px">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
