import { VStack, SimpleGrid, Text } from "@chakra-ui/react";
import { LectureCard } from "./components/LectureCard";

export function PaymentsResultPage() {
  const lectures = sessionStorage.getItem("buy_lectures")?.split("^@^");
  const name = sessionStorage.getItem("buy_username");
  const idArr =
    lectures &&
    lectures[0]?.split(",").map(function (item) {
      return parseInt(item, 10);
    });
  const titleArr = lectures && lectures[1]?.split(",");
  const thumbnailArr = lectures && lectures[2]?.split(",");
  const instructorArr = lectures && lectures[3]?.split(",");

  return (
    <VStack>
      <Text fontWeight="bold" fontSize="30px">
        {name} 님 구매완료
      </Text>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        w="80%"
      >
        {idArr?.map((item, idx) => {
          return (
            <LectureCard
              key={idx}
              id={item}
              title={titleArr ? titleArr[idx] : ""}
              thumbnail={thumbnailArr ? thumbnailArr[idx] : ""}
              instructor={instructorArr ? instructorArr[idx] : ""}
            />
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
