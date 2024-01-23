import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{marginLeft:"14px"}}
        >
          Welcome To MY PORTFOLIO ! &emsp; <u>(Last Updated : 2023)</u>
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/ishaan-bhugra-a1b563213/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.github.com/ishaanbhugra">
            <img src="/github.png" alt="" />
          </a>
          <a href="mailto:ishaanbhugra2@gmail.com">
            <img src="/gmail.png" alt="" />
          </a>
          <a href="https://wa.me/917011025720">
            <img src="/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;