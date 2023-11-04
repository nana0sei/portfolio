import {
  Image,
  SimpleGrid,
  useDisclosure,
  Text,
  VStack,
} from "@chakra-ui/react";
import Introduction from "../components/Introduction";
import dev from "../assets/dev.png";
import art from "../assets/art.png";
import locked from "../assets/locked.png";
import unknown from "../assets/unknown.png";
import { Link } from "react-router-dom";
import HoverContainer from "../components/HoverContainer";
import CustomAlert from "../components/CustomAlert";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Introduction />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
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

        <HoverContainer>
          <Image src={unknown} onClick={onOpen} />
        </HoverContainer>
      </SimpleGrid>

      <CustomAlert isOpen={isOpen} onClose={onClose}>
        <VStack spacing={2}>
          <Image src={locked} />
          <Text as="b">this section is not yet available.</Text>
        </VStack>
      </CustomAlert>
    </>
  );
};

export default HomePage;
