import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AboutMe from "./components/aboutMe";
import Header from "./components/header";
import LandingComponent from "./components/landingComponent";
import Skills from "./components/skills";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingComponent />
      <AboutMe />
      <Skills />
      <ContactMe />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
