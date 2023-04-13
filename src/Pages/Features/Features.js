import React from "react";
import "./Features.scss";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import unlimitedbrowser from "../../assets/unlimited-browsers.svg";
import onPremise from "../../assets/on-premise cluster.svg";
import crossPlatform from "../../assets/cross-platform.svg";
import liveTesting from "../../assets/live-testing.svg";
import effortless_scalability from "../../assets/effortless-scalability.svg";
import session_recording from "../../assets/session-recording.svg";
import manual_sessions from "../../assets/manual-sessions.svg";
import Priority_support from "../../assets/priority-support.svg";

const Features = () => {
  return (
    <div className="features_container" id="features">
      <Container data-aos="zoom-in">
        <div data-aos="zoom-in">
          {/* <h1>Features</h1> */}
          <div className="cloudifyTests">Why CloudifyTests?</div>
          <p>
            Ensure your web/mobile applications' compatibility across different
            browsers, environments and devices. We allow for a higher throughput
            of test scenario completion, quick identification of defects and
            handling of multiple parallel and sequential sessions, helping your
            product achieve
          </p>
          <div className="text">
            increased efficiency and improved scalability.
          </div>
        </div>
      </Container>
      <div style={{ background: "#69d5ab" }}>
        <Container style={{ backgroundColor: "white" }}>
          <div data-aos="zoom-in">
            {/*  */}
            <Box sx={{ flexGrow: 1 }}>
              <div
                className="box_container"
                style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
              >
                {/* <div className="box_div"> */}
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img src={unlimitedbrowser} alt="unlimitedbrowser" />
                      </div>
                    </div>
                    <h3>Legacy Browsers</h3>
                    <div className="text">
                      Run test cases on browsers like Chrome, Edge, Opera,
                      Firefox
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img src={onPremise} alt="onPremise" />
                      </div>
                    </div>
                    <h3>On-Premise Cluster</h3>
                    <div className="text">
                      Deploy on any on-premise cluster for enhanced control and
                      security
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img src={crossPlatform} alt="crossPlatform" />
                      </div>
                    </div>
                    <h3>Cross Platform</h3>
                    <div className="text">
                      Offers cross-browser testing for seamless web application
                      compatibility
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img src={liveTesting} alt="liveTesting" />
                      </div>
                    </div>
                    <h3>Live Testing</h3>
                    <div className="text">
                      Enhances your testing experience with live session
                      previews for effective debugging
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>

              {/*  */}
              <div
                className="box_container"
                style={{
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "2rem",
                }}
              >
                {/* <div className="box_div"> */}
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img
                          src={effortless_scalability}
                          alt="effortless_scalability"
                        />
                      </div>
                    </div>
                    <h3>Effortless Scalability</h3>
                    <div className="text">
                      Achieve build goals with ease, scale on-demand with
                      parallel testing
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img src={session_recording} alt="session_recording" />
                      </div>
                    </div>
                    <h3>Session Recording</h3>
                    <div className="text">
                      Capture browser screen and save it directly to
                      S3-compatible storage
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img src={manual_sessions} alt="manual_sessions" />
                      </div>
                    </div>
                    <h3>Manual Sessions</h3>
                    <div className="text">
                      Create manual sessions directly from capabilities
                      effortlessly
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="box">
                  <div>
                    <div className="img_conatiner">
                      <div className="img_div">
                        <img src={Priority_support} alt="Priority_support" />
                      </div>
                    </div>
                    <h3>Priority Support</h3>
                    <div className="text">
                      Senior support engineers, response time SLAs and on-call
                      support
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Features;
