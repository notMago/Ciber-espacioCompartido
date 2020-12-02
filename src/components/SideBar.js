import React, { Fragment, useState } from "react";
import Opciones from "../components/Opciones";
import { useRouter } from "next/router";
import { useRememberState } from "use-remember-state";
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

const SideBar = (colorSidebar) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const [datos, setDatos] = useState({
    link: "",
    apunte: "guia",
    ramo: "info085",
    nombre: "",
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
      <Button
        colorScheme="orange"
        color="black"
        height="40px"
        width="180px"
        className={colorSidebar.colorSidebar}
        onClick={onOpen}
        border="1px"
        variant="teal"
      >
        Añadir Contenido
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Datos del apunte
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Stack>
                  <Box>
                    <FormLabel>Nombre del archivo</FormLabel>
                    <Input
                      maxlength="30"
                      placeholder="Ingrese el nombre"
                      onChange={handleInputChange}
                      name="nombre"
                    />
                  </Box>
                </Stack>
                <Box>
                  <Stack>
                    <FormLabel htmlFor="url">Url del contenido</FormLabel>
                    <InputGroup onSubmit={enviarDatos}>
                      <Input
                        onChange={handleInputChange}
                        name="link"
                        placeholder="Ingrese el enlace"
                      />
                    </InputGroup>
                  </Stack>
                </Box>
                <Stack onSubmit={enviarDatos}>
                  <Box>
                    <FormLabel htmlFor="owner">Tipo de Apunte</FormLabel>
                    <Select
                      name="apunte"
                      id="owner1"
                      defaultValue="guia"
                      onChange={handleInputChange}
                    >
                      <option value="guia">Guia</option>
                      <option value="prueba">Prueba</option>
                      <option value="video">Video</option>
                      <option value="libros">Libros</option>
                    </Select>
                  </Box>
                </Stack>

                <Stack onSubmit={enviarDatos}>
                  <FormLabel htmlFor="owner">Ramos</FormLabel>
                  <Select
                    id="owner"
                    defaultValue="info085"
                    onChange={handleInputChange}
                    name="ramo"
                  >
                    <Opciones />
                  </Select>
                </Stack>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={async () => {
                  const { data } = await Axios.post("api/todosLosApuntes", {
                    link: datos.link,
                    apunte: datos.apunte,
                    ramo: datos.ramo,
                    nombre: datos.nombre,
                  });
                  if (data.error) {
                    alert(data.error);
                  } else {
                    alert(data.mensaje);
                  }
                }}
                colorScheme="blue"
              >
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Fragment>
  );
};

export default SideBar;
