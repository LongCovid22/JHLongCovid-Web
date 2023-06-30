import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  IconButton,
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
import { LongitudinalInstructionStep } from "./InstructionSteps/LongitudinalInstructionStep";

export type InstructionStep =
  | "intro"
  | "survey"
  | "visualization"
  | "end"
  | "longitudinal";

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
    case "longitudinal":
      return (
        <LongitudinalInstructionStep
          setInstructionStep={setInstructionStep}
          videoUrl={videoUrl}
        />
      );
    default:
      return null;
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
    case "longitudinal":
      return (
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Longitudinal Study
        </Text>
      );
  }
};

export const Instructions: React.FC<InstructionsProps> = ({
  showInstructions,
  setShowInstructions,
}) => {
  const [step, setInstructionStep] = useState<InstructionStep>("intro");
  const [surveyVidUrl, setSurveyVidUrl] = useState<string | undefined>();
  const [dataVisVidUrl, setDataVisVidUrl] = useState<string | undefined>();
  const [longVisVidUrl, setLongVisVidUrl] = useState<string | undefined>();
  const width = useSelector(selectWidth);
  const height = useSelector(selectHeight);

  const getSurveyVideoUrl = async () => {
    const url = await Storage.get("SurveyInstructional.mp4", {
      level: undefined,
    });
    setSurveyVidUrl(url);
  };

  const getVisVideoUrl = async () => {
    const url = await Storage.get("AnalyzeInstructional.mp4", {
      level: undefined,
    });
    setDataVisVidUrl(url);
  };

  const getLongVideoUrl = async () => {
    const url = await Storage.get("LongInstructional.mp4", {
      level: undefined,
    });
    setLongVisVidUrl(url);
  };

  const urlForStep = () => {
    if (step === "survey") {
      return surveyVidUrl;
    } else if (step === "visualization") {
      return dataVisVidUrl;
    } else if (step === "longitudinal") {
      return longVisVidUrl;
    }
  };

  useEffect(() => {
    getSurveyVideoUrl();
    getVisVideoUrl();
    getLongVideoUrl();
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
          width: width < 700 ? 410 : width * 0.65,
          minWidth: 410,
          maxWidth: 1100,
          minHeight: height * 0.7,
          maxHeight: height * 0.95,
          // height: height < 720 ? height * 0.9 : "700px",
          borderRadius: "35px",
          padding: "15px",
        }}
        containerProps={{
          overflow: "hidden",
        }}
      >
        <ModalHeader>
          <Flex>
            {step !== "intro" && (
              <IconButton
                aria-label="Back"
                icon={<ChevronLeftIcon fontSize={"35px"} />}
                size="md"
                variant={"outline"}
                border="none"
                top={"0px"}
                colorScheme="spiritBlue"
                onClick={() => {
                  setInstructionStep("intro");
                }}
              />
            )}
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
            overflowY: "auto",
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
          <HStack w="100%" spacing={"15px"}>
            <Image src="./crHorizontal.png" w="200px" alt="Hopkins Logo" />
            <Spacer />
            {width > 700 && (
              <Text color={"gray.400"} fontSize="xs" w="45%" align={"right"}>
                All survey questionnaires were developed in line with the
                Collaborative Cohort of Cohorts for COVID-19 Research (C4R). 
              </Text>
            )}

            {/* 
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
            </Button> */}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
