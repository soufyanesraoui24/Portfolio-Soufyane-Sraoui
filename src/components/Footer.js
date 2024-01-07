import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaSnapchat,FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Developed by Sraoui Soufyane</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} S_S</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soufyanesraoui24/"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"

                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}

                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}

                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.snapchat.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}

                >
                  <FaSnapchat />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
