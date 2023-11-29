import { Box, HStack, Image, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoW from "../assets/logoW.png";
import logoB from "../assets/logoB.png";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack
      boxSize="60px"
      justifyContent="space-between"
      padding="10px"
      pos="fixed"
      w="100%"
      top={0}
      zIndex={9999}
      bg={colorMode === "dark" ? "gray.800" : "white"}
    >
      <Link to="/">
        <Image
          src={colorMode === "dark" ? logoW : logoB}
          boxSize="45px"
          objectFit="cover"
        />
      </Link>
      <Box>
        <HStack>
          <Link
            to="https://github.com/nana0sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="20px" />
          </Link>
          <Link
            to="https://x.com/nana0sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size="20px" />
          </Link>
          <ColorModeSwitch />
        </HStack>
      </Box>
    </HStack>
  );
};

export default Navbar;
