import { Box, Text, Flex } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex
      margin={"auto"}
      //alignItems={"center"}
      justifyContent={"center"}
      minHeight={"70vh"}
      id="aboutme"
    >
      <Box>
        <Text textAlign={"center"} fontSize={"1.5rem"}>
          About Me
        </Text>
        <Text textAlign={"center"} fontSize={"1rem"} maxWidth={"50vw"}>
          Embarking on a vibrant journey in the world of Computer Science, I
          have developed a profound affinity for Full-Stack Development, Machine
          Learning, and Data Engineering. My academic and project experiences
          have shaped me into a versatile developer, adept in weaving front-end
          and back-end technologies to craft robust and user-friendly web
          applications. In the ever-evolving field of Machine Learning, I find
          joy in unraveling patterns and insights from data, building
          intelligent systems that not only predict but also adapt and learn. My
          fervor for Data Engineering is fueled by my curiosity about how data
          can be ingeniously organized and processed to feed into powerful
          analytics and machine learning models. This trinity of skills
          positions me uniquely in the tech landscape, where I aspire to
          innovate and solve real-world problems by bridging the gap between raw
          data and actionable insights.{" "}
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutMe;
