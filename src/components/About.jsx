import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Myself from "../assets/myself.png";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <div id="about">
      <Container maxWidth="lg" className="Container container">
        <SectionHeading title="About Me" />
        <Grid container mt={-12} spacing={2} alignItems="center">
          <Grid item md={4}>
            <img src={Myself} alt="husain champawala" />
          </Grid>
          <Grid item md={8}>
            {[
              "🎓 Currently in my 4th year pursuing B.E. in Computer Science from the University of Mumbai, I am driven by a perpetual excitement for learning and connecting with diverse minds.",
              "🧑‍💻 Recently completed a rewarding one-month internship in Web Development with Let's Grow More and The Sparks Foundation. Eager to continue this journey, I'm poised for more internships to enhance my skills.",
              "🌟 Enthusiastic about exploring new technologies and collaborating with like-minded individuals, I am passionate about the dynamic world of MERN stack development.",
              "🔗 As an open-source enthusiast, I am ready to immerse myself in Blockchain technology and Web3, eager to contribute.",
            ].map((text) => (
              <Typography lineHeight={2} mb={2} textAlign="justify" key={text}>
                {text}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
