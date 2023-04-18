import css from "./CartItem.module.scss";
import { TbLetterX } from "react-icons/tb";
import { Box, HStack, Checkbox, Image, Text, Button } from "@chakra-ui/react";

import React from "react";
import { useRecoilState } from "recoil";

import { Cart } from "../../../../../services/mocks/mock";
import { delMockCarts } from "../../../../../services/mocks/api";
import { cartSelectAllState, SelectCartItems } from "../../../../../atoms";

const CartItem: React.FC<Cart> = ({
  LectureId,
  thumbnail,
  instructor,
  lectureTitle,
  lectureDifficulty,
  lectureFee,
}: Cart) => {
  const [selectedItems, setSelectedItems] = useRecoilState(cartSelectAllState);

  const handleItemDelete = () => {
    console.log(LectureId);
    delMockCarts({ LectureId });
  };
  const mainColor = "#003c93;";
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItems((items: SelectCartItems) => {
      let nextTotalPrice = items.total_price;

      const isSelectedItem = items.id.findIndex(
        (item: number) => item === LectureId
      );
      const selectedItemsId = items.id.filter(
        (item: number) => item !== LectureId
      );
      const selectedItemsName = items.name.filter(
        (item: string) => item !== lectureTitle
      );

      const selectedItemsThumbnail = items.thumbnail.filter(
        (item: string) => item !== thumbnail
      );
      const selectedItemsInstructor = items.instructor.filter(
        (item: string) => item !== instructor.username
      );

      if (e.target.checked) {
        selectedItemsId.push(LectureId);
        selectedItemsName.push(lectureTitle);
        selectedItemsThumbnail.push(lectureTitle);
        selectedItemsInstructor.push(lectureTitle);

        if (isSelectedItem < 0) {
          nextTotalPrice += lectureFee;
        }
      } else {
        if (isSelectedItem > -1) {
          nextTotalPrice -= lectureFee;
        }
      }

      return {
        id: selectedItemsId,
        name: selectedItemsName,
        thumbnail: selectedItemsThumbnail,
        instructor: selectedItemsInstructor,
        total_price: nextTotalPrice,
      };
    });
  };

  const isCheck = (): boolean =>
    selectedItems.id.includes(LectureId) ? true : false;

  return (
    <div>
      <Box w="100%" key={LectureId}>
        <HStack
          key={LectureId}
          alignItems="flex-start"
          justifyContent="flex-start"
          borderRadius="md"
          w={"100%"}
          my="1"
        >
          <Checkbox
            size="md"
            borderColor="gray"
            colorScheme={mainColor}
            isChecked={isCheck()}
            onChange={handleCheckboxChange}
          />
          <div className={css.card}>
            <Image src={thumbnail} alt="Card Image" className={css.img} />
            <HStack w="100%" justifyContent="space-between">
              <div className={css.cardCenter}>
                <h3 className={css.cardTitle}>{lectureTitle}</h3>
                <p className={css.cardDescription}>{lectureDifficulty}</p>
                <Text fontSize="md" color="rgb(247 247 250)">
                  {lectureFee}원
                </Text>
              </div>

              <div className={css.cardRight}>
                <Button
                  size={"lg"}
                  backgroundColor="transparent"
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                  onClick={handleItemDelete}
                >
                  <TbLetterX />
                </Button>
              </div>
            </HStack>
          </div>
        </HStack>
      </Box>
    </div>
  );
};

export default CartItem;
