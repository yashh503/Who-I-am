import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiTwotoneMail,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have fallen in love with coding and believe I have learned quite a bit…  🤷‍♂️
              <br />
              <br />I am a
              <i>
                <b className="purple"> MERN Stack Developer &nbsp;</b>
              </i>
                with innovative solutions and experience in building responsive websites and web applications. I can help you create a website that meets your specific needs and requirements.
              <br />
              <br/>

              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">Software</b> and
                exploring areas related to{' '}
                <b className="purple">
                   AI.
                </b>
              </i>
              <br />
              <br />
              I also enjoy leveraging <b className="purple">Vue.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern databases
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">  MongoDB and DynamoDB.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yashh503"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="mailto:yashvyas53202@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yash503"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yashh_503"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
