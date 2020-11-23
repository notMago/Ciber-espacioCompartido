import React, { Fragment, useState, useEffect } from "react";
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
} from "@chakra-ui/react";
const Informatica = () => {
  return (
    <Fragment>
      <SideBar />
      <ComponenteDePrueba />
    </Fragment>
  );
};
export default Informatica;
