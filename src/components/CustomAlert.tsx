import { Modal, ModalOverlay, ModalContent, Alert } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const CustomAlert = ({ isOpen, onClose, children }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Alert status="info" variant="solid">
            {children}
          </Alert>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomAlert;
