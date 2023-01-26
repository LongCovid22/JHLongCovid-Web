import React from "react";
import {
  Spacer,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  CloseButton,
  ModalFooter,
  Text,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectHeight, selectWidth } from "../../redux/slices/viewportSlice";
import { IntroInstructionStep } from "./InstructionSteps/IntroInstructionStep";
import { SurveyInstructionStep } from "./InstructionSteps/SurveyInstructionStep";
import { VisualizationInstructionStep } from "./InstructionSteps/VisualizationInstructionStep";
import { EndInstructionStep } from "./InstructionSteps/EndInstructionStep";

export type InstructionStep = "intro" | "survey" | "visualization" | "end";

interface InstructionsProps {
  showInstructions: boolean;
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
}

export type InstructionStepProps = {
  setInstructionStep: React.Dispatch<React.SetStateAction<InstructionStep>>;
  step?: InstructionStep;
};

export const InstructionStep: React.FC<InstructionStepProps> = ({
  step,
  setInstructionStep,
}) => {
  switch (step) {
    case "intro":
      return <IntroInstructionStep setInstructionStep={setInstructionStep} />;
    case "survey":
      return <SurveyInstructionStep setInstructionStep={setInstructionStep} />;
    case "visualization":
      return (
        <VisualizationInstructionStep setInstructionStep={setInstructionStep} />
      );
    case "end":
      return <EndInstructionStep setInstructionStep={setInstructionStep} />;
    default:
      return <Text>Default</Text>;
  }
};

export const Instructions: React.FC<InstructionsProps> = ({
  showInstructions,
  setShowInstructions,
}) => {
  const [step, setInstructionStep] = React.useState<InstructionStep>("intro");
  const width = useSelector(selectWidth);
  const height = useSelector(selectHeight);

  const handlePrevStep = () => {
    switch (step) {
      case "intro":
        return;
      case "survey":
        return setInstructionStep("intro");
      case "visualization":
        return setInstructionStep("survey");
      case "end":
        return setInstructionStep("visualization");
    }
  };

  const handleNextStep = () => {
    switch (step) {
      case "intro":
        return setInstructionStep("survey");
      case "survey":
        return setInstructionStep("visualization");
      case "visualization":
        return setInstructionStep("end");
      case "end":
        return;
    }
  };

  return (
    <Modal
      isOpen={showInstructions}
      onClose={() => setShowInstructions(false)}
      isCentered
      size={"lg"}
    >
      <ModalOverlay />
      <ModalContent
        style={{
          background: "white",
          width: width < 700 ? 410 : width * 0.45,
          minWidth: 410,
          maxWidth: 750,
          minHeight: height * 0.45,
          height: height < 720 ? height * 0.9 : "700px",
          borderRadius: "35px",
        }}
        containerProps={{
          overflow: "hidden",
        }}
      >
        <ModalHeader>
          <Flex>
            <Spacer />
            <CloseButton
              size={"md"}
              bgColor="spiritBlue.100"
              color={"heritageBlue.600"}
              onClick={() => {
                setShowInstructions(false);
              }}
            />
          </Flex>
        </ModalHeader>
        <ModalBody
          style={{
            overflowY: "auto",
            paddingTop: "0px",
          }}
        >
          <InstructionStep
            step={step}
            setInstructionStep={setInstructionStep}
          />
        </ModalBody>
        <ModalFooter>
          <HStack>
            {step !== "intro" && (
              <Button
                colorScheme="heritageBlue"
                borderRadius={500}
                onClick={() => {
                  handlePrevStep();
                }}
              >
                Prev
              </Button>
            )}
            <Button
              colorScheme="heritageBlue"
              borderRadius={500}
              onClick={() => handleNextStep()}
            >
              {step === "end" ? "Finish" : "Next"}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
