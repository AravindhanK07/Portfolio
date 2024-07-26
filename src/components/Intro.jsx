import React from "react";
import profile from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";

const Intro = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-12 d-flex justify-content-md-end justify-content-center">
          <div
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              className="Profileimg"
              src={profile}
              style={{
                width: "auto",
                height: "100%",
                translate: "-240px",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex align-items-center mt-3  ">
          <div>
            <h1 className="text-light fw-bold mb-3">
              <ReactTyped
                strings={[
                  "Hey there!!",
                  "I am Aravindhan",
                  "MERN stack developer",
                ]}
                typeSpeed={70}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </h1>

            <p className="text-light text-md-start proj-details">
              Passionate and detail-oriented Web developer with a strong
              foundation in modern web technologies and hands-on experience in
              HTML5, CSS3, JavaScript, and popular libraries and frameworks such
              as React.js, Express.js and TailwindCSS. Eager to contribute to
              innovative projects and collaborate with cross-functional teams to
              deliver exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
