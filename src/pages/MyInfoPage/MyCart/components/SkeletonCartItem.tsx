import css from "./CartItem.module.scss";
import { TbLetterX } from "react-icons/tb";
import {
  Box,
  HStack,
  Checkbox,
  Image,
  Text,
  Button,
  Flex,
  Divider,
  Heading,
  Skeleton,
} from "@chakra-ui/react";

interface Props {
  id: number;
}

const SkeletonCartItem: React.FC<Props> = ({ id }: Props) => {
  const mainColor = "#003c93;";

  return (
    <Box>
      <Box w="100%" key={id} paddingBottom="30px" margin="0">
        <HStack
          key={id}
          alignItems="flex-start"
          justifyContent="flex-start"
          borderRadius="md"
          w={"100%"}
          my="1"
        >
          <Checkbox borderColor="gray" size="md" colorScheme={mainColor} />
          <Box w="900px" overflow={"hidden"} display={"flex"}>
            <Skeleton ml="10px" borderRadius={"7px"} w="300px" h="150px" />
            <HStack w="100%" justifyContent="space-between">
              <Box pl="20px">
                <Heading fontWeight={"600"} fontSize={"16px"} mb="8px">
                  <Skeleton>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Skeleton>
                </Heading>
                <Heading fontSize={"13px"} color="#666" mb="16px">
                  <Skeleton>aaaaaaaaa</Skeleton>
                </Heading>
                <Flex>
                  <Text fontSize="md" fontWeight="700" mr="1">
                    <Skeleton>aaaaaa</Skeleton>
                  </Text>
                </Flex>
              </Box>
              <Box display={"flex"} alignItems={"flex-start"} h="100%">
                <Button
                  size={"lg"}
                  backgroundColor="transparent"
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                >
                  <TbLetterX />
                </Button>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Divider color="rgb(226 232 241)" />
    </Box>
  );
};

export default SkeletonCartItem;
