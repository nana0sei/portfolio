import { Text, VStack, Image } from "@chakra-ui/react";
import DevGrid from "../components/DevGrid";
import devtitle from "../assets/devtitle.png";

const DevPage = () => {
  return (
    <>
      <VStack spacing={2} align="flex-start">
        <Image src={devtitle} width="400px" />
        <Text>
          this is a list of my front end development projects. i usually work
          with react and typescript.
        </Text>
        <DevGrid />
      </VStack>
    </>
  );
};

export default DevPage;
