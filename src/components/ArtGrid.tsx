import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import images from "../data/images";
import Artwork from "./Artwork";
import { Suspense } from "react";

const ArtGrid = () => {
  let otherImages = images.data.slice(1, images.data.length);
  return (
    <>
      <Artwork
        img={images.data[0].image}
        description={images.data[0].description}
      />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} py={2}>
        {otherImages.map((i, index) => (
          <Suspense fallback={<Skeleton w="500px" h="500px" />} key={index}>
            <Artwork img={i.image} description={i.description} />
          </Suspense>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArtGrid;
