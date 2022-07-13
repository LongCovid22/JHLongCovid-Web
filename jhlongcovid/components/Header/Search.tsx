import { Box, Input, IconButton, Flex } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Header.module.css";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <Flex
      className={styles.leftHeaderStack}
      align="center"
      gap={3}
      boxShadow={"xl"}
    >
      <Box flex={1}>
        <Input
          variant="unstyled"
          placeholder="Search for an address"
          className={styles.search}
        />
      </Box>
      <Box>
        <IconButton
          aria-label="Search address"
          icon={<SearchIcon />}
          borderRadius={"50%"}
          color="#002D72"
        />
      </Box>
    </Flex>
  );
};
