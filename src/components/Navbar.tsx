import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import nBlack from "../assets/nBlack.png";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={nBlack} boxSize="60px" objectFit="cover" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
