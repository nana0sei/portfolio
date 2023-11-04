import { VStack, Image, Text } from "@chakra-ui/react";
import arttitle from "../assets/arttitle.png";
import ArtGrid from "../components/ArtGrid";

const ArtPage = () => {
  return (
    <>
      <VStack spacing={2} align="flex-start">
        <Image src={arttitle} width="400px" />
        <Text>a collection of my commissioned and personal art.</Text>
        <ArtGrid />
      </VStack>
    </>
  );
};

export default ArtPage;
