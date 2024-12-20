import { Text, Box, Flex, SimpleGrid } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Flex
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      flexDirection={"column"}
      maxWidth={"100vw"}
      id="Skills"
      backgroundColor={"var(--dark)"}
    >
      <Box marginBottom={"6vh"} color={"var(--light)"}>
        <Text fontSize={"3rem"}>My Skills</Text>
      </Box>
      <SimpleGrid
        columns={4}
        spacing={10}
        color={"var(--white)"}
        fontSize={"1.5rem"}
      >
        <Text>C++</Text>
        <Text>JavaScript</Text>
        <Text>Python</Text>
        <Text>SQL</Text>
        <Text>HTML</Text>
        <Text>CSS</Text>
        <Text>React.js</Text>
        <Text>Node.js</Text>
        <Text>Express.js</Text>
        <Text>Django</Text>
        <Text>TensorFlow</Text>
        <Text>Pandas</Text>
        <Text>Hadoop</Text>
        <Text>Spark</Text>
        <Text>SciKit-Learn</Text>
        <Text>AWS</Text>
        <Text>Linux</Text>
        <Text>Git</Text>
        <Text>PostgreSQL</Text>
        <Text>MongoDB</Text>
        <Text>Tableau</Text>
        <Text>Snowflake</Text>
        <Text>Databricks</Text>
        <Text>PowerBI</Text>
      </SimpleGrid>
    </Flex>
  );
};

export default Skills;
