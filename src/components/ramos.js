import {
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Lorem,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import Axios from "axios";

const ComponenteDePrueba = () => {
  const toast = useToast();

  const [ramos, setRamos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("api/verRamos");
    const ramos2 = await data.json();
    console.log(ramos2);
    setRamos(ramos2);
  };

  return (
    <Fragment>
      {ramos.map((item, indice) => (
        //<li key={item.id}>
        <Flex>
          <Button key={indice}>{item.ramo}</Button>
        </Flex>
        //</li>
      ))}
    </Fragment>
  );
};

export default ComponenteDePrueba;
