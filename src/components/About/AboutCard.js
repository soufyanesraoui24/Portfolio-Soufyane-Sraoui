import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Sraoui Soufyane </span>
            from <span className="purple"> Algeria, Khenchela.</span>
            <br />I'm a 4th-year student, pursuing a <a href="https://www.univ-constantine2.dz/facntic/" target="blank">Bachelors degree in Software Development at NTIC</a>.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> read books
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            " "Coding is the art of turning imagination into reality" "{" "}
          </p>
          <footer className="blockquote-footer">Sraoui Soufyane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
