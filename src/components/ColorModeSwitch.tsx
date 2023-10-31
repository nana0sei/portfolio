import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          colorScheme="blue"
          isChecked={colorMode === "light"}
          onChange={toggleColorMode}
        />
        {colorMode === "light" ? <BsSun /> : <BsFillMoonFill />}
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
