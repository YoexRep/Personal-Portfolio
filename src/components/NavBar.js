import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedinIcon from '../assets/img/linkedin-logo.svg';
import githubIcon from '../assets/img/github-logo.svg';
import youtubeIcon from '../assets/img/Youtube.svg';
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TextField, MenuItem } from "@mui/material";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [idiomaSelect, setIdiomaSelect] = useState("en");

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setIdiomaSelect(e.target.value);
  };

  const [textElement, i18n] = useTranslation("global");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen); // Cambiar el estado del menú
  };

  return (
    <Router>
      <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{textElement("NavBar.BtnHome")}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{textElement("NavBar.BtnSkills")}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{textElement("NavBar.BtnProjects")}</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>{textElement("NavBar.BtnContact")}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yoel-antonio-torres-marte-291b99225/" target="_blank"><img src={linkedinIcon} alt="linkedin" /></a>
                <a href="https://github.com/YoexRep" target="_blank"><img src={githubIcon} alt="github" /></a>
                <a href="https://www.youtube.com/@LearnWtutorials" target="_blank"><img src={youtubeIcon} alt="youtube" /></a>
              </div>
              <TextField
                select
                onChange={handleLanguageChange}
                value={idiomaSelect}
                name="IdiomaSelect"
                sx={{
                  gridColumn: "span 2",
                  marginLeft: "10px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderWidth: "0px",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Español</MenuItem>
              </TextField>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
