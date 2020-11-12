import { Heading, Stack } from "@chakra-ui/core";

import { ProbandoJavascript } from "../components/ProbandoJavascript";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";
import SideBar from "../components/SideBar";

export default function IndexPage() {
  return (
    <Stack spacing="45px" padding="10px">
      <Heading>Hello World</Heading>
      <SideBar />
      <ProbandoJavascript />
      <ProbandoAPI />
      <ProbandoListas />
      <ProbandoInput />
    </Stack>
  );
}
