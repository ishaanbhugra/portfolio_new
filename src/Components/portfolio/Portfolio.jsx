import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React E-Commerce",
    img: "./ecommerce.png",
    desc: "Key Skills: ReactJS, MUI, API, Web API, Javascript. Designed and developed a feature-rich E-commerce website including all necessary features. Integrated third-party API for product data retrieval, while prioritizing a user-friendly UI for effortless navigation.",
    link:"https://ishaanbhugra.github.io/React_Ecommerce_Website/",
  },
  {
    id: 2,
    title: "Website for a Gym",
    img: "./gym.png",
    desc: "Key Skills: Front-End Web Development, HTML, CSS, Javascript, Bootstrap. Thoughtfully crafted a responsive website using a diverse array of front-end components.",
    link:"https://ishaanbhugra.github.io/mygym/",
  },
  {
    id: 3,
    title: "Russian License Number Plate Detector",
    img: "./russian.png",
    desc: "Key Skills: AI, ML, Pycharm, Python. This AI model is successful in detecting Russian license number plates within the provided media, regardless of their location within the frame.",
    link:"https://github.com/ishaanbhugra/RussianLicenseNumberPlateDetector",
  },
  {
    id: 4,
    title: "Mini Projects",
    img: "./other.png",
    desc: "Various other Mini Projects are uploaded and hosted on my Github.",
    link:"https://www.github.com/ishaanbhugra",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
            <button>CHECK IT OUT</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;