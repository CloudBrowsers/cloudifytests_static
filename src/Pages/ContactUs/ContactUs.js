import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "./ContactUs.scss";
import axios from "axios";
import { jira_api } from "../../utils/constants";

const JIRA_API_ENDPOINT = jira_api;

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  function createJiraIssue() {
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      fields: {
        project: {
          key: "CUF",
        },
        issuetype: {
          name: "Lead",
        },
        summary: "CloudifyTest2",
        description: {
          type: "doc",
          version: 1,
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone No: ${phoneNo}\nMessage: ${message}`,
                },
              ],
            },
          ],
        },
      },
    };

    return axios.post(JIRA_API_ENDPOINT, data, {
      headers,
    });
  }
  const [summary, setSummary] = useState("");
  //   data:{
  //     "firstName":"shivani",
  //     "lastname":"rajput",
  //     "email":"a@gmail.com",
  //     "mobile":98463900,
  //     "message":"hii"
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ firstName, lastName, email, phoneNo, message });
    createJiraIssue()
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setMessage("");
  }
  return (
    <Container id="contact" data-aos="zoom-in">
      {/* <APIContact /> */}
      <div className="contact_box">
        <div className="top_secion" data-aos="fade-up">
          <h1>Schedule a call with us</h1>

          <p>
            To receive further information, please fill out the form below, and
            we'll be in touch with you shortly.
          </p>
        </div>
      </div>
      <div className="contact_section" data-aos="zoom-in">
        <form onSubmit={handleSubmit}>
          <div className="textfield_section">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className="textField"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              className="textField"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              fullWidth
            />
          </div>
          <div className="textfield_section_2">
            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              className="textField"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              className="textField"
              type="text"
              value={phoneNo}
              onChange={(event) => setPhoneNo(event.target.value)}
              fullWidth
            />
          </div>
          <div className="message_field">
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              className="textField"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              fullWidth
            />
          </div>
          <div className="btn_section">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ContactUs;
