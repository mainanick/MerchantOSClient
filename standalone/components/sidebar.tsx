import { Box, Icon, Text, Select, Flex } from "@chakra-ui/react";
import {
  MdShoppingCart,
  MdPeople,
  MdSettings,
  MdGridOn,
  MdLocalMall,
  MdExitToApp,
} from "react-icons/md";
import Link from "next/link";

function Sidebar() {
  return (
    <Flex
      flexDirection="column"
      h="100vh"
      minW="200px"
      p={4}
      color="white"
      bg="#091E42"
    >
      <Select placeholder="Select option" mb={2}>
        <option value="option1">Sanford</option>
        <option value="option2">Spikes</option>
        <option value="option3">Stagemann</option>
      </Select>
      <Box mt={12}>
        <Text h="46px" p={4} bg="#253858" mb={2}>
          <Link href="/">
            <a>
              <Icon as={MdShoppingCart} /> Sales
            </a>
          </Link>
        </Text>
        <Text h="46px" p={4} mb={1}>
          <Link href="/customers">
            <a>
              <Icon as={MdPeople} /> Customers
            </a>
          </Link>
        </Text>
        <Text h="46px" p={4} mb={1}>
          <Link href="/products">
            <a>
              <Icon as={MdLocalMall} /> Products
            </a>
          </Link>
        </Text>
        <Text h="46px" p={4} mb={1}>
          <Link href="/reports">
            <a>
              <Icon as={MdGridOn} /> Reports
            </a>
          </Link>
        </Text>
        <Text h="44px" p={4} mb={1}>
          <Link href="/settings">
            <a>
              <Icon as={MdSettings} /> Settings
            </a>
          </Link>
        </Text>
        <Text h="40px" p={4} mb={1}>
          <Icon as={MdExitToApp} /> Logout
        </Text>
      </Box>
    </Flex>
  );
}

export default Sidebar;
