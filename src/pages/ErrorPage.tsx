import Navbar from "../components/Navbar";
import error from "../assets/error.png";
import { VStack, Image, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorType = useRouteError();
  return (
    <>
      <Navbar />
      <VStack paddingX={5} pt="70px">
        <Image src={error} width="500px" />
        <Heading fontSize="lg">
          {isRouteErrorResponse(errorType)
            ? "page not found"
            : "unexpected error occured"}
        </Heading>
      </VStack>
    </>
  );
};

export default ErrorPage;
