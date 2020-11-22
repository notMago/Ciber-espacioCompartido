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
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import Axios from "axios";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const [datos, setDatos] = useState({
    email: "",
    pass: "",
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
  const { push } = useRouter();
  /*useEffect(() => {
    const cuenta = localStorage.getItem("cuenta");
    if (cuenta) {
      alert("ya hay cuenta " + cuenta);
    }
  }, []);*/
  return (
    <Fragment>
      <Box className="fondoregistro">
        <Flex align="right" justify="right" p={200} justifyContent="center">
          <Flex minHeight="10vh">
            <Box
              width="fit-content"
              padding={30}
              px={40}
              maxWidth="6008px"
              minHeight="300px"
              minWidth="500px"
            >
              <Box p={20} className="fondologin">
                <Stack onSumbit={enviarDatos}>
                  <Heading>Inicio de Sesion</Heading>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      onChange={handleInputChange}
                      variant="black"
                      placeholder="Your Email"
                      name="email"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Constraseña</FormLabel>
                    <InputGroup>
                      <Input
                        onChange={handleInputChange}
                        variant="black"
                        placeholder="Escriba su contraseña"
                        name="pass"
                        type={show ? "text" : "password"}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </Stack>
                <FormLabel py={2}>
                  <Checkbox defaultIsChecked>Recuerdame</Checkbox>
                </FormLabel>
                <Button
                  px={100}
                  colorScheme="blue"
                  onClick={async () => {
                    const { data } = await Axios.post("api/Validacion", {
                      email: datos.email,
                      password: datos.pass,
                    });

                    if (data.error) {
                      alert(data.error);
                    } else {
                      toast({
                        title: data.mensaje,
                      });
                      //localStorage.setItem("cuenta", data.email);
                      push("/");
                    }
                  }}
                >
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
          <Heading color="black.500" size="lg" px={40} py={20}>
            Todos los apuntes<p>al alcance de tus manos</p>
          </Heading>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Login;
