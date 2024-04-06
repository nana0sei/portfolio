import { Image, SimpleGrid } from "@chakra-ui/react";
import Introduction from "../components/Introduction";
import dev from "../assets/dev.png";
import art from "../assets/art.png";

import { Link } from "react-router-dom";
import HoverContainer from "../components/HoverContainer";

const HomePage = () => {
  return (
    <>
      <Introduction />
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        <HoverContainer>
          <Link to="/dev-projects">
            <Image src={dev} />
          </Link>
        </HoverContainer>

        <HoverContainer>
          <Link to="/art">
            <Image src={art} />
          </Link>
        </HoverContainer>
      </SimpleGrid>
    </>
  );
};

export default HomePage;
