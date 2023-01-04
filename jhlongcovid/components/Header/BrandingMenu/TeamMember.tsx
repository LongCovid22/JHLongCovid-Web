import React from "react";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
}) => {
  return (
    <HStack spacing={"10px"} width="300px">
      <Image
        src={image}
        alt=""
        height={"105px"}
        width={"90px"}
        borderRadius="15px"
      />
      <VStack spacing={"0px"} align={"start"}>
        <Text fontSize={"md"}>{name}</Text>
        <Text fontSize={"sm"} color="gray">
          {role}
        </Text>
      </VStack>
    </HStack>
  );
};
