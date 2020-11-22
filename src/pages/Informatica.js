import React, { Fragment, useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { ProbandoListas } from "../components/ramos";
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
  const color = "blue";

  const btnRef = React.useRef();

  return (
    <Fragment>
      <SideBar />
      <ProbandoListas />
    </Fragment>
  );
};
export default Informatica;
