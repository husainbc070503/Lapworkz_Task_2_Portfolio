import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { Container, Typography } from "@mui/material";
import Resume from "../assets/Resume.pdf";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "#home",
      text: "Home",
    },
    {
      id: 2,
      link: "#about",
      text: "About",
    },
    {
      id: 3,
      link: "#skills",
      text: "Skills",
    },
    {
      id: 4,
      link: "#projects",
      text: "Projects",
    },
    {
      id: 5,
      link: "#achievements",
      text: "Achievements",
    },
    {
      id: 6,
      link: "#contact",
      text: "Contact",
    },
  ];

  const [activeLink, setActiveLink] = React.useState("#");
  const [showList, setShowList] = React.useState(false);

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    links.forEach((link) => {
      const section = document.getElementById(link.link.substring(1));
      if (section) {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) setActiveLink(link.link);
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <DataObjectIcon className="DataObjectIcon logo" />
            <div className="menu-icon">
              {!showList ? (
                <MenuIcon onClick={() => setShowList(true)} />
              ) : (
                <CloseIcon onClick={() => setShowList(false)} />
              )}
            </div>
            <ul className={`nav-links ${showList && "show-list"}`}>
              {links?.map((item) => {
                const { id, link, text } = item;
                return (
                  <li key={id} className="nav-link-item">
                    <a
                      href={link}
                      className={`link-${activeLink === link && "active"} `}
                    >
                      <Typography fontSize={{ md: 17, xs: 23 }} mx={2}>
                        {text}
                      </Typography>
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href={Resume} download>
              <Button
                color="secondary"
                variant="contained"
                className="Button nav-btn"
              >
                Resume
              </Button>
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
