import React from "react";
import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Flex,
  Text,
  Spacer,
  CloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { MdChecklist } from "react-icons/md";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { selectHeight, selectWidth } from "../../../redux/slices/viewportSlice";

export const TermsOfService = () => {
  const [presentTOS, setPresentTOS] = useState(false);
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);

  return (
    <>
      <Button
        leftIcon={<Icon as={MdChecklist} />}
        variant="ghost"
        onClick={() => setPresentTOS(true)}
        width="100%"
        justifyContent="start"
      >
        Terms of Service
      </Button>

      <Modal
        isOpen={presentTOS}
        onClose={() => setPresentTOS(false)}
        useInert={false}
        closeOnEsc={true}
        closeOnOverlayClick={true}
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
              <Text fontSize={"2xl"}>Terms of Service</Text>
              <Spacer />
              <CloseButton
                size={"md"}
                bgColor="spiritBlue.100"
                color={"heritageBlue.600"}
                onClick={() => {
                  setPresentTOS(false);
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
            Users of this website shall abide by all applicable federal, state,
            and local laws, including those pertaining to libel, slander,
            defamation, trade libel, product disparagement, harassment, invasion
            of privacy, and copyright and trademark infringement.
            <br />
            <br />
            By accessing this site, you agree to be bound by the terms and
            conditions of this agreement. This agreement shall not be governed
            by the Uniform Computer Information Transactions Act (UCITA) as
            adopted in Maryland under Title 21 of the Commercial Law Article of
            the Maryland Annotated Code, as amended from time to time. This
            agreement shall be governed by the common law of Maryland relating
            to written agreements without giving effect to any conflict of laws
            principles, as well as other statutory provisions, other than UCITA.
            <br />
            <br />
            The Johns Hopkins Bloomberg School of Public Health may update this
            agreement without notice. Such updating will in no way relieve you
            of your obligations under earlier versions of this agreement. Use of
            this constitutes acceptance of the terms and conditions in place at
            the moment of use.
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
