import { useRef } from "react";
import "./about.scss";
import { color, motion, useInView } from "framer-motion";

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

const About = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            //   className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            whileInView="animate"
            //   ref={ref}
            //   animate={isInView && "animate"}
            style={{ maxWidth: "95vw", margin: "auto" }}
        >
            {/* <motion.div className="textContainer" variants={variants}>
        <h1>ABOUT ISHAAN</h1>
        <hr />
      </motion.div> */}
            <motion.div style={{ textAlign: "center", padding: "20px", fontSize: '50px', textDecoration: "bold" }} variants={variants}>
                <div className="title">
                    {/* <img src="/people.webp" alt="" /> */}
                    <h1>
                        <motion.b style={{ color: "orange" }}>&lt; ABOUT ISHAAN /&#62;</motion.b>
                    </h1>
                </div>
                {/* <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div> */}
            </motion.div>
            <motion.div variants={variants}>
                <h1 style={{ color: "orange", fontSize: '30px' }}>SUMMARY</h1>
                <p>Highly motivated and enthusiastic IT engineer seeking an entry-level position to kickstart my career in the field of Information Technology. Eager to apply my technical knowledge, problem-solving skills and strong aptitude for learning in a dynamic and collaborative environment.<br />
                    A skilled Software Engineer with a strong background in web development. Proficient in HTML, CSS, JavaScript, ReactJS and various front-end frameworks like Bootstrap, MUI, etc. Dedicated to staying up-to-date with industry trends and continuously enhancing skills to deliver exceptional software solutions.</p>
                {/* <motion.div style={{textAlign:"right"}}> */}
                <h1 style={{ color: "orange", fontSize: '30px' }}>EDUCATION</h1>
                <p>
                <b>Dr. Akhilesh Das Gupta Institute of Technology & Management, IP University, New Delhi</b>
                    <br />2024 | B.Tech. - IT
                    <b><br />Bal Bharati Public School, GRHM, New Delhi</b>
                    <br />2020 | 12th | CBSE | 89.00%
                    <br />2018 | 10th | CBSE | 89.80%
                </p>
                {/* </motion.div> */}

                <h1 style={{ color: "orange", fontSize: '30px' }}>SKILLS</h1>
                <motion.div
                style={{width:""}}
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                  <b>Software Engineering, Web Development, Front-End Web Development || HTML, CSS, Javascript, Bootstrap, ReactJS, MUI || C, CPP, Python, SQL</b>
                </motion.div>
                <h1 style={{ color: "orange", fontSize: '30px' }}>PERSONAL DETAILS</h1>
                <p>
                    <b>Gender:  </b>Male
                    <br /><b>Marital Status:  </b>Single
                    <br /><b>Date of Birth:  </b>16 September 2002
                    <br /><b>Known Languages:  </b>English, Hindi, French
                </p>

                <h1 style={{ color: "orange", fontSize: '30px' }}>HOBBIES / INTERESTS</h1>
                <ul>
                    <li>Fitness</li>
                    <li>Badminton</li>
                    <li>Music</li>
                    <li>Cooking</li>
                    <li>Aviation</li>
                </ul>

            </motion.div>
        </motion.div>
    );
};

export default About;


