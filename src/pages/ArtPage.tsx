import { Image, Center } from "@chakra-ui/react";
import arttitle from "../assets/arttitle.png";
import ArtGrid from "../components/ArtGrid";

const ArtPage = () => {
  return (
    <>
      <Center pb={2}>
        <Image src={arttitle} width="300px" />
      </Center>

      <ArtGrid />
    </>
  );
};

export default ArtPage;
