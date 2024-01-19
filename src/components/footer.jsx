import { Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      flexDirection={"column"}
      margin={"auto"}
      maxWidth={"50vw"}
      alignItems={"center"}
      
    >
      <Text>&copy; Developed by Giri Nithin Yogendra</Text>
      <Text>Built with React.js, Chakra UI</Text>
    </Flex>
  );
};

export default Footer;
