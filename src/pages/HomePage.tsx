import { Image, SimpleGrid } from "@chakra-ui/react";
import Introduction from "../components/Introduction";
import dev from "../assets/dev.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Introduction />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        <Link to="/dev-projects">
          <Image src={dev} />
        </Link>
      </SimpleGrid>
    </>
  );
};

export default HomePage;
