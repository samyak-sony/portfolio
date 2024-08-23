"use client";
import Nav from "@/components/Nav";
import Container  from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <Box sx={{backgroundColor:"#151515"}}>
      <Container maxWidth="lg">
        <Nav/>
        <Hero/>
        <Skills/>
        <Projects/>
      </Container>
        <Contact/>
    </Box>
  );
};

export default Home;
