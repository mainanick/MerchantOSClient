import {
  Box,
  Flex,
  Icon,
  Input,
  Text,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Select from "react-select";
import ProductContext from "../components/product-context";
import Sidebar from "../components/sidebar";

function HomePage() {
  const products = useContext(ProductContext);
  const [cart, setCart] = useState([
    {
      item: "SKM 9000",
      qty: 1,
      price: 25000,
    },
    {
      item: "BNK B6S",
      qty: 3,
      price: 2000,
    },
    {
      item: "3.0mm Speaker Cable Per Metre",
      qty: 3,
      price: 60,
    },
  ]);
  const [discount, setDiscount] = useState(0);
  const changeQty = (val, idx: number) => {
    const newCart = [...cart];
    newCart[idx].qty = parseFloat(val);
    setCart(newCart);
  };
  const changePrice = (val, idx: number) => {
    const newCart = [...cart];
    newCart[idx].price = parseFloat(val);
    setCart(newCart);
  };
  const addToCart = (item) => {
    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  };
  const removeFromCart = (idx) => {
    const newCart = [...cart];
    newCart.splice(idx, 1);
    setCart(newCart);
    console.log(newCart);
  };
  return (
    <Flex w="100%" h="100vh">
      <Sidebar />
      <Spacer />
      <Box py={2} px={4} minW="600px">
        <Select
          placeholder="Search Item"
          options={products.all}
          onChange={(p) => addToCart({ item: p.name, qty: 1, price: p.price })}
          getOptionLabel={(o) => o.name}
          getOptionValue={(o) => o.name}
        >
          {products.all.map((val, idx) => (
            <option value="idx">{val.name}</option>
          ))}
        </Select>
        <Table size="sm" variant="striped" mt={4}>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Qty</Th>
              <Th>Price</Th>
              <Th isNumeric>Total</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.length > 0 &&
              cart.map((val, idx) => (
                <Tr key={val.item}>
                  <Td>
                    <Text fontWeight="semibold">{val.item}</Text>
                  </Td>
                  <Td>
                    <NumberInput
                      step={1}
                      defaultValue={1}
                      min={1}
                      w="100%"
                      value={val.qty}
                      onChange={(val) => changeQty(val, idx)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Td>
                  <Td>
                    <NumberInput
                      step={1}
                      defaultValue={1}
                      min={1}
                      w="100%"
                      value={val.price}
                      onChange={(val) => changePrice(val, idx)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Td>
                  <Td isNumeric>
                    <Text fontWeight="medium">{val.qty * val.price}</Text>
                  </Td>
                  <Td>
                    <Button onClick={(ev) => removeFromCart(idx)}>X</Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
      <Spacer />
      <Box minW="300px" w="300px" p={4} borderLeft={"1px"} position="relative">
        <Select placeholder="Select Customer" mb={2}>
          <option value="option1">Sanford</option>
          <option value="option2">Spikes</option>
          <option value="option3">Stagemann</option>
        </Select>
        <Flex
          flexDirection="column"
          position="absolute"
          w={"100%"}
          p={4}
          bottom={0}
          left={0}
        >
          <Box mb={2}>
            <Text mb={2}>Discount</Text>
            <NumberInput
              step={1}
              defaultValue={0}
              min={0}
              w="100%"
              value={discount}
              onChange={(val) => setDiscount(parseFloat(val))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>

          <Box mb={2}>
            <Text> Total</Text>
            <Text fontWeight="semibold" fontSize="2em">
              {cart.length > 0 &&
                cart.map((a) => a.qty * a.price).reduce((a, b) => a + b) -
                  discount}
            </Text>
          </Box>

          <Button mb={2} colorScheme="green" onClick={() => window.print()}>
            Pay
          </Button>
          <Button mb={2} colorScheme="blue" variant="outline">
            Put On Hold
          </Button>
          <Button mb={2} colorScheme="red" variant="outline">
            Cancel
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default HomePage;
