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
import { LectureData } from "../../../../typings/LectureData";
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
interface Props {
  data: LectureData;
}
const LectureCard: React.FC<Props> = ({ data }) =>
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
    const MAX_LENGTH = 150;
    let text = data.lectureDescription;

    if (text.length > MAX_LENGTH) {
      text = text.slice(0, MAX_LENGTH) + "...";
    }

    const MAX_LENGTH2 = 30;
    let textTitle = data.lectureTitle;

    if (textTitle.length > MAX_LENGTH2) {
      textTitle = textTitle.slice(0, MAX_LENGTH2) + "...";
    }

    // <Link to={`/lectures/${lectureNumber}`}>
    return (
      <Link to={`/lectures/${data.LectureId}`}>
        <Card
          width="250px"
          height="300px"
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
            width="250px"
            height="300px"
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
                {data.lectureTitle}
              </Heading>
              <Text
                fontSize="14px"
                color="white"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {text}
              </Text>
            </Stack>
            <Text color="red">{data.targetAudience}</Text>
          </Box>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "100%" }}
            minH="160"
            height="160"
            src={data.thumbnail}
            alt="Card"
          />
          <CardBody>
            <Heading size="md" fontSize="17px" h="45">
              {textTitle}
            </Heading>
            <Text py="2">{data.instructor.username}</Text>

            <HStack spacing="3px">
              <StarRating rating={data.rating} />
              <Text fontSize="12" fontWeight="600">
                ({data.reviews_num})
              </Text>
            </HStack>
          </CardBody>
        </Card>
      </Link>
    );
  };

export default LectureCard;
