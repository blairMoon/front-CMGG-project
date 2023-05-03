import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
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
  Image as ChakraImg,
  HStack,
  Box,
  Text,
  VStack,
  ColorMode,
} from "@chakra-ui/react";
import css from "../ModalRegister/ModalResister.module.scss";
import { BiRegistered } from "react-icons/bi";
import { imgTypes } from "../../../constant";
import { useDropzone } from "react-dropzone";
import { getSecureImgFile } from "../../../utils/getSecureImgFile";

import { AiOutlineCheckCircle } from "react-icons/ai";
interface Props {}

interface InstructorData {
  introduce: string;
  applicationField: string;
  image: File | null;
}

const ModalRegister: React.FC<Props> = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_img, setImg] = useState<string>("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [inputFocus, setInputFocus] = useState(false);
  const { colorMode } = useColorMode();
  const inputBorderColor = useColorModeValue("gray.300", "whiteAlpha.300");
  const inputFocusColor = useColorModeValue("#003c93", "#81E6D9");
  const [inputStyle, setInputStyle] = useState({});
  const nameRef = useRef(null);
  const fieldRef = useRef(null);

  const initialValues = {
    introduce: "",
    applicationField: "",
    image: null,
  };

  const {
    getValues,
    register,
    setValue,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<InstructorData>({
    defaultValues: initialValues,
  });

  const onDrop = (acceptedFiles: File[]) => {
    const isRightType = acceptedFiles
      .map((file: File) => file.type.replace("image/", ""))
      .some((elem) => imgTypes.includes("." + elem));

    if (!isRightType || acceptedFiles.length > 1) {
      alert("Only one image file can be registered! \n(jpg, png, jpeg, webp)");
    } else {
      setValue("image", acceptedFiles[0], { shouldValidate: true }); // 이미지 파일을 폼 데이터로 설정 및 shouldValidate 옵션 추가
    }
  };

  const {
    acceptedFiles: imgFile,
    getRootProps: getImgRootProps,
    getInputProps: getImgInputProps,
  } = useDropzone({
    maxFiles: 1,
    accept: { "image/*": imgTypes },
    onDrop,
  });

  const onSubmit = (data: InstructorData) => {
    console.log("Submitted data:", data);
  };
  const getImgInputPropsMerged = getImgInputProps({
    ...register("image", { required: true }),
  });
  const img = imgFile.map((file: File, idx: number) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(getSecureImgFile(reader.result));
    };
    reader.readAsDataURL(file);
    return (
      <HStack alignItems={"flex-start"} key={idx}>
        <ChakraImg w="150px" h="100px" src={_img} />
        <Text>
          {file.name} - {file.size} bytes
        </Text>
      </HStack>
    );
  });
  useEffect(() => {
    if (imgFile.length > 0) {
      setValue("image", imgFile[0]); // 이미지 파일을 폼 데이터로 설정
      trigger("image"); // 이미지 파일이 변경될 때마다 유효성 검사를 다시 실행합니다.
    }
  }, [imgFile, setValue, trigger]);

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
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>강사 신청</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="0">
            <FormControl>
              <FormLabel>자기 소개</FormLabel>
              <Input
                height="100px"
                placeholder="Introduce"
                {...register("introduce", {
                  required: true,
                })}
                // onBlur={() => setInputStyle({})}
              />
              {errors.introduce && errors.introduce.type === "required" && (
                <p className={css.errors}>자기 소개는 필수 입력값입니다.</p>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>신청 분야</FormLabel>
              <Input
                placeholder="Application Field"
                {...register("applicationField", {
                  required: true,
                })}
                // onBlur={() => setInputStyle({})}
              />
              {errors.applicationField &&
                errors.applicationField.type === "required" && (
                  <p className={css.errors}>신청 분야는 필수 입력값입니다.</p>
                )}
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>경력</FormLabel>
              <Input placeholder="Career" />
            </FormControl> */}
            <FormControl id={"img"} my="6">
              <FormLabel fontWeight={"bold"} id={"img"}>
                관련 분야 자격증 올리기
              </FormLabel>
              <Controller
                control={control}
                name="image"
                rules={{ required: true }}
                render={({ field }) => (
                  <VStack
                    backgroundColor={"#fafafa"}
                    border="1px dashed gray"
                    cursor="pointer"
                    p="7"
                    {...getImgRootProps({ className: "dropzone" })}
                  >
                    <input
                      {...getImgInputPropsMerged}
                      {...field}
                      value={undefined}
                      onChange={(e) => {
                        field.onChange(e);
                        if (e.target.files && e.target.files.length > 0) {
                          setValue("image", e.target.files[0]);
                        }
                      }}
                      aria-labelledby="img"
                    />
                    <p style={{ color: "#777" }}>
                      이미지는 클릭 또는 드래그해서 올려주세요 <br />
                      (jpg, png, jpeg, webp)
                    </p>
                  </VStack>
                )}
              />
              {errors.image && errors.image.type === "required" && (
                <p className={css.errors}>이미지는 필수 입력값입니다.</p>
              )}
              <aside>
                <Text fontWeight={"bold"} mt="6" mb="2">
                  이미지파일
                </Text>
                {img}
              </aside>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="#003c93"
              mr={3}
              color="white"
              onClick={handleSubmit(onSubmit)}
            >
              신청하기
            </Button>
            <Button onClick={onClose}>취소</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalRegister;
