import { VStack, Image, Text } from "@chakra-ui/react";
import arttitle from "../assets/arttitle.png";

const ArtPage = () => {
  return (
    <>
      <VStack spacing={2} align="flex-start">
        <Image src={arttitle} width="400px" />
        <Text>a collection of my commissioned and personal art.</Text>
      </VStack>
    </>
  );
};

export default ArtPage;
