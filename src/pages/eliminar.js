import React, { Fragment, useState } from "react";
import Opciones from "../components/Opciones";
import Opciones2 from "../components/Opciones2";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  FormLabel,
  IconButton,
  Flex,
  Box,
  ButtonGroup,
  Heading,
  Stack,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";
import Axios from "axios";

const eliminador = () => {
  const [datos, setDatos] = useState({
    ramo: "",
    apunte: "",
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
      <Box maxHeight="600px" maxWidth="400px">
        <Stack padding="40px">
          <Box>
            <Heading mb={4}>Eliminador</Heading>

            <FormLabel>Selecciona el ramo a eliminar</FormLabel>
            <InputGroup onSubmit={enviarDatos}>
              <Select
                onChange={handleInputChange}
                mb={4}
                id="principal"
                name="ramo"
              >
                <Opciones />
              </Select>
            </InputGroup>
            <Button
              mb={4}
              onClick={async () => {
                const { data } = await Axios.post("api/eliminadorRamo", {
                  ramo: datos.ramo,
                });
                if (data.mensaje) {
                  alert(data.mensaje);
                  window.location.reload(true);
                }
              }}
              width="320px"
            >
              Eliminar ramo
            </Button>
            <FormLabel>Selecciona el apunte a eliminar</FormLabel>
            <InputGroup onSubmit={enviarDatos}>
              <Select
                onChange={handleInputChange}
                mb={4}
                id="segundario"
                name="apunte"
              >
                <Opciones2 />
              </Select>
            </InputGroup>
            <Button
              onClick={async () => {
                const { data } = await Axios.post("api/eliminadorApunte", {
                  link: datos.apunte,
                });
                if (data.mensaje) {
                  alert(data.mensaje);
                  window.location.reload(true);
                }
              }}
              width="320px"
            >
              Eliminar apunte
            </Button>
          </Box>
        </Stack>
      </Box>
    </Fragment>
  );
};
export default eliminador;
