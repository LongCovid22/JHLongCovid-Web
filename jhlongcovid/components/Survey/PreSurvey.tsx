import React, { useState, useEffect } from "react";
import {
    Button,
    Flex,
    Center,
    Image,
    Avatar,
    Modal,
    ModalCloseButton,
    ModalContent,
    CloseButton,
    ModalFooter,
    HStack,
    useDisclosure,
    IconButton,
    Checkbox,
    Box,
    ModalBody,
    ModalHeader,
    Text,
    Spacer,
    VStack,
    Link,
    Input,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import {
    initQuestions,
    nextQuestion,
    prevQuestion,
    selectCurrentAnswer,
    selectCurrentQuestion,
    selectIsFirstQuestion,
    selectIslastQuestion,
} from "../../redux/slices/surveySlice";
import { Welcome } from "./SurveyBody/Welcome";
import { Consent } from "./SurveyBody/Consent";
import { Demographics } from "./SurveyBody/Demographics";
import { ChoiceQuestion } from "./SurveyBody/ChoiceQuestion";
import { InputQuestion } from "./SurveyBody/InputQuestion";
import { Password } from "./SurveyBody/Password";
import { ThankYou } from "./SurveyBody/ThankYou";
import { MFA } from "./SurveyBody/MFA";
import { ScaleQuestion } from "./SurveyBody/ScaleQuestion";
import { MultiChoiceQuestion } from "./SurveyBody/MultiChoiceQuestion";

import { Landing } from "./PreSurvey/Landing";

import { SignIn } from "./PreSurvey/SignIn";
import { SignUp } from "./PreSurvey/SignUp";

// import mobileHealth from '../mobileHealth.jpg';


interface SurveyWrapperProps {
    onClose: () => void;
    setShowSurvey : (bool : boolean) => void;
}

export interface SurveyQuestionProps {
    currentQuestion: any;
    setAnswer: (answer: any) => void;
    setErrorPresent?: (error: boolean) => void;
    setErrorText?: (text: string) => void;
}

export const PreSurvey: React.FC<SurveyWrapperProps> = ({ onClose, setShowSurvey }) => {
    const width = useAppSelector(selectWidth);
    const height = useAppSelector(selectHeight);
    const currentQuestion = useAppSelector(selectCurrentQuestion);
    const currentAnswer = useAppSelector(selectCurrentAnswer);
    const isFirstQuestion = useAppSelector(selectIsFirstQuestion);
    const isLastQuestion = useAppSelector(selectIslastQuestion);
    const dispatch = useAppDispatch();
    const [answer, setAnswer] = useState<string | string[] | object | null>(
        currentQuestion.answer
    );
    const [isFinalSection, setIsFinalSection] = useState(false);
    const [missingAnswer, setMissingAnswer] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [errorPresent, setErrorPresent] = useState(false);

    const [currentPage, setCurrentPage] = useState("landing");

    const handleQuestionChange = (direction: "next" | "prev") => {
        if (direction === "next") {
            if (currentPage === "landing") {
                setCurrentPage("signIn")
            } else if (currentPage === "signIn") {
                setCurrentPage("signUp")
            } else if (currentPage === "signUp") {
                setShowSurvey(true);
            }
        } else {
            if (currentPage === "signUp") {
                setCurrentPage("landing")
            } else if (currentPage === "signIn") {
                setCurrentPage("landing");
            }
        }
    };

    useEffect(() => {
        setIsFinalSection(
            currentQuestion.answerFormat === "mfa" ||
            currentQuestion.answerFormat === "thankYou" ||
            currentQuestion.answerFormat === "password"
        );
    }, [currentQuestion]);

    useEffect(() => {
        setErrorText("");
        setMissingAnswer(false);
        setErrorPresent!(false);
        setAnswer(currentAnswer);
    }, [currentAnswer, currentQuestion]);

    return (
        <ModalContent
            style={{
                background: "white",
                width: width < 700 ? 410 : width * 0.45,
                minWidth: 410,
                maxWidth: width * 0.45,
                minHeight: height * 0.35,
                height: height < 720 ? height * 0.75 : "600px",
                borderRadius: "35px",
            }}
        >
            <ModalHeader>
                <Flex>
                    <Text fontSize={"2xl"}>{currentQuestion.title}</Text>
                    <Spacer />
                    <CloseButton
                        size={"md"}
                        bgColor="hopkinsBlue.100"
                        color={"hopkinsBlue.600"}
                        onClick={() => {
                            onClose();
                            dispatch(initQuestions({ authId: null }));
                        }}
                    />
                </Flex>
            </ModalHeader>
            <ModalBody
                style={{
                    overflowY: "auto",
                }}
            >
                {currentPage === "landing" && (
                     <Landing setShowSurvey = {setShowSurvey} setCurrentPage = {setCurrentPage}>
                     </Landing>
                )}

                {currentPage === "signIn" && (
                    <SignIn setShowSurvey = {setShowSurvey} setCurrentPage = {setCurrentPage}></SignIn>
                )}

                {currentPage === "signUp" && (
                    <SignUp setShowSurvey = {setShowSurvey} setCurrentPage = {setCurrentPage}></SignUp>
                )
                }
            </ModalBody>

            <ModalFooter>
                <HStack>

                    {(currentPage === "signIn" || currentPage === "signUp") && (
                        <Button
                        background={"hopkinsBlue.100"}
                        color={"hopkinsBlue.500"}
                        borderRadius={500}
                        onClick={() => {
                            handleQuestionChange("prev");
                        }}
                    >
                        Previous
                    </Button>
                    )}
                    
                    {/* <Button
                        colorScheme="hopkinsBlue"
                        borderRadius={500}
                        onClick={() => {
                            handleQuestionChange("next");
                        }}
                    >
                        Next
                    </Button> */}
                </HStack>
            </ModalFooter>
        </ModalContent>
    );
};
