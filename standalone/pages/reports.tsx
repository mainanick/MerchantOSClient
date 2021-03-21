import { Box, Flex, Spacer } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";

function Reports() {
  return (
    <Flex w="100%" h="100vh">
      <Sidebar />
      <Box py={2} px={4} w="100%"></Box>
    </Flex>
  );
}
export default Reports;
