import { Image, SimpleGrid } from "@chakra-ui/react";
import images from "../data/images";
import HoverContainer from "./HoverContainer";

const ArtGrid = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {images.data.map((image, index) => (
          <HoverContainer key={index}>
            <Image src={image.image} key={index} />
          </HoverContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArtGrid;
