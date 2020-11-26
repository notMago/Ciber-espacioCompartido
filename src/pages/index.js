import {
  Heading,
  Stack,
  Button,
  ButtonGroup,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";
import SideBar from "../components/SideBar";

export default function IndexPage() {
  const { push } = useRouter();
  return (
    <Box className="fondoprincipal" animation="fondito2 4s infinite">
      <Stack spacing="45px" padding="10px" py={230}>
        <Heading size="md" textAlign="center">
          Bienvenido al Ciber espacio compartido
        </Heading>
        <Flex py={100} justifyContent="center">
          <ButtonGroup spacing="300px">
            <Button
              onClick={() => {
                push("Informatica");
              }}
              className="boton3"
              border="2px"
              variant="teal"
              padding={10}
            >
              Informatica
            </Button>
            <Button
              onClick={() => {
                push("bachillerato");
              }}
              className="boton3"
              border="2px"
              variant="teal"
              padding={10}
            >
              Bachillerato
            </Button>
          </ButtonGroup>
        </Flex>
        <Flex justifyContent="center">
          <SideBar />
        </Flex>
      </Stack>
    </Box>
  );
}
