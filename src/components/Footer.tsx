import { AbsoluteCenter, Box, Center, Divider, HStack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Box pos="relative" px="5" py={5}>
        <Divider />
        <AbsoluteCenter px="4">© {year} Nana Osei</AbsoluteCenter>
      </Box>
      <Center>
        <HStack spacing={2}>
          <Link
            to="mailto:frimpongnanao@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail size="30px" />
          </Link>

          <Link
            to="https://github.com/nana0sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="25px" />
          </Link>

          <Link
            to="https://x.com/nana0sei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size="25px" />
          </Link>
        </HStack>
      </Center>
    </>
  );
};

export default Footer;
