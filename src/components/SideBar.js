import React, { Fragment, useState } from "react";
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

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <Fragment>
      <Button colorScheme="blue" height="48px" width="250px" onClick={onOpen}>
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
                <Box>
                  <FormLabel htmlFor="owner">Tipo de Apunte</FormLabel>
                  <Select id="owner" defaultValue="segun">
                    <option value="segun">Prueba</option>
                    <option value="Guia">Guia</option>
                    <option value="kola">Ayudantias</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="url">Url del contenido</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type="url"
                      id="url"
                      placeholder="Please enter domain"
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Ramos</FormLabel>
                  <Select id="owner" defaultValue="segun">
                    <option value="segun">INFO085</option>
                    <option value="kola">BAIN085</option>
                  </Select>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Fragment>
  );
};

export default SideBar;
