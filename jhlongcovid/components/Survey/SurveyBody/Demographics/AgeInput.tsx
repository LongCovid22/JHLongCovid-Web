import React, { useState } from "react";

import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberInputStepper,
    NumberDecrementStepper,
    FormErrorMessage,
} from "@chakra-ui/react";


export type AgeInputProps = {
    demos: {
        age: string;
        race: string;
        sex: string;
        feet: string;
        inches: string;
        weight: string;
    };
    setDemos: React.Dispatch<
        React.SetStateAction<{
            age: string;
            race: string;
            sex: string;
            feet: string;
            inches: string;
            weight: string;
        }>
    >;
    setAnswer: (answer: any) => void;
    setAgeDemoError?: (error: boolean) => void;
};

export const AgeInput: React.FC<AgeInputProps> = ({
    demos,
    setDemos,
    setAnswer,
    setAgeDemoError,
}) => {
    const [ageErrorText, setAgeErrorText] = useState<string | null>(null);


    function isStringOfIntegers(input: string): boolean {
        // Use a regular expression to check if the string contains only integer digits
        return /^\d+$/.test(input);
    }


    function isValidPositiveInteger(input: string): boolean {
        if (!isStringOfIntegers(input)) {
            return false;
        }
        const parsedNumber = parseInt(input, 10); //Parse base 10
        return !isNaN(parsedNumber) && parsedNumber >= 12 && parsedNumber <= 100;
    };
    const handleAnswerChange = (value: string) => {
        let demosCopy = { ...demos };
        demosCopy["age" as keyof typeof demosCopy] = value;
        setDemos(demosCopy);
        if (isValidPositiveInteger(value) || value === "") {
            if (setAgeDemoError) { setAgeDemoError(false) };
            setAgeErrorText(null);
            setAnswer(demosCopy);
        } else {
            if (setAgeDemoError) { setAgeDemoError(true) };
            setAgeErrorText("Age must be valid number between 12 and 100");
        }

    };


    return (
        <FormControl isInvalid={ageErrorText !== null}>
            <FormLabel fontSize={"18px"}>Age</FormLabel>
            <NumberInput
                fontSize={"18px"}
                value={demos.age}
                onChange={(val) => {
                    handleAnswerChange(val);
                }}
                data-testid="age-input"
            >
                <NumberInputField fontSize={"18px"} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            {ageErrorText !== null && (
                <FormErrorMessage>{ageErrorText}</FormErrorMessage>
            )}
        </FormControl>
    );
};
