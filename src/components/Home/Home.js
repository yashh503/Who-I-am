import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/../Assets/Yash Vyas Resume.pdf";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section className="main-Home">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> YASH VYAS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ padding: "0px 50px", textAlign: "left" ,margin:'20px 0px' }}>
                <Tilt>
                  <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                  >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                </Tilt>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <Tilt> */}
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid main-home-pic"
                style={{ maxHeight: "450px" }}
              />
              {/* </Tilt> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
