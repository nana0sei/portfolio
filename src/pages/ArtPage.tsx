import { Image, Center, Box } from "@chakra-ui/react";
import arttitle from "../assets/arttitle.png";
import ArtGrid from "../components/ArtGrid";

const ArtPage = () => {
  return (
    <Box h="calc(100vh)" alignContent="center">
      <Center pb={2}>
        <Image src={arttitle} width="300px" />
      </Center>

      <ArtGrid />
    </Box>
  );
};

export default ArtPage;
