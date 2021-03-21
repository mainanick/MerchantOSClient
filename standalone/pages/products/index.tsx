import {
  Badge,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useContext } from "react";
import ProductContext from "../../components/product-context";
import Sidebar from "../../components/sidebar";

function Products() {
  const products = useContext(ProductContext);
  return (
    <Flex w="100%">
      <Sidebar />
      <Flex
        justifyItems="center"
        boxShadow="base"
        marginLeft="auto"
        marginRight="auto"
        mt={4}
        py={2}
        px={4}
        minW="600px"
      >
        <Table size="md" variant="striped" mt={4}>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Unit Of Measure</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Cost</Th>
              <Th isNumeric>Total Cost</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Margin</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.all.map((val, idx) => (
              <Tr key={val.name}>
                <Td>
                  <Text fontWeight="semibold">{val.name}</Text>
                </Td>
                <Td>
                  <Text fontWeight="semibold">{val.uom}</Text>
                </Td>
                <Td isNumeric>
                  <Text fontWeight="semibold">{val.qty}</Text>
                </Td>
                <Td isNumeric>
                  <Text fontWeight="semibold">{val.cost}</Text>
                </Td>
                <Td isNumeric>
                  <Text fontWeight="semibold">{val.cost * val.qty}</Text>
                </Td>
                <Td isNumeric>
                  <Text fontWeight="semibold">{val.price}</Text>
                </Td>
                <Td isNumeric>
                  <Text fontWeight="semibold">
                    {(((val.price - val.cost) / val.price) * 100).toFixed(1)}
                  </Text>
                </Td>
                <Td>
                  <Badge
                    variant="outline"
                    colorScheme={val.active ? "green" : "red"}
                  >
                    {val.active ? "Active" : "Disabled"}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
export default Products;
