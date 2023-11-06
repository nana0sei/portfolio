import { VStack, Image, Text, Center } from "@chakra-ui/react";
import arttitle from "../assets/arttitle.png";
import ArtGrid from "../components/ArtGrid";

const ArtPage = () => {
  return (
    <>
      <Center>
        <Image src={arttitle} width="400px" />
      </Center>

      <VStack spacing={2} align="flex-start">
        <Text>a collection of my commissioned and personal art.</Text>
        <ArtGrid />
      </VStack>
    </>
  );
};

export default ArtPage;
