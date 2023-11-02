import { Box, HStack, Image, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoW from "../assets/logoW.png";
import logoB from "../assets/logoB.png";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image
          src={colorMode === "dark" ? logoW : logoB}
          boxSize="60px"
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
            to="https://instagram.com/nana0sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size="20px" />
          </Link>
          <ColorModeSwitch />
        </HStack>
      </Box>
    </HStack>
  );
};

export default Navbar;
