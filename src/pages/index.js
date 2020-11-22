import { Heading, Stack } from "@chakra-ui/react";

import { ProbandoJavascript } from "../components/ProbandoJavascript";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";
import SideBar from "../components/SideBar";

export default function IndexPage() {
  return (
    <Stack spacing="45px" padding="10px">
      <Heading>Bienvenido al Ciber espacio compartido</Heading>
      <SideBar />
      <ProbandoJavascript />
      <ProbandoAPI />
      <ProbandoListas />
      <ProbandoInput />
    </Stack>
  );
}
