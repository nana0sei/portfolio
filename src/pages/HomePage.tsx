import { Box } from "@chakra-ui/react";
import Introduction from "../components/Introduction";

const HomePage = () => {
  return (
    <Box h="calc(100vh)" alignContent="center">
      <Introduction />
      {/* <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
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
      </SimpleGrid> */}
    </Box>
  );
};

export default HomePage;
