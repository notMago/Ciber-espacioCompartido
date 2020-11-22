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
  useToast,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import Axios from "axios";

const register = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { push } = useRouter();
  const toast = useToast();
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
                      variant="black"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Constraseña</FormLabel>
                    <InputGroup>
                      <Input
                        onChange={handleInputChange}
                        placeholder="Escriba su contraseña"
                        name="password"
                        type={show ? "text" : "password"}
                        variant="black"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="xs" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
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

                    if (data.error) {
                      alert(data.error);
                    } else {
                      toast({
                        title: data.mensaje,
                      });
                      localStorage.setItem("cuenta", data.email);
                      push("/hola");
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
