import { Heading, VStack, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <VStack spacing={5} textAlign="center">
        <Heading size="3xl">
          hi, my name is nana and i'm a front end developer and digital artist.
        </Heading>
        <Text>
          click on any of the categories below to check out my work in each
          field!
        </Text>
      </VStack>
    </>
  );
};

export default Introduction;
