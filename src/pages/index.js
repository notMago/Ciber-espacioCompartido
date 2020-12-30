import {
  Heading,
  Stack,
  Button,
  ButtonGroup,
  Box,
  Flex,
  Spinner,
  Spacer,
  Avatar,
  AvatarBadge,
  Wrap,
  WrapItem,
  Image,
  useToast,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";
import { useEffect, useState, Fragment } from "react";
import SideBar from "../components/SideBar";
import Axios from "axios";
import { useUser } from "../components/auth";

const logo = "images/" + Math.floor(Math.random() * (24 - 1) + 1) + ".png";

export default function IndexPage() {
  const { push } = useRouter();
  const { user, loading } = useUser();
  const toast = useToast();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box className="fondo4">
      <Flex>
        <Spacer />

        <Avatar src={logo} />
        <Button
          bg="blue.400"
          border="1px"
          onClick={() => {
            localStorage.clear();
            push("hola");
            toast({
              title: "Cuenta Cerrada Correctamente",
              description: "Espero vernos pronto ;)",
            });
          }}
        >
          Cerrar Sesión
        </Button>
      </Flex>
      <Stack spacing="45px" padding="10px" py={230}>
        <Heading size="md" textAlign="center">
          Bienvenido al Ciber espacio compartido
        </Heading>
        <Flex py={100} justifyContent="center">
          <ButtonGroup spacing="300px">
            <Button
              onClick={() => {
                push({
                  pathname: "/asignaturas",
                  query: { tipo_ramo: true },
                });
              }}
              className="boton3"
              border="2px"
              variant="teal"
              padding={10}
            >
              Informatica
            </Button>
            <Button
              onClick={() => {
                push({
                  pathname: "/asignaturas",
                  query: { tipo_ramo: false },
                });
              }}
              className="boton3"
              border="2px"
              variant="teal"
              padding={10}
            >
              Bachillerato
            </Button>
          </ButtonGroup>
        </Flex>
        <Flex justifyContent="center">
          <SideBar colorSidebar="button1" />
        </Flex>
      </Stack>
    </Box>
  );
}
