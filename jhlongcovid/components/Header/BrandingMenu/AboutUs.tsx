import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Icon,
  Flex,
  Text,
  Spacer,
  CloseButton,
  VStack,
  Heading,
  HStack,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { selectHeight, selectWidth } from "../../../redux/slices/viewportSlice";
import { TeamMember } from "./TeamMember";

export const AboutUs = () => {
  const [presentAboutUs, setPresentAboutUs] = useState(false);
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);

  return (
    <>
      <Button
        leftIcon={<Icon as={MdHome} />}
        variant="ghost"
        onClick={() => setPresentAboutUs(true)}
        width="100%"
        justifyContent="start"
      >
        About us
      </Button>
      <Modal
        isOpen={presentAboutUs}
        onClose={() => setPresentAboutUs(false)}
        autoFocus={true}
        closeOnEsc={true}
        closeOnOverlayClick={true}
        useInert={false}
      >
        <ModalOverlay />
        <ModalContent
          style={{
            background: "white",
            minWidth: 410,
            maxWidth: 800,
            borderRadius: "35px",
            minHeight: height * 0.45,
            height: height < 720 ? height * 0.85 : "800px",
          }}
          mx="10px"
          containerProps={{
            overflow: "hidden",
          }}
        >
          <ModalHeader>
            <Flex>
              <Text fontSize={"2xl"}>About Us</Text>
              <Spacer />
              <CloseButton
                size={"md"}
                bgColor="spiritBlue.100"
                color={"heritageBlue.600"}
                onClick={() => {
                  setPresentAboutUs(false);
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
            <VStack spacing={5} w="100%" align={"start"}>
              <Text fontSize={"lg"}>
                Our team at Johns Hopkins is passionate about helping to better
                understand the prevalence and impact of long covid in the United
                States. We saw an opportunity to gather valuable information by
                creating a map-based crowd sourcing application, where
                individuals could share their experiences and any ongoing
                symptoms they may be facing. We are committed to using this tool
                to not only gather important data, but also to provide support
                and resources to those affected by long covid.
              </Text>
              <Text fontSize={"lg"} fontWeight="semibold">
                The research was, in part, funded by the National Institutes of
                Health (NIH) Agreement 1OT2HL156812 through the National Heart,
                Lung, and Blood Institute (NHLBI) CONNECTS program.
              </Text>
              <VStack spacing={5} w="100%" align={"start"}>
                <Heading size={"sm"}>Team Members</Heading>
                <Wrap spacingY={"30px"}>
                  <TeamMember
                    name={"Josef Coresh, MD"}
                    role={"Professor"}
                    school={"Bloomberg School of Public Health"}
                    image="./JosefCoreshHeadshot.jpg"
                  />
                  <TeamMember
                    name={"Elizabeth Oelsner, MD, MPH"}
                    role={"Associate Professor"}
                    school={"Columbia University Irving Medical Center"}
                    image="./ElizabethOelsnerHeadshot.jpg"
                  />
                  <TeamMember
                    name={"Ahmed Hassoon, MD"}
                    role={"Assistant Scientist"}
                    school={"Bloomberg School of Public Health"}
                    image="./AhmedHeadshot.jpg"
                  />
                  <TeamMember
                    name={"Nathan Farrell, BS"}
                    role={"Lead Software Engineer"}
                    school={"Johns Hopkins School of Medicine"}
                    image="./NateHeadshot.jpg"
                  />
                  <WrapItem>
                    <TeamMember
                      name={"Hubert Leo, BS"}
                      role={"Software Engineer"}
                      school={"Johns Hopkins University Grad"}
                      image="./HubertHeadshot.jpg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <TeamMember
                      name={"Nora Xu"}
                      role={"Software Engineer"}
                      school={"Johns Hopkins University"}
                      image="./NoraHeadshot.jpg"
                    />
                  </WrapItem>
                </Wrap>
              </VStack>
            </VStack>

            {/* Leading PI of the team: <br />
            Ahmed Hasson; Joseph Coresh;
            <br />
            Members of the development team: <br />
            Nathan Farrel; Hubert Leo; Nora Xu;
            <br />
            <br />
            We would like to thank C4R for providing us with NIH approved
            questions regarding the recovery of COVID-19 and related
            complications. */}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
