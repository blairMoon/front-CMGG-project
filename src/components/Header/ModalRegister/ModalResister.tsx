import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { BiRegistered } from "react-icons/bi";

import { AiOutlineCheckCircle } from "react-icons/ai";
interface Props {}

const ModalRegister: React.FC<Props> = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <Button
        display="flex"
        alignItems="center"
        fontSize="15px"
        fontWeight="500"
        // padding="10px 10px 0px 0px"
        mr="16px"
        size={"md"}
        onClick={onOpen}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        width="100px"
        leftIcon={<AiOutlineCheckCircle />}
      >
        강사 신청
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>이름</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>
            <FormControl>
              <FormLabel>신청 </FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>신청 분야</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalRegister;
