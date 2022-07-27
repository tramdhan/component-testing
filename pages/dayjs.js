import React from "react";
import { FormControl, FormLabel, Box } from "@chakra-ui/react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(customParseFormat); // strict checking valid date
dayjs.extend(relativeTime); // required for pandemic started

const dayjs1 = () => {
  const dateFormat = "YYYY-MM-DD";
  let today = dayjs();
  const pandemicStart = "2020-03-11";

  return (
    <FormControl m="200px">
      <FormLabel>Dayjs Date:</FormLabel>
      <Box fontSize={32} mb="20px">
        {dayjs(today).format(dateFormat)}
      </Box>

      <FormLabel>Valid?:</FormLabel>
      <Box fontSize={32} mb="20px">
        {dayjs(today, dateFormat, true).isValid() ? "Yes" : "No"}
      </Box>

      <FormLabel>Pandemic Started:</FormLabel>
      <Box fontSize={32} mb="20px">
        {dayjs(pandemicStart).fromNow()}
      </Box>
    </FormControl>
  );
};

export default dayjs1;
