import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import { LinkedIn, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.scss";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import LeftSection from "./LeftSection";

function Footer() {
  return (
    <div className="footer">
      <Container className="footer_container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <LeftSection />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <Typography variant="h6" gutterBottom>
                Testing Solutions
              </Typography>
              <Typography variant="body1" gutterBottom>
                <ul className="footer-list1">
                  <li>Web Testing</li>
                  <li>Mobile Testing</li>
                  <li>Selenium Testing</li>
                  <li>Live Testing</li>
                  <li>Locally Hosted Testing</li>
                </ul>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <Typography variant="h6" gutterBottom>
                Upcoming Features
              </Typography>
              <Typography variant="body1" gutterBottom>
                <ul className="footer-list1">
                  <li>Playwright and Cypress Integration</li>
                  <li>Mobile Emulators & Simulators</li>
                  <li>Error Analysis</li>
                  <li>Rest API Access</li>
                  <li>Integration With CI/CD Tools</li>
                </ul>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="contect_links">
            <div>
              <Typography variant="h6" gutterBottom>
                Contact With Us
              </Typography>
              <Typography variant="body1" gutterBottom>
                <div className="icon-container">
                  <IconButton className="iconbtn" aria-label="LinkedIn">
                    <Link to="https://www.facebook.com/profile.php?id=100082858329131">
                      <FacebookIcon className="icon" />
                    </Link>
                  </IconButton>

                  <IconButton className="iconbtn" aria-label="LinkedIn">
                    <Link to="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFMjoP6XXbTQQAAAYdmM3TIB3IxazdeS8YRMKbrFTnGu4aEXJXouXKgAi-qNUHbkzeLUOnWntsw_4Lmmaq_wJXW45f_Bz5VhI0Nz5P_j4KfjN_WpHeO7f0MPiougvQbx4wWsGY=&original_referer=https://www.cloudifylabs.io/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcloudify-labs%2F">
                      <LinkedIn className="icon" />
                    </Link>
                  </IconButton>
                  <IconButton className="iconbtn" aria-label="YouTube">
                    <Link to="https://www.youtube.com/@CloudifyLabs">
                      <YouTube className="icon" />
                    </Link>
                  </IconButton>
                </div>
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className="copyright_text">Copyright 2023. All right reserved</div>
      </Container>
    </div>
  );
}

export default Footer;
