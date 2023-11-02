import { Heading } from "@chakra-ui/react";
import DevGrid from "../components/DevGrid";

const DevPage = () => {
  return (
    <>
      <Heading paddingBottom={5} color="blue.400" size="3xl">
        front end projects
      </Heading>
      <DevGrid />
    </>
  );
};

export default DevPage;
