import { SimpleGrid } from "@chakra-ui/react";
import projects from "../data/projects";
import DevCard from "./DevCard";

const DevGrid = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {projects.data.map((project, index) => (
          <DevCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default DevGrid;
