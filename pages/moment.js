import React from "react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react";
import moment from "moment";

const moment1 = () => {
  const dateFormat = "YYYY-MM-DD";
  let today = moment();

  return (
    <FormControl m="200px">
      <FormLabel>Moment Date:</FormLabel>
      <Box fontSize={32} mb="20px">
        {moment(today).format(dateFormat)}
      </Box>

      <FormLabel>Valid?:</FormLabel>
      <Box fontSize={32} mb="20px">
        {moment(today).isValid() ? "Yes" : "No"}
      </Box>
    </FormControl>
  );
};

export default moment1;
