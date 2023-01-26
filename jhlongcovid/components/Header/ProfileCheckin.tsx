import {
  HStack,
  Text,
  Button,
  Flex,
  Avatar,
  keyframes,
  Modal,
  ModalOverlay,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  VStack,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import styles from "../../styles/Header.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectWidth } from "../../redux/slices/viewportSlice";
import { SurveyWrapper } from "../Survey/SurveyWrapper";

import { PreSurvey } from "../Survey/SurveyBody/PreSurvey";
import React, { useState } from "react";
import {
  AuthenticationForm,
  AuthState,
} from "./AuthenticationForm/AuthenticationForm";
import { resetUser, selectUser } from "../../redux/slices/userSlice";
import { Auth } from "aws-amplify";

interface ProfileCheckinProps {
  showInstructions: boolean;
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
}

function Survey() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showSurvey, setShowSurvey] = useState(false);

  const dispatch = useAppDispatch();
  return (
    <>
      <Button
        flex={1}
        borderRadius={"500px"}
        textColor="white"
        colorScheme="heritageBlue"
        onClick={onOpen}
      >
        Participate
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"lg"}>
        <ModalOverlay />
        <SurveyWrapper onClose={onClose} />
        {/* {showSurvey && <SurveyWrapper onClose={onClose} />} */}
        {/* {showSurvey === false && (
          <PreSurvey onClose={onClose} setShowSurvey={setShowSurvey} />
        )} */}
      </Modal>
    </>
  );
}

export const ProfileCheckin: React.FC<ProfileCheckinProps> = ({
  showInstructions,
  setShowInstructions,
}) => {
  // return(<BasicUsage />)
  const width = useAppSelector(selectWidth);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const signOut = async () => {
    await Auth.signOut();
    dispatch(resetUser());
  };

  return (
    <HStack
      position={"absolute"}
      top={width < 700 ? "90px" : "20px"}
      right="20px"
      maxW={"400px"}
      spacing="15px"
    >
      <IconButton
        icon={<QuestionIcon />}
        background={showInstructions ? "heritageBlue.500" : "white"}
        color={showInstructions ? "white" : "heritageBlue.500"}
        aria-label="Instructions"
        borderRadius="500px"
        size={"lg"}
        onClick={() => {
          setShowInstructions(!showInstructions);
        }}
      />
      <Flex
        className={styles.rightHeaderStack}
        align="center"
        gap={2}
        boxShadow={"xl"}
        style={{
          minWidth: width < 700 ? "410px" : "280px",
        }}
      >
        <Survey />
        <Menu isLazy>
          <MenuButton>
            <Avatar></Avatar>
          </MenuButton>
          <MenuList p={"15px"} borderRadius={"15px"}>
            {user ? (
              <VStack spacing="15px" marginY={"5px"}>
                <HStack>
                  <Text fontWeight={"600"}>Signed in as: </Text>
                  <Spacer />
                  <Text color={"gray"}>{user.email}</Text>
                </HStack>
                <Button
                  bg={"red"}
                  w={"100%"}
                  borderRadius="500px"
                  color={"white"}
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign Out
                </Button>
              </VStack>
            ) : (
              <AuthenticationForm
                initialAuthState={AuthState.SignIn}
                midSurvey={false}
                onVerify={() => {}}
              />
            )}
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
};
