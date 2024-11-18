import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-scroll";
import "../styles/CommonStyles.css";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      alignItems={"center"}
      height={10}
      justifyContent={"center"}
      wrap="wrap"
      bg={"var(--dark)"}
      color={"var(--light)"}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Box
        display={{ base: "block", md: "flex" }}
        width={{ base: "full", md: "auto" }}
      >
        {/* <Link href="#" p={2}> */}
        <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
          <p style={{ margin: "0 15px", fontSize: "1.3rem" }}>Home</p>
        </Link>
        <Link to="Aboutme" spy={true} smooth={true} offset={50} duration={500}>
          <p style={{ margin: "0 15px", fontSize: "1.3rem" }}>About Me</p>
        </Link>
        <Link to="Skills" spy={true} smooth={true} offset={50} duration={500}>
          <p style={{ margin: "0 15px", fontSize: "1.3rem" }}>Skills</p>
        </Link>
        <Link
          to="Contactme"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <p style={{ margin: "0 15px", fontSize: "1.3rem" }}>Contact Me</p>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
