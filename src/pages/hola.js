import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Stack,
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";

const LoginFormularios = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  return (
    <Stack>
      <Heading>Inicio de Sesion</Heading>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input color="black" placeholder="Your Email" />
      </FormControl>
      <FormControl>
        <FormLabel>Constraseña</FormLabel>
        <Input placeholder="Escriba su contraseña" />
      </FormControl>
    </Stack>
  );
};

const LoginPanel = () => {
  const { push } = useRouter();
  return (
    <Flex minHeight="10vh">
      <Box
        width="fit-content"
        padding={30}
        px={40}
        maxWidth="6008px"
        minHeight="300px"
      >
        <Box>
          <LoginFormularios />
          <FormLabel py={2}>
            <Checkbox defaultIsChecked>Recuerdame</Checkbox>
          </FormLabel>
          <Button px={100} colorScheme="blue">
            Inicia Sesion
          </Button>
          <FormLabel>
            <Button
              px={109}
              onClick={() => {
                push("register");
              }}
              marginTop="10px"
              colorScheme="green"
            >
              Registrate
            </Button>
          </FormLabel>
        </Box>
      </Box>
    </Flex>
  );
};

const Login = () => {
  useEffect(() => {
    const cuenta = localStorage.getItem("cuenta");
    if (cuenta) {
      alert("ya hay cuenta " + cuenta);
    }
  }, []);
  return (
    <Fragment>
      <Box bg="#c6c6c6">
        <Flex align="right" justify="right" p={200}>
          <LoginPanel />
          <Heading color="black.500" size="lg" px={40} py={20}>
            Todos los apuntes<p>al alcance de tus manos</p>
          </Heading>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Login;
