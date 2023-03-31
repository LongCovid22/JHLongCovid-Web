import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
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
  Spinner,
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
  videoUrl?: string | undefined;
};

export const InstructionStep: React.FC<InstructionStepProps> = ({
  step,
  setInstructionStep,
  videoUrl,
}) => {
  switch (step) {
    case "intro":
      return <IntroInstructionStep setInstructionStep={setInstructionStep} />;
    case "survey":
      return (
        <SurveyInstructionStep
          setInstructionStep={setInstructionStep}
          videoUrl={videoUrl}
        />
      );
    case "visualization":
      return (
        <VisualizationInstructionStep
          setInstructionStep={setInstructionStep}
          videoUrl={videoUrl}
        />
      );
    case "end":
      return <EndInstructionStep setInstructionStep={setInstructionStep} />;
    default:
      return <Spinner />;
  }
};

export const HeaderText: React.FC<{ step: InstructionStep }> = ({ step }) => {
  switch (step) {
    case "intro":
      return <Text fontSize={"2xl"} fontWeight={"bold"}></Text>;
    case "survey":
      return (
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Participate
        </Text>
      );
    case "visualization":
      return (
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Explore the Data
        </Text>
      );
    case "end":
      return <Text></Text>;
  }
};

export const Instructions: React.FC<InstructionsProps> = ({
  showInstructions,
  setShowInstructions,
}) => {
  const [step, setInstructionStep] = useState<InstructionStep>("intro");
  const [surveyVidUrl, setSurveyVidUrl] = useState<string | undefined>();
  const [dataVisVidUrl, setDataVisVidUrl] = useState<string | undefined>();
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
        setInstructionStep("survey");
        break;
      case "survey":
        setInstructionStep("visualization");
        break;
      case "visualization":
        setInstructionStep("end");
        break;
      case "end":
        setShowInstructions(false);
        // setInstructionStep("intro");
        break;
    }
  };

  const getSurveyVideoUrl = async () => {
    const url = await Storage.get("participationInstructional.mp4", {
      level: undefined,
    });
    setSurveyVidUrl(url);
  };

  const getVisVideoUrl = async () => {
    const url = await Storage.get("DataVisualsExample.mp4", {
      level: undefined,
    });
    setDataVisVidUrl(url);
  };

  const urlForStep = () => {
    if (step === "survey") {
      return surveyVidUrl;
    } else if (step === "visualization") {
      return dataVisVidUrl;
    } else {
      return undefined;
    }
  };

  useEffect(() => {
    getSurveyVideoUrl();
    getVisVideoUrl();
  }, []);

  useEffect(() => {
    if (showInstructions) {
      setInstructionStep("intro");
    }
  }, [showInstructions]);

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
          width: width < 700 ? 410 : width * 0.6,
          minWidth: 410,
          maxWidth: 1000,
          minHeight: height * 0.6,
          maxHeight: height * 0.9,
          // height: height < 720 ? height * 0.9 : "700px",
          borderRadius: "35px",
        }}
        containerProps={{
          overflow: "hidden",
        }}
      >
        <ModalHeader>
          <Flex>
            <HeaderText step={step} />
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
            overflowY: "hidden",
            paddingTop: "0px",
          }}
        >
          <InstructionStep
            step={step}
            setInstructionStep={setInstructionStep}
            videoUrl={urlForStep()}
          />
        </ModalBody>
        <ModalFooter>
          <HStack w="100%">
            <Image src="./crHorizontal.png" w="200px" alt="Hopkins Logo" />
            <Spacer />
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
