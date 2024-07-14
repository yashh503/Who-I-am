import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import otc from "../../Assets/Projects/otc.png";
// import emotion from "../../Assets/Projects/emotion.png";
import llmadmin from "../../Assets/Projects/ADMINzla.png";
import LLA from "../../Assets/Projects/Language learning app.png";
// import suicide from "../../Assets/Projects/SSM.png";
import SURGICAL from "../../Assets/Projects/SSM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>\
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={LLA}
              isBlog={false}
              title="Language Learning App"
              description="Zoundslike is an innovative Language learning app developed by me, leveraging a full-stack development approach. Available on web, Android, and iOS platforms through Cordova, it offers customizing your learning with diverse topics and adjustable difficulty levels. Choose from solo or multiplayer modes. Integrated PusherJS, Twilio, Amazon Incentive APIs, and Gemini API etc. The frontend is built using Nuxt and Vue, while the backend is developed with Node.js, Express, and MongoDB."
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={SURGICAL}
              isBlog={false}
              title="Surgical Scheduling Management Software"
              description="It is a surgical CALENDAR, integrates surgeons’, vendors’, and facility schedules. Establishing seamless integration channels with EMR systems for patient data retrieval and management. Developed in ReactJs, NodeJs and Dynamodb. also integrated google calendar in it."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={otc}
              isBlog={false}
              title="NFC cards management system"
              description="The NFC management system offers a seamless digital business card solution with NFC
              technology, enabling users to share contact details and links with a single tap. It features
              three plans: Free, Professional, and Team. The Team plan includes centralized employee
              card management, role assignments, and customizable access permissions, streamlining
              digital networking and team coordination for businesses.also worked on custom percentage and custom amount discount functionality for buying plans and related addons."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={llmadmin}
              isBlog={false}
              title="Admin Panel of Language Learning App"
              description="This Admin Panel is a users and games management tool developed in React.js with a Node.js and Express backend, and MongoDB database. Utilizing Redux, it efficiently manages all categories and words, tracks performance of  all players(users) , and oversees all app functionalities, ensuring a seamless and secure user experience."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
