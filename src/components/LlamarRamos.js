import {
  Text,
  useToast,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import Axios from "axios";
import { useState, useRef, useEffect } from "react";

const LinksAqui = ({ valorLink, indice }) => {
  return (
    <>
      <Text>
        {valorLink.apunte}{" "}
        <Link color="teal.500" href={valorLink.link}>
          este link es de {valorLink.nombre}
        </Link>
      </Text>
    </>
  );
};

const CuerpoModal = ({ valor, indice, tipoApunte }) => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const datos = {
    link: "",
    apunte: tipoApunte,
    ramo: valor,
  };
  const fetchData = async () => {
    const { data: links2 } = await Axios.post("api/verApuntes", datos);
    setLinks(links2);
  };

  return links.map((valorLink, indice) => {
    return <LinksAqui key={indice} valorLink={valorLink} indice={indice} />;
  });
};

const ListaRamos = ({ valor, indice }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contador, setContador] = useState(0);
  const tipoApunte = ["guia", "prueba", "libros", "video"];
  const numTipoApunte = contador % 4;

  return (
    <>
      <Button
        border="1px solid black"
        width="fit-content"
        padding="5px"
        key={indice}
        cursor="pointer"
        onClick={onOpen}
      >
        {indice + 1} - {valor.ramo}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {tipoApunte[numTipoApunte]} {valor.ramo}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CuerpoModal
              valor={valor.ramo}
              indice={indice}
              tipoApunte={tipoApunte[numTipoApunte]}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setContador(contador + 1);
              }}
            >
              {tipoApunte[(contador + 1) % 4]}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const LlamarRamos = () => {
  const [ramos, setRamos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: ramo2 } = await Axios.post("api/verRamos", {
      nombre_ramo: "informatica",
    });
    setRamos(ramo2);
  };
  return ramos.map((valor, indice) => {
    return <ListaRamos key={indice} valor={valor} indice={indice} />;
  });
};

export default LlamarRamos;
