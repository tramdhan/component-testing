import React from "react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react";
import { format } from "date-fns/format";
import { isValid } from "date-fns/isValid";

const datefns = () => {
  const dateFormat = "YYYY-MM-DD";
  const testdate = new Date();

  return (
    <FormControl m="200px">
      <FormLabel>Dayjs Date:</FormLabel>
      <Box fontSize={32} mb="20px">
        {format(new Date(testdate), dateFormat)}
      </Box>

      <FormLabel>Valid?:</FormLabel>
      <Box fontSize={32}>{isValid(testdate) ? "Yes" : "No"}</Box>
    </FormControl>
  );
};

export default datefns;
