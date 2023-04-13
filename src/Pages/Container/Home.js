import React, { useEffect } from "react";
import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/banner-image.svg";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Box id="home" className="home_container">
      <Box data-aos="fade-left" className="left_section">
        <div>
          <div className="text">WELCOME TO CLOUDIFYTESTS</div>
          <div className="cloud_text">
            A CLOUD BASED <span>CROSS-BROWSER</span>
            <div>TESTING PLATFORM</div>
          </div>
          <hr />
          <div className="section_bottom">
            Clean and competent testing solutions for your
            <div>
              Selenium <span>Automations</span>
            </div>
          </div>
          <div className="demo_section">
            <Link
              className="demo"
              to="https://calendly.com/dhingra-sara-1/get-started-with-cloudify-tests?month=2023-04"
            >
              Schedule your free trial
            </Link>
          </div>
        </div>
      </Box>

      <Box data-aos="fade-right" className="right_section">
        <img src={banner} alt="banner" />
      </Box>
    </Box>
  );
}

export default Home;
