import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/GEA-Cobertura-de-Salud.png';
import navIcon1 from '../assets/img/logo-whatsapp.svg';
import navIcon2 from '../assets/img/mail-outline.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
              <Nav.Link
        href="https://geamovil.com/cartilla/" // Enlace a la página deseada
        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
        onClick={() => onUpdateActiveLink('home')}
        target="_blank" // Abre enlace en una nueva pestaña
      >
        Planes y Cartilla
      </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href=""><img src={navIcon1} alt="" /></a>
                <a href=""><img src={navIcon2} alt="" /></a>
                
              </div>
              <HashLink to='#connect'>
                <button className="vvd" ><span className="contacto" style={{ color: 'white' }}>Contacto</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
