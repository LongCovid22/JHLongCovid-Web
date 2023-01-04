import React from "react";
import { Button, Icon, Link } from "@chakra-ui/react";
import { MdOutlinePrivacyTip } from "react-icons/md";

export const PrivacyStatement = () => {
  return (
    <Button
      leftIcon={<Icon as={MdOutlinePrivacyTip} />}
      variant="ghost"
      width="100%"
      justifyContent="flex-start"
    >
      <Link
        href="https://it.johnshopkins.edu/policies-privacystatement/"
        isExternal
        variant={"none"}
      >
        Privacy Statement
      </Link>
    </Button>
  );
};
