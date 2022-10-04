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

// import mobileHealth from '../mobileHealth.jpg';


interface SurveyWrapperProps {
    onClose: () => void;
}

export interface SurveyQuestionProps {
    currentQuestion: any;
    setAnswer: (answer: any) => void;
    setErrorPresent?: (error: boolean) => void;
    setErrorText?: (text: string) => void;
}

export const FirstPage: React.FC<SurveyWrapperProps> = ({ onClose }) => {
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
    // const []

    const handleQuestionChange = (direction: "next" | "prev") => {
        if (direction === "next") {
            if (
                currentQuestion.answerFormat !== "welcome" &&
                currentQuestion.answerFormat !== "password"
            ) {
                if (currentQuestion.answerFormat === "demographics") {
                    let emptyFields = [];
                    if (answer !== null) {
                        let demographics = answer as {
                            zip: string;
                            age: string;
                            race: string;
                        };
                        if (demographics.zip === "") {
                            emptyFields.push("zip code");
                        }
                        if (demographics.age === "") {
                            emptyFields.push("age");
                        }
                        if (demographics.race === "") {
                            emptyFields.push("race");
                        }

                        if (emptyFields.length > 0) {
                            setErrorText(`Please provide ${emptyFields.join(", ")}`);
                            setMissingAnswer(true);
                            return;
                        }
                    }
                }

                if (
                    answer === "" ||
                    answer === null ||
                    (Array.isArray(answer) && answer.length === 0) ||
                    (Array.isArray(answer) &&
                        answer.filter((element) => element === "").length > 0)
                ) {
                    setErrorText("Please provide an answer to the missing fields");
                    setMissingAnswer(true);
                    return;
                } else {
                    setMissingAnswer(false);
                }
            }

            if (!errorPresent) {
                dispatch(nextQuestion({ answer: answer }));
            }
        } else {
            dispatch(prevQuestion({ answer: answer }));
        }
        setAnswer("");
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
                {/* <Body
          currentQuestion={currentQuestion}
          setAnswer={setAnswer}
          setErrorPresent={setErrorPresent}
          setErrorText={setErrorText}
        /> */}


                <Center>
                    <VStack spacing={5}>
                        <Image src="/jhu_logo.jpg" maxW="300px" />
                        <Text fontSize={"2xl"}>Welcome to the Long Covid Survey!</Text>
                        <Image src="/mobile_health.jpg" maxW = "100px"/>
                        <HStack spacing={6}>
                            <Button
                                colorScheme="hopkinsBlue"
                                borderRadius={500}
                            >
                                Sign Up
                            </Button>

                            <Button
                                colorScheme="hopkinsBlue"
                                borderRadius={500}
                            >
                                Sign In
                            </Button>

                            <Button
                                colorScheme="hopkinsBlue"
                                borderRadius={500}
                            >
                                Contribute as Guest
                            </Button>
                        </HStack>
                        <Center>
                            <Text>
                                <Link color='blue.900' href='#'>
                                    I've completed the survey as a guest and want to sign up.
                                </Link>
                            </Text>
                        </Center>

                    </VStack>

                </Center>



            </ModalBody>
        </ModalContent>
    );
};
