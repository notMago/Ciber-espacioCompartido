import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "../components/SideBar";
import ComponenteDePrueba from "../components/ramos";
import {
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Lorem,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Flex,
  HStack,
} from "@chakra-ui/react";
const Informatica = () => {
  const { push } = useRouter();

  return (
    <Fragment>
      <Stack spacing={1}>
        <Flex>
          <HStack>
            <SideBar colorSidebar="button5" />
            <Button
              onClick={() => {
                push("/");
              }}
              border="1px"
              variant="teal"
              className="button1"
            >
              Volver
            </Button>
          </HStack>
        </Flex>
      </Stack>
      <HStack></HStack>
    </Fragment>
  );
};
export default Informatica;
