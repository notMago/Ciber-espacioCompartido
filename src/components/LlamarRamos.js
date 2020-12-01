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
        Did you know that{" "}
        <Link color="teal.500" href={valorLink}>
          links can live inline with text
        </Link>
      </Text>
    </>
  );
};

const CuerpoModal = ({ valor, indice }) => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("api/verApuntes");
    const links2 = await data.json();
    console.log(links2);
    console.log(links2[0].link);
    setLinks(links2);
  };

  return links.map((valorLink, indice) => {
    return (
      <LinksAqui key={indice} valorLink={valorLink.link} indice={indice} />
    );
  });
  /*
  const hola = ["absd", "sfokas"];
  return hola.map((valorLink, indice) => {
    return <LinksAqui key={indice} valorLink={valorLink} indice={indice} />;
  });*/
};

const ListaRamos = ({ valor, indice }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        {indice} - {valor.ramo}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apuntes {valor.ramo}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CuerpoModal valor={valor} indice={indice} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
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
    const data = await fetch("api/verRamos");
    const ramos2 = await data.json();
    setRamos(ramos2);
  };

  return ramos.map((valor, indice) => {
    return <ListaRamos key={indice} valor={valor} indice={indice} />;
  });
};

export default LlamarRamos;
