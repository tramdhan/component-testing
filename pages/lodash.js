import React from "react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react";

// AVOID at all costs:
import _ from "lodash";

// Import only the modules you need:
// import sortBy from "lodash/sortBy";

// Use lodash-es to further reduce the size of the bundle:
import sortBy from "lodash-es/sortBy";

// Consider the ES function instead of the lodash function

const lodash1 = () => {
  return (
    <FormControl m="200px">
      <FormLabel>Dayjs Date:</FormLabel>
      <Box fontSize={32} mb="20px"></Box>
    </FormControl>
  );
};

export default lodash1;
