import { HStack, Image, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoW from "../assets/logoW.png";
import logoB from "../assets/logoB.png";

const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={colorMode === "dark" ? logoW : logoB}
        boxSize="60px"
        objectFit="cover"
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
