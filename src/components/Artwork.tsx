import { Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  img: string;
  description: string;
}
const Artwork = ({ img, description }: Props) => {
  return (
    <>
      <VStack>
        <Image src={img} w="500px" />
        <Text size="sm" as="i">
          {description}
        </Text>
      </VStack>
    </>
  );
};

export default Artwork;
