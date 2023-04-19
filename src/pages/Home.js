import React from "react";
import { LinkedIn, Email, GitHub } from "@material-ui/icons";
import "../styles/Home.css";
import Resume from "../assets/AK_Resume.pdf";
import { MdDownload } from "react-icons/md";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Aditya</h2>
        <div className="prompt">
          <p>
            A Web developer with a passion for learning new technologies and
            creating magic with coding.
          </p>
          <a
            href="https://www.linkedin.com/in/adityakulkarni4494/"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=kulkarniaditya94@gmail.com&tf=1"
            target="_blank"
          >
            <Email />
          </a>
          <a href="https://github.com/Aditya-k44" target="_blank">
            <GitHub />
          </a>
          <br />
          <div>
            <a href={Resume} download="AK_Resume">
              <button className="download-btn">
                Download CV
                {/* <MdDownload color="#21325e"/> */}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJs, Redux, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascripts, C, C++, Python,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
