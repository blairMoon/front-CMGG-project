// import React, { useState } from "react";
// import {
//   Box,
//   Heading,
//   VStack,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Button,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   IconButton,
//   Flex,
// } from "@chakra-ui/react";
// import { RecoilState, atom } from "recoil";
// import { SearchIcon } from "@chakra-ui/icons";
// import ModalRegister from "../ModalRegisterAdmin/ModalRegisterAdmin";
// import ModalSuccess from "../ModalSuccess/ModalSuccess";
// import { booleanOpenState } from "../../../../../../../src/atoms";
// import { booleanAcceptState } from "../../../../../../../src/atoms";

// import { useRecoilState, useRecoilValue } from "recoil";
// type Data = {
//   id: number;
//   title: string;
//   author: string;
//   date: string;
//   introduction: string;
//   isDone: boolean | null;
// };
// type TableRowProps = {
//   row: Data;
//   onClick: (data: Data) => void;
// };
// const TableRow = ({ row, onClick }: TableRowProps): JSX.Element => {
//   const [isDoneValue, setIsDone] = useRecoilState(row.isDone);

//   return (
//     <Tr
//       key={row.id}
//       onClick={() => onClick(row)}
//       style={{ cursor: "pointer", fontWeight: "600" }}
//     >
//       <Td>{row.id}</Td>
//       <Td>{row.title}</Td>
//       <Td>{row.author}</Td>
//       <Td>{row.date}</Td>
//       <Td>
//         {isDoneValue === null ? (
//           <Button colorScheme="gray" marginRight="10px" size={"sm"}>
//             미처리
//           </Button>
//         ) : isDoneValue === true ? (
//           <Button colorScheme="green" marginRight="10px" size={"sm"}>
//             수락
//           </Button>
//         ) : (
//           <Button colorScheme="red" marginRight="10px" size={"sm"}>
//             거부
//           </Button>
//         )}
//       </Td>
//     </Tr>
//   );
// };
// export default TableRow;
import React from "react";

interface Props {}

const RegisterTable: React.FC<Props> = (props: Props) => {
  return <div></div>;
};

export default RegisterTable;
