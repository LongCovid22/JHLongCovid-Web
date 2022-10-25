// username, password, submit button

import {
    VStack,
    Input,
    Heading,
    Button
} from "@chakra-ui/react"

import { useState } from "react";

import { Auth } from 'aws-amplify';

interface SignInProps {
    setCurrentPage: (page: string) => void;
    setShowSurvey : (bool : boolean) => void;
}

async function signIn(username: string, password: string, setShowSurvey :(bool : boolean) => void) {
    try {
        const user = await Auth.signIn(username, password);
        setShowSurvey(true);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export const SignIn: React.FC<SignInProps> = ({ setCurrentPage, setShowSurvey }) => {

    const [username, setUserName] = useState("");
    const changeUserName = (event) => setUserName(event.target.value);

    const [password, setPassword] = useState("");
    const changePassword = (event) => setPassword(event.target.value);

    return (
        <VStack>
            <Heading>
                Sign In!
            </Heading>
            <Input placeholder='username' onChange={changeUserName}>
            </Input>
            <Input type="password" placeholder='password' onChange={changePassword}>
            </Input>
            <Button onClick={() => {
                signIn(username, password, setShowSurvey);
            }}>
                Submit
            </Button>

        </VStack>

    )
}