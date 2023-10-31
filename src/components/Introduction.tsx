import { Heading, VStack, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <VStack alignContent="center" spacing={5}>
        <Heading size="3xl" textAlign="center">
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
