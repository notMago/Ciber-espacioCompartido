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
} from "@chakra-ui/react";
import { Fragment, useState, useRef } from "react";

const lorem = "bain085 info090 bain091";

const loremLista = lorem.split(" ").slice(0, 8);

const ComponenteDePrueba = ({ valor, indice }) => {
  const toast = useToast();

  return (
    <Fragment>
      <Text
        border="1px solid black"
        width="fit-content"
        padding="5px"
        cursor="pointer"
        onClick={() => {
          toast({
            title: `Hiciste click en "${valor}"`,
          });
        }}
      >
        {valor}
      </Text>
    </Fragment>
  );
};

export const ProbandoListas = () => {
  return (
    <>
      {loremLista.map((valor, indice) => {
        return (
          <Fragment>
            <ComponenteDePrueba key={indice} valor={valor} indice={indice} />
          </Fragment>
        );
      })}
    </>
  );
};
