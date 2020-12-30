import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "../components/SideBar";
import ComponenteDePrueba from "../components/Ramos";
import LlamarRamos from "../components/LlamarRamos";
import Ramos from "../components/Ramos";
import { Button, Stack, Flex, HStack } from "@chakra-ui/react";

const asignaturas = ({}) => {
  const {
    push,
    query: { tipo_ramo },
  } = useRouter();

  return (
    <Fragment>
      <Stack spacing={1}>
        <Flex>
          <HStack>
            <SideBar colorSidebar="button4" />
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
      <HStack>
        <Stack>
          <Ramos TipoRamo={tipo_ramo ?? false} />
        </Stack>
      </HStack>
    </Fragment>
  );
};
export default asignaturas;
