import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/image.png";

const Home = () => {
  return (
    <div id="home">
      <Container maxWidth="lg" className="Container home-container">
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography fontSize={20} my={1}>
              Hi there! 👋, I'm
            </Typography>
            <Typography
              className="Typography name"
              fontSize={{ md: 46, xs: 35 }}
              mb={1}
            >
              Husain Champawala
            </Typography>
            <Typography className="Typography animation">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "A MERN Stack Developer",
                  1000,
                  "A Competitive Programmer",
                  1000,
                  "A Freelancer",
                  1000,
                  "A Team Leader",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </Typography>
            <Typography
              color="GrayText"
              my={1}
              width={{ md: 500, xs: "100%" }}
              textAlign="justify"
            >
              Passionate about continuous learning and innovation, I'm actively
              diving into the world of Web3 and Blockchain technologies. Eager
              to transform ideas into impactful projects, I thrive on gaining
              hands-on experience and pushing the boundaries of my skills to
              stay at the forefront of technology trends.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="Button home-btn"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={Image} alt="image" className="home-img" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
