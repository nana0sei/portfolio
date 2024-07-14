import { HStack, Image, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoW from "../assets/logoW.png";
import logoB from "../assets/logoB.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack
      boxSize="60px"
      justifyContent="space-between"
      padding="10px"
      pos="fixed"
      w="100%"
      zIndex={10}
      top={0}
      bg={colorMode === "dark" ? "gray.800" : "white"}
    >
      <Link to="/">
        <Image
          src={colorMode === "dark" ? logoW : logoB}
          boxSize="45px"
          objectFit="cover"
        />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
