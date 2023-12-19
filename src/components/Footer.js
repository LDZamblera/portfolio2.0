import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon3 from "../assets/img/mail-outline.svg";
import navIcon4 from "../assets/img/logo-whatsapp.svg";

import foto from "../assets/img/GEA-Cobertura-de-Salud.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={foto} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""><img src={navIcon3} alt="Icon" /></a>
              <a href=""><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p style={{ color: "black" }}> Copyright 2023. Zamblera Lucas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
