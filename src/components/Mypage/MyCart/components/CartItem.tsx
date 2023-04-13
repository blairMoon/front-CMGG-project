import "../MyCart.scss";
import { TbLetterX } from "react-icons/tb";
import { Box, HStack, Checkbox, Image, Text, Button } from "@chakra-ui/react";

import React from "react";
import { useRecoilState } from "recoil";

import { Cart } from "../../../../services/mocks/mock";
import { delMockCarts } from "../../../../services/mocks/api";
import { cartSelectAllState, SelectCartItems } from "../../../../atoms";

const CartItem: React.FC<Cart> = ({
  LectureId,
  thumbnail,
  lectureTitle,
  lectureDifficulty,
  lectureFee,
}: Cart) => {
  const [selectedItems, setSelectedItems] = useRecoilState(cartSelectAllState);

  const handleItemDelete = () => {
    console.log(LectureId);
    delMockCarts({ LectureId });
  };

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

      if (e.target.checked) {
        selectedItemsId.push(LectureId);
        selectedItemsName.push(lectureTitle);

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
        total_price: nextTotalPrice,
      };
    });
  };

  const isCheck = (): boolean =>
    selectedItems.id.includes(LectureId) ? true : false;

  return (
    <>
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
            size="lg"
            borderColor="gray"
            colorScheme="green"
            isChecked={isCheck()}
            onChange={handleCheckboxChange}
          />
          <div className="card">
            <Image src={thumbnail} alt="Card Image" />
            <HStack w="100%" justifyContent="space-between">
              <div className="card-center">
                <h3 className="card-title">{lectureTitle}</h3>
                <p className="card-description">{lectureDifficulty}</p>
                <Text fontSize="md" color="gray.500">
                  {lectureFee}원
                </Text>
              </div>

              <div className="card-right">
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
    </>
  );
};

export default CartItem;
