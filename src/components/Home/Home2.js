import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';

function Home2() {
  const [checked, setChecked] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setChecked(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this value as needed
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row ref={sectionRef}>
          <Col md={8}>
            <Zoom in={checked}>
              <Paper elevation={0} style={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                <h1 style={{ fontSize: "2.1em", color: "white" }}>
                   BRIEF <span className="purple"> INTRODUCTION </span>
                </h1>
                <p className="home-about-body" style={{ color: "white" }}>
                  I am a final year software Engineering Student at FAST NUCES Karachi with a strong passion for Full stack Web Development And Java Development.
                  <br />
                  <br />The languages in which I have hands-on experience are
                  <i>
                    <b className="purple"> Java, HTML, CSS, JavaScript, PHP and SQL. </b>
                  </i>
                  <br />
                  <br />
                  My field of Interest's are building new &nbsp;
                  <i>
                    <b className="purple">Web Technologies and Full Stack Projects </b> and
                    also in areas related to{" "}
                    <b className="purple">
                      Java Development.
                    </b>
                  </i>
                  <br />
                  <br />
                  In my spare time, You'll find me learning new technologies and building projects, the recent Frameworks and technologies I have worked on are {" "}
                  <b className="purple">Laravel</b> and
                  <i>
                    <b className="purple">
                      {" "}
                      Modern Javascript Library and Frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="purple"> React.js and Node.js</b>
                  </i>
                </p>
              </Paper>
            </Zoom>
          </Col>
          <Col md={4}>
            <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
              <Paper elevation={0} style={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Tilt>
                  <img src={myImg} style={{ height: "440px" }} className="img-fluid" alt="avatar" />
                </Tilt>
              </Paper>
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
              <Paper elevation={0} style={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                <h1 style={{ color: "white" }}>REACH OUT</h1>
                <p style={{ color: "white" }}>
                  Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a href="mailto:haroon.mirza040602@gmail.com" className="icon-colour home-social-icons">
                      <AiOutlineMail />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a href="https://github.com/HaroonMirza02" className="icon-colour home-social-icons">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a href="https://www.linkedin.com/in/haroonmirza02/" className="icon-colour home-social-icons">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Paper>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
