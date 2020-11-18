import React, { Fragment, useState } from "react";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/core";
import Axios from "axios";

const register = () => {
  const { push } = useRouter();
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <Box bg="#c6c6c6">
        <Flex align="right" justify="right" p={200}>
          <Flex minHeight="10vh">
            <Box
              width="fit-content"
              padding={30}
              px={40}
              maxWidth="6008px"
              minHeight="300px"
            >
              <Box>
                <Stack onSubmit={enviarDatos}>
                  <Heading>Crear cuenta</Heading>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      type="text"
                      name="email"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Constraseña</FormLabel>
                    <Input
                      onChange={handleInputChange}
                      placeholder="Escriba su contraseña"
                      type="text"
                      name="password"
                    />
                  </FormControl>
                </Stack>
                <Button
                  px={100}
                  type="submit"
                  marginTop="15px"
                  colorScheme="blue"
                  onClick={async () => {
                    const { data } = await Axios.post("api/cuentas", {
                      email: datos.email,
                      password: datos.password,
                    });

                    if (datos.email != "" && datos.password != "") {
                      alert("Cuenta creada Correctamente");
                      push("/hola");
                    } else {
                      alert("Hay campos incompletos");
                    }
                  }}
                >
                  Registrate
                </Button>
              </Box>
            </Box>
          </Flex>
          <Heading color="black.500" size="lg" px={40} py={20}>
            Todos los apuntes<p>al alcance de tus manos</p>
          </Heading>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default register;