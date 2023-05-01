import {
  Grid,
  GridItem,
  HStack,
  Box,
  Stack,
  Divider,
  Skeleton,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";
import { hsl, parseToHsl, rgb } from "polished";
import { HslColor } from "polished/lib/types/color";

export default function DetailSkeleton() {
  const hslaColor: HslColor = parseToHsl(rgb(240, 245, 252));

  // L 값을 10% 낮춤
  const darkerColor = hsl({
    ...hslaColor,
    lightness: hslaColor.lightness - 0.7,
  });

  return (
    <Grid
      w="1300px"
      pt="5"
      pb="5"
      px="5"
      mx="auto"
      templateAreas={`"info"
                  "contents"
                  "reviews"`}
    >
      <GridItem
        bgColor={useColorModeValue(rgb(240, 245, 252), darkerColor)}
        borderRadius="3xl"
        h="400px"
        area={"info"}
        px="20"
        py="10"
        fontWeight="bold"
      >
        <HStack h="100%">
          <Skeleton borderRadius="10">
            <Box w="45%" h="30%">
              123123123123123123 123123123123123123 sasdsdadasdasasd
              <br />
              123123123123123123 123123123123123123 adsdsasadsdasasd
              <br />
              123123123123123123 123123123123123123 adsdsasadsadsasd
              <br />
              123123123123123123 123123123123123123 adsdsasadssadasd
            </Box>
          </Skeleton>
          <Box w="10%"></Box>
          <Box w="45%">
            <Stack h="100%" spacing={3}>
              <Skeleton w="25%">asddsa</Skeleton>
              <Skeleton w="85%">asddsa</Skeleton>
              <Skeleton w="25%">asddsa</Skeleton>
              <Skeleton w="15%">asddsa</Skeleton>
              <br />
              <br />
              <SkeletonText />
            </Stack>
          </Box>
        </HStack>
      </GridItem>
      <GridItem
        area={"contents"}
        display="flex"
        justifyContent="center"
        py="10"
      >
        <Stack w="800px">
          <Box fontSize="22" paddingTop="5">
            <Skeleton w="25%">asddsa</Skeleton>
            <br />
            <Skeleton w="85%">asddsa</Skeleton>
          </Box>
          <Box fontSize="22" fontWeight="bold" py="3">
            강의소개
          </Box>
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <br />
          <br />
          <br />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <br />

          <Divider borderColor="gray.300" />
          <Box fontSize="22" fontWeight="bold" py="10">
            목 차 <Skeleton />
          </Box>
          <Divider borderColor="gray.300" />
        </Stack>
      </GridItem>
    </Grid>
  );
}
