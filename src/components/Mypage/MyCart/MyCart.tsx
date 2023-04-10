import React from "react";
import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Text,
  Divider,
  Checkbox,
  IconButton,
  useColorModeValue,
  Card,
  Image,
  CardBody,
  CardFooter,
  CheckboxGroup,
} from "@chakra-ui/react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import "./MyCart.scss";

interface Props {}

const MyCart: React.FC<Props> = (props: Props) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 15.0 },
    { id: 3, name: "Product 3", price: 20.0 },
    { id: 4, name: "Product 3", price: 20.0 },
  ]);

  const handleItemDelete = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const total = subtotal + 10;

  // const borderColor = useColorModeValue("gray.200", "gray.600");
  // const textColor = useColorModeValue("gray.700", "gray.400");

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    console.log("check");
    setIsChecked((isCheck) => !isCheck);
  };

  return (
    <VStack pb="8vh" overflowX="hidden" minW="800px">
      <VStack
        w="100%"
        maxW="1300px"
        alignItems="flex-start"
        p="10"
        px="20"
        pos="relative"
      >
        <VStack
          w="100%"
          alignItems="flex-start"
          pb={15}
          textAlign="center"
          boxShadow="0 5px 5px -5px"
        >
          <Heading fontSize="27px" fontWeight="bold" mb="10">
            수강바구니
          </Heading>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              name="myCheckbox"
              id="myCheckbox"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="myCheckbox" className="checkbox-label">
              전체 선택 ({cartItems.length})
            </label>
          </div>
        </VStack>
        <HStack justifyContent="space-between" w="100%">
          <VStack spacing={6} w="100%" mt="10">
            {cartItems.map((item) => (
              <Box w="100%">
                <HStack
                  key={item.id}
                  justifyContent="flex-start"
                  borderRadius="md"
                  w={"100%"}
                  my="5"
                >
                  <div className="card">
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="myCheckbox"
                        id="myCheckbox"
                        className="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <Image
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Card Image"
                    />
                    <HStack w="100%" justifyContent="space-between">
                      <div className="card-center">
                        <h3 className="card-title">Card Title</h3>
                        <p className="card-description">
                          Card description goes here.
                        </p>
                        <Text fontSize="md" color="gray.500">
                          Price: ${item.price.toFixed(2)}
                        </Text>
                      </div>

                      <div className="card-right">
                        <HStack>
                          <a href="#" className="card-buy">
                            Buy
                          </a>
                          <a href="#" className="card-delete">
                            Delete
                          </a>
                        </HStack>
                      </div>
                    </HStack>
                  </div>
                </HStack>
              </Box>
            ))}
          </VStack>
        </HStack>
        <Divider w="100%" />
        <VStack w="100%">
          <HStack
            pos="fixed"
            h="8vh"
            px="20"
            pl="45"
            bottom="0"
            w="95%"
            minW="650px"
            maxW="1200px"
            bgColor="white"
            justifyContent="space-between"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.08)"
          >
            <Text fontWeight="bold">{120000} 원</Text>
            <Button
              bgColor="#00c471"
              w="85%"
              p="8"
              borderRadius="5px"
              color="white"
              fontSize="16"
              py="15"
              fontWeight="bold"
            >
              구매하기
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default MyCart;
