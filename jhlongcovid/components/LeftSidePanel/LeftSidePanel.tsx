import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Slide,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  selectLeftSidePanelPres,
  setLeftSidePanelPres,
} from "../../redux/slices/presentationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "../../styles/LeftSidePanel.module.css";

interface LeftSidePanelProps {}

export const LeftSidePanel: React.FC<LeftSidePanelProps> = () => {
  const dispatch = useAppDispatch();
  const presentLeftSidePanel = useAppSelector(selectLeftSidePanelPres);

  return (
    <>
      <Slide
        direction="left"
        in={presentLeftSidePanel}
        style={{
          minWidth: "410px",
          width: "35%",
          position: "absolute",
          top: "100px",
          left: presentLeftSidePanel ? "20px" : "0px",
          borderRadius: "40px",
          height: "calc(100% - 160px)",
        }}
      >
        <Box className={styles.leftSidePanel} boxShadow={"xl"} padding={"1rem"}>
          <VStack>
            <Flex width={"100%"}>
              <Spacer />
              <CloseButton
                size={"md"}
                onClick={() => {
                  dispatch(setLeftSidePanelPres(false));
                }}
              />
            </Flex>
            <Spacer />
          </VStack>
        </Box>
      </Slide>
    </>
  );
};
