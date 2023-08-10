import {
  HStack,
  Text,
  Button,
  Flex,
  Avatar,
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

import React, { createContext } from "react";
import {
  AuthenticationForm,
  AuthState,
} from "./AuthenticationForm/AuthenticationForm";
import { resetUser, selectUser } from "../../redux/slices/userSlice";
import { Auth } from "aws-amplify";
import { Survey } from "./Survey";

export const TestContext = createContext(false);

//Component for the top right corner

export interface ProfileCheckinProps {
  showInstructions?: boolean;
  setShowInstructions?: React.Dispatch<React.SetStateAction<boolean>>;
  showSurveyOnLaunch?: boolean;
  setShowSurveyOnLaunch?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfileCheckin: React.FC<ProfileCheckinProps> = ({
  showInstructions,
  setShowInstructions,
  showSurveyOnLaunch,
  setShowSurveyOnLaunch,
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
      right={width < 700 ? "30px" : "20px"}
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
          if (setShowInstructions) setShowInstructions(!showInstructions);
        }}
      />
      <Flex
        className={styles.rightHeaderStack}
        align="center"
        gap={2}
        boxShadow={"xl"}
        style={{
          minWidth: width < 700 ? "350px" : "280px",
        }}
      >
        <TestContext.Provider value={true}>
          <Survey
            showSurveyOnLaunch={showSurveyOnLaunch}
            setShowSurveyOnLaunch={setShowSurveyOnLaunch}
          />
        </TestContext.Provider>

        <Menu isLazy>
          <MenuButton>
            <Avatar></Avatar>
          </MenuButton>
          <MenuList p={"15px"} borderRadius={"15px"} alignContent={"center"}>
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
