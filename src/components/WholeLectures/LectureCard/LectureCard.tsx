import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import StarRating from "../StarRating/StarRating";
// interface LectureCardProps {
//   lectureNumber: number;
//   img: string;
//   lectureDescription: string;
//   lectureTitle: string;
//   instructor: string;
//   targetAudience: string;
//   thumbnail: string;
//   rating: number;
//   reviewsNum: number;
// }
interface Props {}
const LectureCard: React.FC<Props> = (props: Props) =>
  //   {
  //   lectureNumber,
  //   img,
  //   lectureDescription,
  //   lectureTitle,
  //   instructor,
  //   targetAudience,
  //   thumbnail,
  //   rating,
  //   reviewsNum,
  // }
  {
    // const MAX_LENGTH = 100;
    // let text = lectureDescription;

    // if (text.length > MAX_LENGTH) {
    //   text = text.slice(0, MAX_LENGTH) + "...";
    // }

    // const MAX_LENGTH2 = 20;
    // let textTitle = lectureTitle;

    // if (textTitle.length > MAX_LENGTH2) {
    //   textTitle = textTitle.slice(0, MAX_LENGTH2) + "...";
    // }

    // <Link to={`/lectures/${lectureNumber}`}>
    return (
      <Card
        width={"250px"}
        height={"300px"}
        direction={{ base: "column" }}
        variant="outline"
        _hover={{ background: "rgba(0, 0, 0, 0.4 )", zIndex: 10 }}
        overflow="hidden"
      >
        <Box
          display="flex"
          flexDirection="column"
          position="absolute"
          zIndex={10}
          width={"250px"}
          height={"300px"}
          cursor="pointer"
          justifyContent="space-between"
          opacity="0"
          _hover={{
            opacity: "1",
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: 10,
          }}
          padding="15px"
        >
          <Stack>
            <Heading size="md" color="white" pb="10px">
              오뚜니의 리액트 강의
            </Heading>
            <Text
              fontSize="14px"
              color="white"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              ㄴ밍;라ㅓ;매ㅑㄷ절;ㄴ미아ㅓㄹ;ㅁ니ㅏㅇ러;댜런이ㅏ런이ㅏㅓㄹ댜ㅓㄴㅁ;이람ㄴㅇ러댜ㅐㄹ;ㅓ
            </Text>
          </Stack>
          <Text color="red">중급이지욜</Text>
        </Box>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "100%" }}
          minH="160"
          height="160"
          src="https://res.heraldm.com/content/image/2023/01/09/20230109000620_0.jpg"
          alt="Card"
        />
        <CardBody>
          <Heading size="md" fontSize="17px" h="45">
            오뚜니의 리액트 강의
          </Heading>
          <Text py="2">오뚜니</Text>

          <HStack spacing="3px">
            <StarRating rating={4} />
            <Text fontSize="12" fontWeight="600">
              (12)
            </Text>
          </HStack>
        </CardBody>
      </Card>
    );
  };

export default LectureCard;
