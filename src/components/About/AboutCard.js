import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Yash Vyas </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently employed as a MERN Stack Developer.
            <br />
            I have completed <span className="purple">Bachelor of Engineering (B.E.)</span> in the Information Technology department at Gandhinagar Institute of Technology, affiliated with GTU.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp;Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />&nbsp; Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp;Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
