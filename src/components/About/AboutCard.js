import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishant Singhal </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am a 3rd year Student pursuing B.Tech in Computer Science in<br/> Maharaja Agrasen Institute of Technology.
            <br />
              My field of Interest's are building new &nbsp;
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Flutter and things related to it
                </b>. Also I love to contribute in{" "}
                <b className="purple">Open Source</b>.
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js, Angular</b> and
             
                <b className="purple">
                  {" "}
                  Flutter
                </b>.
                <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Making new friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime,Movies(especially Marvel) and Web Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always try new things until you try everything" {" "}
          </p>
          <footer className="blockquote-footer">Nishant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
