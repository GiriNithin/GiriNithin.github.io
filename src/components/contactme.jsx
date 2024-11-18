import { Flex, Text, Link } from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <Flex
      margin={"auto"}
      minHeight={"100vh"}
      maxWidth={"50vw"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
      id="Contactme"
    >
      <Text fontSize={"3rem"} marginBottom={"5vh"}>
        Contact Me
      </Text>
      <Link
        background={"var(--white)"}
        borderRadius={"5px"}
        padding={"5px"}
        href="https://www.linkedin.com/in/girinithin/"
        target="blank"
        width={"15vw"}
        fontSize={"1.5rem"}
        textAlign={"center"}
        marginBottom={"2vh"}
      >
        LinkedIn
      </Link>
      <Link
        background={"var(--white)"}
        borderRadius={"5px"}
        padding={"5px"}
        href="#"
        width={"15vw"}
        fontSize={"1.5rem"}
        textAlign={"center"}
        marginBottom={"2vh"}
      >
        GitHub
      </Link>
      <Link
        background={"var(--white)"}
        borderRadius={"5px"}
        padding={"5px"}
        href="mailto:girinithinyogendra@outlook.com"
        width={"15vw"}
        fontSize={"1.5rem"}
        textAlign={"center"}
        marginBottom={"2vh"}
      >
        Email
      </Link>
    </Flex>
  );
};

export default ContactMe;
