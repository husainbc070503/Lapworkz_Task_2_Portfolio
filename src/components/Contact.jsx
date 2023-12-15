import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SectionHeading from "./SectionHeading";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkgekwe");
  if (state.succeeded) {
    return (
      <Typography
        textAlign="center"
        fontSize={34}
        fontWeight="bold"
        color="primary"
        pb={15}
      >
        Thanks for contacting! I'll get back to you soon!!😊
      </Typography>
    );
  }

  return (
    <div id="contact">
      <Container className="Container container">
        <SectionHeading title="Get In Touch" />
        <Grid container spacing={2} my={3}>
          <Grid item md={5}>
            {[
              {
                icon: <EmailIcon color="primary" />,
                text: "husainchampawala@gmail.com",
              },
              {
                icon: <LocalPhoneIcon color="primary" />,
                text: "+91-8879525311",
              },
            ].map((item, ind) => {
              return (
                <Grid container spacing={2} key={ind} mb={3}>
                  <Grid item md={2}>
                    {item.icon}
                  </Grid>
                  <Grid item md={10}>
                    <Typography color="primary" fontWeight="bold" fontSize={18}>
                      {item.text}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
            {[
              {
                icon: <LinkedInIcon />,
                link: "https://www.linkedin.com/in/husain-b-champawala-2522a2205/",
              },
              {
                icon: <GitHubIcon />,
                link: "https://github.com/husainbc070503",
              },
              {
                icon: <WhatsAppIcon />,
                link: "https://api.whatsapp.com/send?phone=918879525311&text=Hello%2C%0AI%20gone%20through%20your%20portfolio.%20It%27s%20awesome.%20Let%27s%20connect%F0%9F%98%80%F0%9F%98%81",
              },
            ].map((item, ind) => (
              <Link key={ind} href={item.link} target="_blank" mr={2}>
                {item.icon}
              </Link>
            ))}
          </Grid>
          <Grid item md={7}>
            <form onSubmit={handleSubmit}>
              {[
                { type: "text", others: "name", label: "Name" },
                { type: "email", others: "email", label: "Email Address" },
                {
                  type: "text",
                  others: "message",
                  label: "Message",
                  multiline: true,
                  rows: 6,
                },
              ].map((item, ind) => {
                const { type, others, label, multiline, rows } = item;
                return (
                  <>
                    <TextField
                      key={ind}
                      type={type}
                      name={others}
                      id={others}
                      label={label}
                      fullWidth
                      className="TextField input"
                      multiline={multiline}
                      rows={rows}
                    />
                    <ValidationError
                      prefix={label}
                      field={others}
                      errors={state.errors}
                    />
                  </>
                );
              })}
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                className="Button contact-btn"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
