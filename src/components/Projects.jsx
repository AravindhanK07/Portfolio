import React from "react";
import { clamp, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../assets/Logo3.jpg";
import Finance from "../assets/images.png";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <a
        href="https://cookhub-app-frontend.onrender.com"
        target="_blank"
        className="card  p-3 rounded border mb-5 border-0 proj mx-3"
        style={{
          maxWidth: "35em",
          flexDirection: "row",
          textDecoration: "none",
        }}
      >
        <img
          src={Logo}
          className="card-img-top shadow"
          alt="..."
          style={{
            margin: "auto",
            maxWidth: "25%",
            padding: "0.5em",
            borderRadius: "5%",
          }}
        />
        <div class="card-body">
          <h5 class="card-title">Cook-Hub</h5>
          <p class="card-text proj-details">
            Developed a robust food recipe application using MongoDB,
            Express.js, React.js, and Node.js. Implemented user authentication
            and CRUD operations. Ensured seamless user experience with intuitive
            navigation.
          </p>
        </div>
      </a>
      <a
        href="https://github.com/AravindhanK07/Finance-tracker-app"
        target="_blank"
        class="card p-3 rounded border border-0 proj mx-3"
        style={{
          maxWidth: "35em",
          flexDirection: "row",
          textDecoration: "none",
        }}
      >
        <img
          src={Finance}
          class="card-img-top shadow"
          alt="..."
          style={{
            margin: "auto",
            maxWidth: "25%",
            padding: "0.5em",
            borderRadius: "5%",
          }}
        />
        <div class="card-body">
          <h5 class="card-title">Budget-buddy</h5>
          <p class="card-text proj-details">
            Developed a finance tracker application with React.js, Node.js, and
            MongoDB for the database. Enabled users to manage expenses, track
            income, and visualize financial data through interactive tables.
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default Projects;
