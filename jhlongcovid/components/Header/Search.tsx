import {
  Box,
  Flex,
  useDisclosure,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";
import SearchLocationInput from "./SearchLocationInput";
import { BrandingMenu } from "./BrandingMenu/BrandingMenu";

interface SearchProps {
  markerData: any;
  markerType: any;
}

export const Search: React.FC<SearchProps> = ({ markerType, markerData }) => {
  const [input, setInput] = React.useState("");
  const [places, setPlaces] = React.useState([]);

  return (
    <>
      <Flex
        className={styles.leftHeaderStack}
        align="center"
        gap={3}
        boxShadow={"xl"}
      >
        <BrandingMenu />
        <SearchLocationInput markerType={markerType} markerData={markerData} />
      </Flex> 

      {input.length > 0 && places.length > 0 && places[0] != null && (
        <Flex
          className={styles.newLeft}
          align="center"
          gap={3}
          boxShadow={"xl"}
        >
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            {places.map((value, index) => (
              <Box key={index} h="30px">
                {value}
              </Box>
            ))}
          </VStack>
        </Flex>
      )}
    </>
  );
};
