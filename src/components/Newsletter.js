import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import foto from "../assets/img/iconowhatsapp.jpg"

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/yourPhoneNumber', '_blank');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>WhatsApp<br></br> </h3>
            {status === 'sending' && <Alert>Enviando...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button onClick={handleWhatsApp} className="whatsapp-btn">   
              <img src={foto}></img>            
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}


