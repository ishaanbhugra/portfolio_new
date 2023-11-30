import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
    //   ref={ref}
    //   animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Throughout my internships, I've had the privilege of gaining hands-on experiences
      <br />that have enriched my understanding and skills of various domains.
        </p>
        <hr />
      </motion.div>
      <motion.div style={{textAlign:"center",padding:"20px",fontSize:'50px',textDecoration:"bold"}} variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>INTERNSHIP</motion.b> EXPERIENCE
          </h1>
        </div>
        {/* <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div> */}
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >

          <h2 style={{ backgroundColor: "orange", color: "black", textAlign: "center" }}>Velocis Systems Pvt. Ltd., Noida, UP</h2>


          <h4>01 Aug, 2023 - 30 Sep, 2023
            <br />
            Web Developer
            <br />
            <br /><br />
            Key Skills: ReactJS, MUI, API, Javascript</h4>
          <p>
            Led the development of a "E-commerce website" project during my internship, collaborating closely with professionals to gain practical, hands-on experience in ReactJS and web development.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ backgroundColor: "orange", color: "black", textAlign: "center" }}>IBM</h2>

          <br />
<h4>01 Aug, 2022 - 30 Sep, 2022


  <br />
  AI-ML Programmer
  <br />
  <br /><br />
  Key Skills: Python, AI, ML, Deep Learning</h4>
  
<p>
  
An Inhouse Training that helped me to complete my Industry Oriented Project- ‘Russian License Number Plate Detector’. I learnt and worked for technologies like AI, ML, DL, Python and its libraries like Pandas, Opencv, Matplotlib, Numpy.
</p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ backgroundColor: "orange", color: "black", textAlign: "center" }}>TwoWaits</h2>


<h4>01 Jun, 2022 - 30 Jun, 2022


  <br />
  DSA Intern
  <br />
  <br /><br />
  Key Skills: Data Structures</h4>
<p>
Helped me to improve my DSA skills.<br /><br /><br /><br /><br /><br /><br />
</p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ backgroundColor: "orange", color: "black", textAlign: "center" }}>3i Education</h2>


<h4>01 Nov, 2021 - 30 Apr, 2022


  <br />
  Academic Counselor
  <br />
  <br /><br />
  Key Skills: Communication Skills</h4>
<p>
A post that gave me opportunity to interact and communicate with people around the globe. It immensely helped me to gain confidence and improve my communication skills.
</p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;


