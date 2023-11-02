import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  name: string;
  description: string;
  image: string;
}

const ProjectCard = ({ name, description, link, image }: Props) => {
  return (
    <>
      <Card>
        <Image src={image} />
        <CardBody>
          <Link
            to={`https://github.com/nana0sei${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heading fontSize="2xl">{name}</Heading>
          </Link>
          <Text as="i">{description}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
