import React from "react";
import HtmlLogo from "../assets/HtmlLogo.png";
import CssLogo from "../assets/CssLogo.png";
import JsLogo from "../assets/JsLogo.jpeg";
import ReactLogo from "../assets/ReactLogo.png";
import NodeLogo from "../assets/NodeLogo.png";
import MongoDbLogo from "../assets/MongoDbLogo.jpg";
import MySqlLogo from "../assets/MySqlLogo.png";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Data = [
  {
    id: "1",
    image: HtmlLogo,
    title: "HTML",
  },
  { id: "2", image: CssLogo, title: "CSS" },
  { id: "3", image: JsLogo, title: "JavaScript" },
  { id: "4", image: ReactLogo, title: "React" },
  { id: "5", image: NodeLogo, title: "Node" },
  { id: "6", image: MongoDbLogo, title: "MongoDB" },
  { id: "7", image: MySqlLogo, title: "MySQL" },
];

const Skills = () => {
  return (
    <div className="container">
      <h2 className="text-center text-light">Skills</h2>
      <div className="row justify-content-center">
        {Data.map((d, id) => {
          return (
            <div className="col-2 m-2 col-md-2 card p-2 tech-logo">
              <img className="card-image-top " src={d.image} />
              <div className="d-none d-md-block card-body text-center">
                <h6 className="title">{d.title}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
