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

const registerRamos = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { push } = useRouter();
  const toast = useToast();
  const [datos, setDatos] = useState({
    ramo: "",
    codigo: "",
    semestre: "",
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
      <Box className="fondo" animation="fondito 4s infinite">
        <Flex align="right" justify="right" p={200} justifyContent="center">
          <Flex minHeight="10vh">
            <Box
              width="fit-content"
              padding={30}
              px={40}
              maxWidth="6008px"
              minHeight="300px"
            >
              <Box className="fondo2" p={20}>
                <Stack onSubmit={enviarDatos}>
                  <Heading>Crear ramo</Heading>

                  <FormControl>
                    <FormLabel>Asignatura</FormLabel>
                    <Input
                      onChange={handleInputChange}
                      placeholder="Your ramo"
                      type="text"
                      name="ramo"
                      variant="black"
                      className="inputcolor"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Codigo</FormLabel>
                    <InputGroup>
                      <Input
                        onChange={handleInputChange}
                        placeholder="codigo ramo"
                        type="text"
                        name="codigo"
                        variant="black"
                        className="inputcolor"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Semestre</FormLabel>
                    <InputGroup>
                      <Input
                        onChange={handleInputChange}
                        placeholder="semestre del ramo"
                        type="text"
                        name="semestre"
                        variant="black"
                        className="inputcolor"
                      />
                    </InputGroup>
                  </FormControl>
                </Stack>
                <Button
                  variant="green"
                  className="button button3"
                  px={100}
                  type="submit"
                  marginTop="15px"
                  colorScheme="blue"
                  onClick={async () => {
                    const { data } = await Axios.post("api/crearRamos", {
                      ramo: datos.ramo,
                      codigo: datos.codigo,
                      semestre: datos.semestre,
                    });

                    if (data.error) {
                      alert(data.error);
                    } else {
                      toast({
                        title: data.mensaje,
                      });
                      localStorage.setItem("ramo", data.ramo);
                      alert("ramo creado");
                    }
                  }}
                >
                  Registralo
                </Button>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default registerRamos;
