import { Heading, VStack, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <VStack spacing={5} textAlign="center">
        <Heading size="3xl">
          <Text>
            hi, my name is{" "}
            <Text as="i" color="yellow.400">
              nana.
            </Text>{" "}
            i'm a{" "}
            <Text as="i" color="blue.400">
              front end developer{" "}
            </Text>{" "}
            and a{" "}
            <Text as="i" color="blue.400">
              digital artist.
            </Text>
          </Text>
        </Heading>

        <Text as="h1">
          click on any of the categories below to check out my work in each
          field!
        </Text>
      </VStack>
    </>
  );
};

export default Introduction;
