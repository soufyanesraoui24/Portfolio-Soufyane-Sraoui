import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaSnapchat,FaTwitter, FaFacebook } from "react-icons/fa";





function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            "Hello, I'm Soufyane Sraoui, a passionate MERN stack developer with a focus on crafting 
            robust and scalable web applications. My expertise spans the entire development process, 
            from designing and implementing databases with<b className="purple"> MongoDB</b> to creating efficient server-side
             applications using <b className="purple">Node.js and Express.js</b> . On the front end, I excel in building dynamic
              and interactive user interfaces with <b className="purple">React.js</b> . With a keen eye for detail and a commitment
               to staying current with emerging technologies, I bring a comprehensive skill set to
                deliver seamless and user-friendly web solutions. Let's innovate and build together!"

              <br />
             
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">application based on AI
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> modern Javascript frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soufyanesraoui24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.snapchat.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaSnapchat />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
