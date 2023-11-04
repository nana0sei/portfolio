import Navbar from "../components/Navbar";
import error from "../assets/error.png";
import { VStack, Image, Heading } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <VStack paddingX={5}>
        <Image src={error} width="1000px" />
        <Heading>page not found</Heading>
      </VStack>
    </>
  );
};

export default ErrorPage;
