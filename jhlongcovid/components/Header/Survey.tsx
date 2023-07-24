import {
    Button,
    Modal,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";

  import {
    useEffect, 
    useCallback
  } from "react"
  import { useAppDispatch, useAppSelector } from "../../redux/hooks";
  import { SurveyWrapper } from "../Survey/SurveyWrapper";
  import { selectUser } from "../../redux/slices/userSlice";
  import { initQuestions } from "../../redux/slices/surveySlice/surveySlice";
  import { ProfileCheckinProps } from "./ProfileCheckin";

export const Survey: React.FC<ProfileCheckinProps> = ({
    showSurveyOnLaunch,
    setShowSurveyOnLaunch,
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();
  
    const closeSurvey = () => {
      if (setShowSurveyOnLaunch) setShowSurveyOnLaunch(false);
      onClose();
    };

    const handleSurveyOpen = useCallback(() => {
        dispatch(initQuestions(user));
        onOpen();
    }, [user, dispatch, onOpen])
      
    useEffect(() => {
      if (showSurveyOnLaunch) {
        handleSurveyOpen();
      }
    }, [showSurveyOnLaunch, handleSurveyOpen]);
   
    return (
      <>
        <Button
          flex={1}
          borderRadius={"500px"}
          textColor="white"
          colorScheme="heritageBlue"
          onClick={handleSurveyOpen}
        >
          Participate
        </Button>
        <Modal isOpen={isOpen} onClose={closeSurvey} isCentered size={"lg"} closeOnEsc={false} closeOnOverlayClick={false}>
          <ModalOverlay p="30px" />
          <SurveyWrapper onClose={closeSurvey} />
          {/* {showSurvey && <SurveyWrapper onClose={onClose} />} */}
          {/* {showSurvey === false && (
            <PreSurvey onClose={onClose} setShowSurvey={setShowSurvey} />
          )} */}
        </Modal>
      </>
    );
  };
  