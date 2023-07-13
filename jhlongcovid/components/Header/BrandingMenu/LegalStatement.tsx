import React from "react";
import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  Text,
  Spacer,
  CloseButton,
} from "@chakra-ui/react";
import { ImNewspaper } from "react-icons/im";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { selectHeight, selectWidth } from "../../../redux/slices/viewportSlice";

export const LegalStatement = () => {
  const [presentLegalStatement, setPresentLegalStatement] = useState(false);
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);

  return (
    <>
      <Button
        leftIcon={<Icon as={ImNewspaper} />}
        variant="ghost"
        onClick={() => setPresentLegalStatement(true)}
        width="100%"
        justifyContent="start"
      >
        Legal Statement
      </Button>
      <Modal
        isOpen={presentLegalStatement}
        onClose={() => setPresentLegalStatement(false)}
        useInert={true}
        closeOnEsc={false} closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent
          style={{
            background: "white",
            width: width < 700 ? 410 : width * 0.45,
            minWidth: 410,
            maxWidth: 750,
            borderRadius: "35px",
          }}
          containerProps={{
            overflow: "hidden",
          }}
        >
          <ModalHeader>
            <Flex>
              <Text fontSize={"2xl"}>Legal Statement</Text>
              <Spacer />
              <CloseButton
                size={"md"}
                bgColor="spiritBlue.100"
                color={"heritageBlue.600"}
                onClick={() => {
                  setPresentLegalStatement(false);
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
            This website is provided on an "as is" basis. The Johns Hopkins
            University disclaims all responsibility for any loss, injury, claim,
            liability, or damage of any kind resulting from, arising out of, or
            any way related to any errors in or omissions from this website and
            the content, including but not limited to technical inaccuracies and
            typographical errors. The Johns Hopkins University does not warrant
            or present that the information available on or through the site
            will be correct, accurate, timely, or otherwise reliable. The Johns
            Hopkins University may make improvements and/or changes to its
            features, functionality, or content at any time.
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
