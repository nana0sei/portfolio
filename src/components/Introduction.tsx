import { Heading, VStack, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <VStack spacing={2} textAlign="center">
        <Heading size="3xl">
          i am working on a new version of this website
        </Heading>

        <Text as="h1">you can still check out my work on my socials!</Text>
        {/* <Heading size="3xl">
          <Text>
            hi, my name is{" "}
            <Text as="i" color="yellow.400">
              nana.
            </Text>{" "}
            i'm a{" "}
            <Text as="i" color="blue.400">
              software engineer{" "}
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
        </Text> */}
      </VStack>
    </>
  );
};

export default Introduction;
