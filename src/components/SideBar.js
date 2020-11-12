import React,{Fragment, useState} from "react";
import { useRouter } from "next/router";
import { useRememberState} from "use-remember-state"
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
    Stack
  } from "@chakra-ui/core";

const SideBar = () =>{

    const colorcito = "button1";
    const colorcito2 = "button2"; 

    const { push } = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const [cambio, setCambio] = useRememberState("color","uno");
    const [colorTexto, setCambioTexto] = useState("colorTexto","white");
    const [colorTexto2, setCambioTexto2] = useState("colorTexto2","black");
    const [frase, setfrase] = useState("Light","Light");
    const [hover, setHover] = useState(colorcito);
    const [cambioAlrevez, setcambioAlrevez] = useState("color2","dos");
    

    const cambiaColor = () =>{
      if(cambio==='uno'){
        setCambio('dos');
        setCambioTexto('black');
        setfrase('Dark');
        setcambioAlrevez("uno");
        setCambioTexto2("white")
      }
      else{
        setCambio('uno');
        setCambioTexto('white');
        setfrase('Light');
        setcambioAlrevez("dos");
        setCambioTexto2("black")
      }
    }

return(
    <Fragment>
   <Button ref={btnRef} colorScheme="blue" height="48px" width="250px" onClick={onOpen}>
        Click para abrir la sidebar
        </Button>
        <Drawer
        
          isOpen={isOpen}
          placement="left"
          
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent >
            <Stack className={cambio}>
            <DrawerFooter>
            <Heading size="lg" className={cambio}>Todos los ramos
            </Heading>
            <Button className={cambioAlrevez} colorScheme={colorTexto} textColor={colorTexto2} px={3} textAlign='left' onClick={cambiaColor}>{frase}</Button>
            
            </DrawerFooter>
            </Stack>
            <DrawerBody className={cambio}>
              <FormLabel>
                <Input placeholder="¿Que ramo estas buscando?" />
              </FormLabel>
              <FormLabel>
                <Button index={0}
                colorScheme="black" textColor={colorTexto}
                onClick={() =>{
                  push("/")
                }}>Principal</Button>
              </FormLabel>
              <FormLabel>
                <Button colorScheme="black" textColor={colorTexto} onClick={() =>{
                  push("bain085")
                }}>BAIN085</Button>
              </FormLabel>
              <FormLabel>
                <Button  
                onClick={() =>{
                  push("/info090")
                }}
                colorScheme="black" textColor={colorTexto}>INFO090</Button>
              </FormLabel>
            </DrawerBody>
  
            <DrawerFooter className={cambio}>
              <Button  
              variant="outline" colorScheme={colorTexto} onClick={onClose}>
                Cerrar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    </Fragment>

    
)
}


export default SideBar;
