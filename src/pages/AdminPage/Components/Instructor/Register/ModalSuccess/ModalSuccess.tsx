import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
type Data = {
  id: number;

  isDone: null | boolean;
};
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: Data[]) => void;
  data: Data[];
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  data,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>현재 상태로 심사를 처리하시겠습니까?</ModalHeader>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => onConfirm(data)}>
            당근입니다
          </Button>
          <Button onClick={onClose}>취소</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CustomModal;
