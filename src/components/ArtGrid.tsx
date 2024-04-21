import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import images from "../data/images";
import Artwork from "./Artwork";
import { Suspense } from "react";

const ArtGrid = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} py={2}>
        {images.data.map((i, index) => (
          <Suspense fallback={<Skeleton w="500px" h="500px" />} key={index}>
            <Artwork img={i.image} description={i.description} />
          </Suspense>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArtGrid;
