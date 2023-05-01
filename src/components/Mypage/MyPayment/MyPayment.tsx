import React from "react";
import {
  Box,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const MyPayment: React.FC = () => {
  const purchases = [
    {
      id: 1,
      date: "2022-04-01",
      item: "Introduction to React",
      price: "$19.99",
    },
    {
      id: 2,
      date: "2022-04-05",
      item: "Advanced React Techniques",
      price: "$29.99",
    },
    {
      id: 3,
      date: "2022-04-10",
      item: "React Native for Beginners",
      price: "$24.99",
    },
  ];

  return (
    <Box p={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>
        구매 내역
      </Text>

      <Stack direction="row" mb={6}>
        <Text fontWeight="bold">총 구매 강의:</Text>
        <Text>{purchases.length}</Text>
      </Stack>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date</Th>
            <Th>Lecture</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {purchases.map((purchase) => (
            <Tr key={purchase.id}>
              <Td>{purchase.id}</Td>
              <Td>{purchase.date}</Td>
              <Td>{purchase.item}</Td>
              <Td>{purchase.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default MyPayment;
