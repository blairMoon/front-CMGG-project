import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";
import Cookie from "js-cookie";

const SocialLogin = () => {
  const kakaoParams = {
    client_id: "0ee0a4111ed87512f2f0dfb62ebd7ae5",
    redirect_uri: "http://127.0.0.1:3000/accounts/login/kakao/callback",
    response_type: "code",
  };
  const paramsKakao = new URLSearchParams(kakaoParams).toString();

  const naverParams = {
    response_type: "code",
    client_id: "1Vm0j0Ggt3_VZer8jmHA",
    redirect_uri:
      process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:3000/social/naver"
        : "https://bangsam.site/social/naver",
    state: "OzCoding",
  };

  const paramsNaver = new URLSearchParams(naverParams).toString();

  return (
    <VStack width={"100%"} spacing={"3"}>
      <HStack width={"100%"} spacing={"3"} mt={2}>
        <Divider />
        <Text
          textTransform={"uppercase"}
          color="gray.500"
          fontSize={"xs"}
          as="b"
        >
          or
        </Text>
        <Divider />
      </HStack>
      <Button
        as="a"
        href={`https://nid.naver.com/oauth2.0/authorize?${paramsNaver}`}
        width={"100%"}
        backgroundColor="rgb(3, 199, 90)"
        color={"white"}
        _hover={{
          backgroundColor: "rgb(15, 171, 64)",
        }}
      >
        NAVER 로그인
      </Button>
      <Button
        as="a"
        href={`https://kauth.kakao.com/oauth/authorize?${paramsKakao}`}
        width={"100%"}
        colorScheme={"yellow"}
        leftIcon={<FaComment />}
      >
        카카오 로그인
      </Button>
    </VStack>
  );
};
export default SocialLogin;
