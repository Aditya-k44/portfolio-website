import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://storage.googleapis.com/pod_public/750/126871.jpg"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://storage.googleapis.com/pod_public/750/126871.jpg"
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://storage.googleapis.com/pod_public/750/126871.jpg"
          target="_blank"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/adityakulkarni4494/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div>
        <p>&copy; 2023 Aditya Kulkarni</p>
      </div>
    </div>
  );
}

export default Footer;
