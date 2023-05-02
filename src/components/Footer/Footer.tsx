import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LargeWithLogoCentered() {
  return (
<<<<<<< HEAD
    <Box bg="#262C33" h="30vh">
=======
    <Box bg="#262C33" marginTop="20" h="30vh">
>>>>>>> 48e0cadb513aeefc0f70e268c0ddf12c2ba106b2
      <Container as={Stack} maxW={"6xl"} px={8}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={8}
          textAlign="center"
          mt={5}
        >
          <Stack align={"center"}></Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <img src="/images/whiteLOGO2.png" alt="logo" width="110" />
        </Flex>
        <Text pt={3} fontSize={"sm"} textAlign={"center"} color="white">
          © 2023 CodigGarden. All rights reserved
        </Text>
        <Text fontSize={"sm"} textAlign={"center"} color="white">
          이메일 contact@CodigGarden.co.kr | 주소 서울특별시 서초구 강남대로99길
          45 엠빌딩 5층{" "}
        </Text>
        <Text fontSize={"sm"} textAlign={"center"} color="white">
          사업자등록번호 540-86-960307 | 대표 : 백관열 | 상호명 : Code Magician
          Growth Garden
        </Text>
      </Box>
    </Box>
  );
}
