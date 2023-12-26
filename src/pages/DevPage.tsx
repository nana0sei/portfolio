import { Image, Center } from "@chakra-ui/react";
import DevGrid from "../components/DevGrid";
import devtitle from "../assets/devtitle.png";

const DevPage = () => {
  return (
    <>
      <Center pb={2}>
        <Image src={devtitle} width="400px" />
      </Center>

      <DevGrid />
    </>
  );
};

export default DevPage;
