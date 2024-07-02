import {
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

interface Props {
  img: string;
  description: string;
}
const Artwork = ({ img, description }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack onClick={onOpen}>
        <Image src={img} w="500px" />
        <Text size="sm" as="i">
          {description}
        </Text>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Image src={img} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Artwork;
