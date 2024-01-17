import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          © {year} Nana Osei
        </AbsoluteCenter>
      </Box>
    </>
  );
};

export default Footer;
