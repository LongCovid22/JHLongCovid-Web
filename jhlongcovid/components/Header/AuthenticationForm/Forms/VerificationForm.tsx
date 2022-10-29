import React from "react";
import { AuthState } from "../AuthenticationForm";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Spacer,
  Button,
  Text,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";

interface VerificationProps {
  qrString: string;
  changeAuthState: (state: AuthState) => void;
}

export const VerificationForm: React.FC<VerificationProps> = ({
  qrString,
  changeAuthState,
}) => {
  return (
    <VStack width="75%" maxW="450px" minW="325px" spacing="25px">
      <VStack w="100%">
        <Heading size={"md"} mb="5px">
          Scan QR Code
        </Heading>
        <Text>
          Scan the below bar code using your authenticator app of choice (e.g.
          Google Authenticator)
        </Text>
      </VStack>
      <QRCode value={qrString} />
      <HStack spacing={3} width="100%">
        <Spacer />
        <Button
          colorScheme="hopkinsBlue"
          borderRadius={500}
          onClick={(event) => {
            // Perform Amplify sign up
          }}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};
