import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import Introduction from "../components/Introduction";
import HoverContainer from "../components/HoverContainer";
import dev from "../assets/dev.png";
import art from "../assets/art.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box h="calc(100vh)" alignContent="center">
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
    </Box>
  );
};

export default HomePage;
