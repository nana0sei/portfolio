import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Box pos="relative" p="10">
        <Divider />
        <AbsoluteCenter px="4">© {year} Nana Osei</AbsoluteCenter>
      </Box>
    </>
  );
};

export default Footer;
