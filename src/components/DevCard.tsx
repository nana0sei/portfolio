import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  name: string;
  description: string;
  image: string;
  git: string;
}

const DevCard = ({ name, description, link, image, git }: Props) => {
  return (
    <>
      <Card>
        <Link to={link} target="_blank" rel="noopener noreferrer">
          <Image src={image} />
        </Link>

        <CardBody>
          <VStack spacing={2} align="flex-start">
            <Heading fontSize="2xl">{name}</Heading>
            <Text as="i">{description}</Text>
            <HStack>
              <Link to={link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink size="25px" />
              </Link>

              <Link to={git} target="_blank" rel="noopener noreferrer">
                <AiFillGithub size="25px" />
              </Link>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DevCard;
