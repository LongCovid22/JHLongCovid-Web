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
} from "@chakra-ui/react";
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

interface ProfileCheckinProps {}

const animationKeyframes = keyframes`
0% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 rgba(0, 101, 255, 0.7);
}

70% {
  transform: scale(1);
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
}

100% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
`;

const animation = `${animationKeyframes} 1.5s infinite`;

interface ProfileCheckinProps {}

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
        colorScheme="hopkinsBlue"
        onClick={onOpen}
        animation={!isOpen ? animation : undefined}
      >
        Contribute
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
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

export const ProfileCheckin: React.FC<ProfileCheckinProps> = () => {
  // return(<BasicUsage />)
  const width = useAppSelector(selectWidth);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const signOut = async () => {
    await Auth.signOut();
    dispatch(resetUser());
  };

  return (
    <Flex
      className={styles.rightHeaderStack}
      align="center"
      gap={2}
      boxShadow={"xl"}
      style={{
        minWidth: width < 700 ? "410px" : "250px",
        top: width < 700 ? "70px" : "0px",
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
  );
};
