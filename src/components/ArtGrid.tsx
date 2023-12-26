import { Image, SimpleGrid } from "@chakra-ui/react";
import images from "../data/images";

const ArtGrid = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} py={2}>
        {images.data.map((image, index) => (
          <Image src={image.image} key={index} w="500px" />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArtGrid;
