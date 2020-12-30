import {
  Flex,
  Text,
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
        {valorLink.apunte}
        {": "}
        <Link color="teal.500" href={valorLink.link}>
          {valorLink.nombre}
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
    apunte: "",
    ramo: valor,
  };
  const fetchData = async () => {
    const { data: links2 } = await Axios.post("api/verApuntes", datos);
    setLinks(links2);
  };

  return links[0] ? (
    links.map((valorLink, indice) => {
      return valorLink.apunte === tipoApunte ? (
        <LinksAqui key={indice} valorLink={valorLink} indice={indice} />
      ) : (
        ""
      );
    })
  ) : (
    <LinksAqui
      key={0}
      valorLink={{
        apunte: "no hay archivo",
        nombre: "",
        link: "",
      }}
      indice={0}
    />
  );
};

const ListaRamos = ({ valor, indice }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contador, setContador] = useState(0);
  const tipoApunte = ["guia", "prueba", "libros", "video"];
  const numTipoApunte = contador % 4;

  return (
    <>
      <Button
        variant="teal"
        className="button5"
        border="1px solid black"
        width="fit-content"
        padding="5px"
        key={indice}
        cursor="pointer"
        onClick={onOpen}
        minWidth="300px"
      >
        {valor.ramo}
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

const Linea = ({ Ramo }) => {
  const lista = Ramo;

  return lista.map((valor, indice) => {
    return <ListaRamos key={indice} valor={valor} indice={indice} />;
  });
};

let pregunta = true;
let semestre = new Array();
const Ramos = ({ TipoRamo }) => {
  if (pregunta) {
    if (TipoRamo === false) semestre.push(1, 4);
    else semestre.push(5, 11);
    pregunta = false;
  }

  let arregloMatriz = new Array(semestre[1]);
  for (var i = 0; i < semestre[1]; i++) {
    arregloMatriz[i] = new Array();
  }
  const [ramos, setRamos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data: ramo2 } = await Axios.post("api/verRamos");
    setRamos(ramo2);
  };
  console.log("abajo esta los ramos son filtrar");
  console.log(ramos);
  console.log("arriba esta ramos son filtrar");
  const arreglo = ramos.filter((ramo) => {
    return semestre[0] <= ramo.semestre && semestre[1] >= ramo.semestre
      ? ramo
      : "hola perro loco";
  });
  console.log("abajo esta el arreglo");
  console.log(arreglo);
  console.log("arriba esta el arreglo");
  arreglo.sort((a, b) => {
    return a.semestre - b.semestre;
  });

  arreglo.map((ramo) => {
    arregloMatriz[ramo.semestre - 1].push(ramo);
  });
  console.log(arregloMatriz);

  const matriz = [
    [
      { ramo: "fisica", codigo: "BAIN", semestre: 4 },
      { ramo: "fisica2", codigo: "BAIN", semestre: 4 },
    ],
    [
      { ramo: "Calculo en una variable", codigo: "BAIN", semestre: 3 },
      { ramo: "datos", codigo: "info", semestre: 3 },
    ],
    [{ ramo: "fisica", codigo: "BAIN", semestre: 4 }],
    [{ ramo: "hola", codigo: "INFO", semestre: 1 }],
  ];

  return arregloMatriz.map((valor, indice) => {
    return (
      <>
        <Text key={indice}>Semestre {indice + 1}</Text>
        <Flex key={indice * -10}>
          <Linea key={indice * 100} Ramo={valor} />
        </Flex>
      </>
    );
  });
};

export default Ramos;
