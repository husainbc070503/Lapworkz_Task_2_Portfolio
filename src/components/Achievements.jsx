import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import SectionHeading from "./SectionHeading";
import Sparks from "../assets/certificates/sparks.png";
import LGM from "../assets/certificates/lgm.png";
import Info from "../assets/certificates/infoaidtech.png";
import Oasis from "../assets/certificates/oasis.png";
import CodeHaven from "../assets/certificates/code_haven.png";
import CodeKaze from "../assets/certificates/code_kaze.png";
import FusionFriday from "../assets/certificates/fusion_friday.png";
import CSS from "../assets/certificates/CSS.png";
import Java from "../assets/certificates/Java.png";
import JSI from "../assets/certificates/Js.png";
import JSII from "../assets/certificates/JsI.png";
import Python from "../assets/certificates/Python.png";
import ReactImg from "../assets/certificates/React.png";
import RestApi from "../assets/certificates/Rest_API.png";
import SQL from "../assets/certificates/SQL.png";

const Achievements = () => {
  const achievements = [
    {
      title: "Internship Certificates",
      certificates: [
        { name: "Sparks Foundation", image: Sparks },
        { name: "Let's Grow More", image: LGM },
        { name: "Info Aid Tech", image: Info },
        { name: "Oasis", image: Oasis },
      ],
    },
    {
      title: "Contests Certificates",
      certificates: [
        { name: "Code Haven", image: CodeHaven },
        { name: "Code Kaze", image: CodeKaze },
        { name: "Fusion Friday", image: FusionFriday },
      ],
    },
    {
      title: "Hacker Rank Certificates",
      certificates: [
        { name: "CSS", image: CSS },
        { name: "Java", image: Java },
        { name: "Js(Basic)", image: JSI },
        { name: "Js(Intermediate)", image: JSII },
        { name: "Python", image: Python },
        { name: "React", image: ReactImg },
        { name: "Rest Api", image: RestApi },
        { name: "SQL", image: SQL },
      ],
    },
  ];

  return (
    <div id="achievements">
      <Container maxWidth="lg" className="Container container">
        <Box>
          <SectionHeading title="Achievements" />
          {achievements.map((item, index) => {
            const { title, certificates } = item;
            return (
              <div key={index}>
                <Typography
                  color="primary"
                  fontSize={30}
                  fontWeight="bold"
                  my={2}
                  mt={4}
                >
                  {title}
                </Typography>
                <Grid
                  container
                  rowSpacing={5}
                  columnSpacing={3}
                  alignItems="center"
                  className="Grid justify-content"
                >
                  {certificates.map((i, ind) => {
                    return (
                      <Grid item md={3} key={ind}>
                        <Tooltip title={i.name} placement="top">
                          <img
                            src={i.image}
                            alt={i.name}
                            width={250}
                            className="cert-img"
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

export default Achievements;
