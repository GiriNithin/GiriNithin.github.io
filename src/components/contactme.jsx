import { Flex, Text, Link } from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <Flex
      margin={"auto"}
      minHeight={"70vh"}
      maxWidth={"50vw"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
      id="contactme"
    >
      <Text marginBottom={"2vh"}>Contact Me</Text>
      <Link
        background={"#e6e6e6"}
        borderRadius={"5px"}
        padding={"5px"}
        href="#"
        width={"15vw"}
        textAlign={"center"}
        marginBottom={"2vh"}
      >
        LinkedIn
      </Link>
      <Link
        background={"#e6e6e6"}
        borderRadius={"5px"}
        padding={"5px"}
        href="#"
        width={"15vw"}
        textAlign={"center"}
        marginBottom={"2vh"}
      >
        GitHub
      </Link>
      <Link
        background={"#e6e6e6"}
        borderRadius={"5px"}
        padding={"5px"}
        href="#"
        width={"15vw"}
        textAlign={"center"}
        marginBottom={"2vh"}
      >
        Email
      </Link>
    </Flex>
  );
};

export default ContactMe;
