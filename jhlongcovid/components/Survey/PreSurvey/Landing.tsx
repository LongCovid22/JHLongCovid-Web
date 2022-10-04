import {
    Button,
    Center,
    Image,
    HStack,
    Text,
    VStack,
    Link,
} from "@chakra-ui/react";

export const Landing: React.FC = () => {
    return (
        <Center>
            <VStack spacing={5}>
                <Image src="/jhu_logo.jpg" maxW="45%" />
                <Text fontSize={"2xl"}>Welcome to the Long Covid Survey!</Text>
                <Image src="/mobile_health.jpg" maxW="35%" />
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
    )
}