import React from "react";
import { Text } from "@chakra-ui/react";

export const QuestionText = (text: string, timeframe: string | undefined) => {
  if (timeframe) {
    const splitText = text.split("<timeframe>");
    return (
      <>
        <Text fontSize={"xl"} fontWeight={"regular"} width={"100%"}>
          {splitText[0]}
          <Text as="span" fontWeight={"bold"}>
            {timeframe}
          </Text>
          {splitText[1]}
        </Text>
      </>
    );
  } else {
    return (
      <Text fontSize={"xl"} fontWeight={"regular"} width={"100%"}>
        {text}
      </Text>
    );
  }
};
