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
  useColorMode,
} from "@chakra-ui/react";
import StarRating from "../StarRating/StarRating";
import { ILectureData } from "../../../../typings/LectureData";
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
  data: ILectureData;
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

    const MAX_LENGTH2 = 37;
    let textTitle = data.lectureTitle;

    if (textTitle.length > MAX_LENGTH2) {
      textTitle = textTitle.slice(0, MAX_LENGTH2) + "...";
    }
    const { colorMode, toggleColorMode } = useColorMode();

    // <Link to={`/lectures/${lectureNumber}`}>
    return (
      <Link to={`/lectures/${data.LectureId}`}>
        <Card
          width="230px"
          height="260px"
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
            width="100%"
            height="100%"
            cursor="pointer"
            justifyContent="space-between"
            opacity="0"
            _hover={{
              opacity: "1",
              background: "rgba(0, 0, 0, 0.7)",
              zIndex: 10,
            }}
            padding="10px"
          >
            <Stack>
              <Heading fontSize="14" color="white" pb="5px">
                {textTitle}
              </Heading>
              <Text
                fontSize="12px"
                color="white"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {text}
              </Text>
            </Stack>
            <Text fontSize="12px" color="red">
              {data.targetAudience}
            </Text>
          </Box>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "100%" }}
            maxH="150px"
            height="100%"
            src={data.thumbnail}
            alt="Card"
          />
          <CardBody px="1" py="0">
            <Heading fontSize="14px" h="45px" py="2">
              {textTitle}
            </Heading>
            <Text
              fontSize="14px"
              fontWeight="600"
              color={colorMode === "light" ? "#666666" : "#bbb"}
            >
              {data.instructor.username}
            </Text>

            <HStack spacing="3px" fontSize="12px">
              <StarRating rating={data.rating} />
              <Text fontWeight="600">({data.reviews_num})</Text>
            </HStack>
            <Text fontSize="16" fontWeight="600">
              ₩10,000
            </Text>
          </CardBody>
        </Card>
      </Link>
    );
  };

export default LectureCard;
