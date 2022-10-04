// username, password, submit button

import {
    VStack,
    Input,
    Heading,
    Button
} from "@chakra-ui/react"

export const SignIn: React.FC = () => {
    return(
        <VStack>
            <Heading>
                Sign In!
            </Heading>
            <Input placeholder = 'username'>
            </Input>
            <Input placeholder = 'password'>
            </Input>
            <Button>
                Submit
            </Button>

        </VStack>

    )
}