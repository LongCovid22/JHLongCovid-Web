import React, { useEffect, useMemo } from "react";
import {
    VStack,
    Text,
    Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox
} from "@chakra-ui/react";
import { SurveyQuestionProps } from "../SurveyBody";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Lottie from "lottie-react";
import GreenCheck from "../../../theme/lottie/GreenCheck.json";

import { useAppSelector } from "../../../redux/hooks";
import {
    selectAnswerStack,
    selectQuestions,
    selectQuestionStack,
} from "../../../redux/slices/surveySlice/surveySlice";


export const ReviewAnswers: React.FC<SurveyQuestionProps> = ({
    currentQuestion,
    setAnswer,
}) => {

    const results = {
        questionStack: useAppSelector(selectQuestionStack),
        answerStack: useAppSelector(selectAnswerStack),
        questions: useAppSelector(selectQuestions)
    }




    const parseQuestionWithReplacements = (questionObj: any) => {
        //for the case where question has <timeframe> for instance, need to replace with objects.timeframe
        //generalized for ANY case so its not just timeframe
        const placeholderRegex = /<([^>]+)>/g;
        const questionWithReplacements = questionObj.question.replace(
            placeholderRegex,
            (match: any, placeholder: any) => {
                return questionObj[placeholder] || match;
            }
        );
        const questionWithTags = `${questionWithReplacements}`;
        return questionWithTags;
    };

    function capitalizeEachWord(str: any) {
        return str.replace(/\b./g, (match: any) => match.toUpperCase());
    }

    const questions = [];
    const answers: any[] = [];
    for (let i = 0; i < results.questionStack.length; i++) {
        const question =
            results.questions[results.questionStack[i].section][
            results.questionStack[i].question
            ];
        const answer = results.answerStack[i];

        if (
            question.answerFormat !== "welcome" &&
            question.answerFormat !== "consent" &&
            question.answerFormat !== "account" &&
            question.answerFormat !== "thankYou"
        ) {
            //follows logic of get
            if (Array.isArray(question.answerFormat)) {
                if (question.answerFormat.includes("multichoice")) {
                    const { choices, other } = answer;
                    questions.push(parseQuestionWithReplacements(question));
                    //includes everything in choices array separated with comma, and in other if there's a valid string
                    const ans = choices.concat(other).filter(Boolean).join(", ");
                    answers.push(ans);
                } else {
                    //includes choice or something else
                    questions.push(parseQuestionWithReplacements(question));
                    answers.push(answer);
                }
            } else if (question.answerFormat === "scale") {
                //specifically for question No. 30
                questions.push(`${parseQuestionWithReplacements(question)}`);
                answers.push("");
                for (let i = 0; i < question.options.length; i++) {
                    questions.push(question.options[i]);
                    answers.push(question.scale[answer[i]]);
                    // answers.push(answer[i]);
                }
            } else if (question.answerFormat === "demographics") {
                const propertyNames = ["age", "race", "sex", "height", "weight"];
                let { age, race, sex, feet, inches, weight } = answer;
                race = capitalizeEachWord(race);
                sex = capitalizeEachWord(sex);
                propertyNames.forEach((propertyName) => {
                    if (propertyName === "height") {
                        questions.push(
                            capitalizeEachWord(propertyName) + " (Feet and Inches)"
                        );
                    } else if (propertyName === "weight") {
                        questions.push(capitalizeEachWord(propertyName) + " (Pounds)");
                    } else {
                        questions.push(capitalizeEachWord(propertyName));
                    }

                    if (propertyName === "height") {
                        let height = (feet && inches) ? `${feet}' ${inches}"` : "";
                        answers.push(height);
                    } else {
                        answers.push(eval(propertyName));
                    }
                });
            } else if (question.answerFormat === "review") {
                //skip this one last question (redudant)
            } 
            else {
                questions.push(parseQuestionWithReplacements(question));
                answers.push(answer);
            }
        }
    }



    return (
        <>
            <VStack height={"100%"} spacing={"25px"}>
                <Text fontSize={"lg"} fontWeight={"regular"}>
                    {currentQuestion.question}
                </Text>

                <Box w="100%">
                    <Table variant="striped" colorScheme="spiritBlue">
                        <Thead>
                            <Tr>
                                <Th>Questions</Th>
                                <Th>Answers</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {questions.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item}</Td>
                                    <Td>{answers[index]}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>

                <Checkbox onChange={(e) => setAnswer(e.target.checked)}>
                    I certify that the answers to the survey were completed by myself and are true and correct.
                </Checkbox>
            </VStack>
        </>
    );
};
