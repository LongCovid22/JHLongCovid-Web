import {
  Button,
  Center,
  Image,
  HStack,
  Text,
  VStack,
  Link,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { AuthenticationForm } from "../../Header/AuthenticationForm/AuthenticationForm";

interface LandingProps {
  setShowSurvey: (bool: boolean) => void;
  setCurrentPage: (page: string) => void;
}

export const Landing: React.FC<LandingProps> = ({
  setShowSurvey,
  setCurrentPage,
}) => {
  return (
    <Center>
      <VStack spacing={"25px"}>
        <Image src="/jhu_logo.jpg" maxW="45%" />
        <Text fontSize={"xl"} fontWeight="500">
          Welcome to the JH Long COVID Survey!
        </Text>
        <AuthenticationForm />
      </VStack>
    </Center>
  );
};
