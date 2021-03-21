import {
  Box,
  Flex,
  Spacer,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";

const customers = [
  {
    name: "John Doe",
    phone: "254712345678",
    lastAmount: 2000,
    dateAdded: "21/03/2021",
  },
  {
    name: "John Doe",
    phone: "254712345678",
    lastAmount: 2000,
    dateAdded: "21/03/2021",
  },
  {
    name: "John Doe",
    phone: "254712345678",
    lastAmount: 2000,
    dateAdded: "21/03/2021",
  },
  {
    name: "John Doe",
    phone: "254712345678",
    lastAmount: 2000,
    dateAdded: "21/03/2021",
  },
  {
    name: "John Doe",
    phone: "254712345678",
    lastAmount: 2000,
    dateAdded: "21/03/2021",
  },
];

function Customers() {
  return (
    <Flex w="100%" h="100vh">
      <Sidebar />
      <Box py={2} px={4} minW="600px" w="800px">
        <Table size="md" variant="striped" mt={4}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th isNumeric>Last Txn Amount</Th>
              <Th>Date Added</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customers.map((val, idx) => (
              <Tr key={val.name}>
                <Td>
                  <Text fontWeight="semibold">{val.name}</Text>
                </Td>
                <Td>
                  <Text fontWeight="semibold">{val.phone}</Text>
                </Td>
                <Td isNumeric>
                  <Text fontWeight="semibold">{val.lastAmount}</Text>
                </Td>
                <td>
                  <Text fontWeight="semibold">{val.dateAdded}</Text>
                </td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}
export default Customers;
