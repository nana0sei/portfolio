import { SimpleGrid } from "@chakra-ui/react";
import images from "../data/images";
import Artwork from "./Artwork";

const ArtGrid = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} py={2}>
        {images.data.map((i, index) => (
          <Artwork img={i.image} description={i.description} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArtGrid;
