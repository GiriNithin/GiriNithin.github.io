import { Text, Flex, Button } from "@chakra-ui/react";
//import { motion, useScroll } from "framer-motion";
import React from "react";
import "../styles/CommonStyles.css";

const LandingComponent = () => {
  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent={"Center"}
      direction={"column"}
      id="Home"
      backgroundColor={"var(--dark)"}
    >
      <Text
        color={"var(--light)"}
        fontSize={"3rem"}
        marginBottom={"10px"}
        maxWidth={"50vw"}
      >
        Hello, I'm Giri Nithin Yogendra.
      </Text>
      <Text
        color="var(--white)"
        textAlign={"center"}
        maxWidth={"50vw"}
        fontSize={"1.5rem"}
      >
        I am a Computer Science graduate student with a keen interest in
        Full-Stack Development, Data Engineering and Machine Learning.
      </Text>
      <Button margin={"20px 0px"} width={"10rem"}>
        <a href="#contactme">Contact Me</a>
      </Button>
      <Button width={"10rem"}>
        <a href="/Resume.pdf" download="Giri-Nithin-Resume.pdf">
          Resume
        </a>
      </Button>
    </Flex>
  );
};
export default LandingComponent;
