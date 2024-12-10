import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const { colorMode } = useColorMode();

  const year = new Date().getFullYear();

  return (
    <Box
      pos="fixed"
      bottom={0}
      w="full"
      zIndex={10}
      bg={colorMode === "dark" ? "gray.800" : "white"}
    >
      <Box pos="relative" px="5" py={5}>
        <Divider />
        <AbsoluteCenter px="4" bg={colorMode === "dark" ? "gray.800" : "white"}>
          © {year} Nana Osei
        </AbsoluteCenter>
      </Box>
      <Center>
        <HStack spacing={2} pb={2}>
          <Link
            to="mailto:frimpongnanao@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail size="30px" />
          </Link>

          <Link
            to="https://github.com/nana0sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="25px" />
          </Link>

          <Link
            to="https://instagram.com/nana0sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="25px" />
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
