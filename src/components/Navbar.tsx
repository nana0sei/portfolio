import { HStack, Image, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoW from "../assets/logoW.png";
import logoB from "../assets/logoB.png";
import { Link } from "react-router-dom";

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
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
