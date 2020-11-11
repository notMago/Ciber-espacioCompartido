import React,{Fragment, useState} from 'react';
import{
    Stack,
    Box,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Button,
    Input,
    Checkbox
}from '@chakra-ui/core';




const LoginFormularios = () =>{
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })



    return(
        <Stack >
            <Heading>
                Inicio de Sesion
            </Heading>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input color="black" placeholder="Your Email"/>
            </FormControl>
            <FormControl>
                <FormLabel>Constraseña</FormLabel>
                <Input placeholder="Escriba su contraseña"/>
            </FormControl>
        </Stack>
    )



}

const LoginPanel = () =>{
    return(
        <Flex minHeight='10vh' >
            <Box 
            
                width="fit-content"
                padding={30}
                px={40}
                maxWidth="6008px" 
                minHeight="300px"
            >
                <Box >
                    <LoginFormularios/>
                    <FormLabel py={2}>
                    <Checkbox defaultIsChecked>Recuerdame</Checkbox>
                    </FormLabel>
                    <Button 
                    px={100}colorScheme="blue" >Inicia Sesion</Button>
                </Box>
            </Box>
        </Flex>
    )

}



const Login = () =>{

    
    return (
        <Fragment >
            <Box bg="#c6c6c6">
                <Flex align="right" justify="right" p={200}>
                    <LoginPanel/>
                    <Heading color="black.500" size="lg"
                    px={40} py={20}>
                    Todos los apuntes<p>
                        al alcance de tus manos
                    </p>
                    
                    </Heading>
                </Flex>
            
            </Box>
            
        </Fragment>
    )
}



export default Login;