import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Circle,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch, useState } from "react";

export type MarkerCircleDropdownProps = {
  setMarkerType?: React.Dispatch<
    React.SetStateAction<"totalLongCovid" | "totalCovid">
  >;
};

export const MarkerCircleDropdown: React.FC<MarkerCircleDropdownProps> = ({
  setMarkerType,
}) => {
  const [config, setMarkerCircleConfig] = useState<MarkerCircleConfig>({
    text: "Total Long COVID",
    type: "totalLongCovid",
  });

  const handleCircleChange = (value: "totalLongCovid" | "totalCovid") => {
    if (setMarkerType) setMarkerType(value);
    switch (value) {
      case "totalCovid":
        setMarkerCircleConfig({
          text: "Total COVID",
          type: "totalCovid",
        });
        break;
      case "totalLongCovid":
        setMarkerCircleConfig({
          text: "Total Long COVID",
          type: "totalLongCovid",
        });
        break;
    }
  };

  return (
    <Menu>
      <MenuButton
        shadow={"xl"}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="white"
        borderRadius="500px"
        size={"lg"}
        w="250px"
      >
        <MarkerCircleListItem config={config} />
      </MenuButton>
      <MenuList borderRadius="20px" px="5px">
        <MenuItem
          borderRadius={"5px"}
          onClick={() => {
            handleCircleChange("totalLongCovid");
          }}
        >
          <MarkerCircleListItem
            config={{
              text: "Total Long COVID",
              type: "totalLongCovid",
            }}
          />
        </MenuItem>
        <MenuItem
          borderRadius={"5px"}
          onClick={() => {
            handleCircleChange("totalCovid");
          }}
        >
          <MarkerCircleListItem
            config={{
              text: "Total COVID",
              type: "totalCovid",
            }}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

type MarkerCircleConfig = {
  text: string;
  type: "totalLongCovid" | "totalCovid";
};

type MarkerCircleListItemProps = {
  config: MarkerCircleConfig;
};

export const MarkerCircleListItem: React.FC<MarkerCircleListItemProps> = ({
  config,
}) => {
  const circleColorFill = () => {
    switch (config.type) {
      case "totalCovid":
        return "rgba(56, 161, 105, 0.35)";
      case "totalLongCovid":
        return "rgba(104, 172, 229, 0.35)";
    }
  };

  const circleColorBorder = () => {
    switch (config.type) {
      case "totalCovid":
        return "green.500";
      case "totalLongCovid":
        return "rgba(104, 172, 229, 1.0)";
    }
  };

  return (
    <HStack>
      <Circle
        size="30px"
        bg={circleColorFill()}
        border={"2px"}
        borderColor={circleColorBorder()}
      />
      <Text>{config.text}</Text>
    </HStack>
  );
};
