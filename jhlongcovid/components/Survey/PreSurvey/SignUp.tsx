//username, password, MFA, submit button
import {
    VStack,
    Heading,
    Input,
    Button,
} from "@chakra-ui/react";
import { Dispatch } from "@reduxjs/toolkit";

import { SetStateAction, useState } from "react";

function sendEmail(emailConfirmed: boolean, setEmailConfirmed) {
    setEmailConfirmed(!emailConfirmed);
}

export const SignUp: React.FC = () => {
    const [emailConfirmed, setEmailConfirmed] = useState(true);

    return (
        <VStack>
            <Heading>
                SignUp
            </Heading>
            <Input placeholder="username"></Input>
            <Input placeholder="password"></Input>
            <Button onClick = {() => {sendEmail(emailConfirmed, setEmailConfirmed)}}>
                Send Code to Email for Confirmation
            </Button>

            {emailConfirmed &&
                <>
                    <Heading>
                        Confirmation Code
                    </Heading>
                    <Input placeholder="7 digit pin"></Input>

                    <Button>
                        Submit
                    </Button>
                </>


            }



        </VStack>

    )
}