import React from "react";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  school: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  school,
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
        <Text fontSize={"sm"} color="gray">
          {school}
        </Text>
      </VStack>
    </HStack>
  );
};
