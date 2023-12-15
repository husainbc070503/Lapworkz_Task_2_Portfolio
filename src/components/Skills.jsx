import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import SectionHeading from "./SectionHeading";
import CPlusPlus from "../assets/c++.png";
import Java from "../assets/java.png";
import HTML from "../assets/html5.png";
import CSS from "../assets/css3.png";
import Js from "../assets/js.png";
import ReactJs from "../assets/react.png";
import Node from "../assets/nodejs.png";
import Express from "../assets/expressjs.png";
import MongoDB from "../assets/mongodb.png";
import Bootstrap from "../assets/bootstrap.png";
import PhP from "../assets/php.png";
import MaterialUI from "../assets/material-ui.png";
import MySQL from "../assets/mysql.png";
import DSA from "../assets/dsa.png";

const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      technologies: [
        { name: "C++", img: CPlusPlus },
        { name: "Java", img: Java },
      ],
    },
    {
      title: "Front-End Languages",
      technologies: [
        { name: "HTML", img: HTML },
        { name: "CSS", img: CSS },
        { name: "Js", img: Js },
        { name: "ReactJs", img: ReactJs },
      ],
    },
    {
      title: "Back-End Languages",
      technologies: [
        { name: "PhP", img: PhP },
        { name: "Node", img: Node },
      ],
    },
    {
      title: "Database",
      technologies: [
        { name: "MySQL", img: MySQL },
        { name: "MongoDB", img: MongoDB },
      ],
    },
    {
      title: "Frameworks",
      technologies: [
        { name: "Express", img: Express },
        { name: "Bootstrap", img: Bootstrap },
        { name: "MaterialUI", img: MaterialUI },
      ],
    },
    {
      title: "Data Structures and Algorithms",
      technologies: [{ name: "DSA", img: DSA }],
    },
  ];

  return (
    <div id="skills">
      <Container maxWidth="lg" className="Container container">
        <Box>
          <SectionHeading title="Skills" mb={2} />
          {skills.map((item, index) => {
            const { title, technologies } = item;
            return (
              <div key={index}>
                <Typography
                  fontWeight="bold"
                  color="primary"
                  fontSize={30}
                  mb={2}
                >
                  {title}
                </Typography>
                <Grid
                  container
                  spacing={2}
                  rowSpacing={2}
                  columnSpacing={3}
                  my={3}
                  alignItems="center"
                >
                  {technologies.map((item, ind) => {
                    return (
                      <Grid item md={3} xs={6} key={ind}>
                        <Tooltip title={item.name} placement="right">
                          <img
                            className="skill-image"
                            src={item.img}
                            alt="skill"
                          />
                        </Tooltip>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Skills;
