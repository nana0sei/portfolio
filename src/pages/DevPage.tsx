import { Text, VStack, Image, Center } from "@chakra-ui/react";
import DevGrid from "../components/DevGrid";
import devtitle from "../assets/devtitle.png";

const DevPage = () => {
  return (
    <>
      <Center>
        <Image src={devtitle} width="400px" />
      </Center>

      <VStack spacing={2} align="flex-start">
        <Text>this is a list of my front end development projects.</Text>
        <DevGrid />
      </VStack>
    </>
  );
};

export default DevPage;
