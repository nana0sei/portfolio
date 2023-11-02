import { Heading, Text, VStack } from "@chakra-ui/react";
import DevGrid from "../components/DevGrid";

const DevPage = () => {
  return (
    <>
      <VStack spacing={2} align="flex-start">
        <Heading size="2xl">front end projects</Heading>
        <Text>this is a list of my front end development projects.</Text>
        <DevGrid />
      </VStack>
    </>
  );
};

export default DevPage;
