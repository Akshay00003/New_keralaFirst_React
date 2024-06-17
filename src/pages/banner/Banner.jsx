import styles from "./Banner.module.scss";
import men from "../../assets/images/men.jpg";
import girl from "../../assets/images/girl.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className={styles.container}>
      <motion.div
        whileInView={{ x: [-200, 0] }}
        transition={{ duration: 1,delay:0.5 }}
        className={styles.left}
      >
        <div className={styles.left1}>
          <p className={styles.leftHead}>
            Learn new skills to prove your skills
          </p>
          <p className={styles.leftSubHead}>
            Edubin is a reliable kidcare platform that matches parents Perfect
            for Online
          </p>
          <button type="button">Try for free</button>
        </div>
        <div className={styles.left2}>
          <div className={styles.lt}>
            <img src={men} alt="image" />
            <div className={styles.square}></div>
          </div>
          <div className={styles.rt}>
            <div className={styles.triangle}></div>
            <div className={styles.halfCircle}></div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [200, 0] }}
        transition={{ duration: 1 ,delay:0.5}}
        className={styles.right}
      >
        <div className={styles.right1}>
          <p className={styles.rightHead}>
            Prove your potential by develop skills
          </p>
          <p className={styles.rightSubHead}>
            Edubin is a reliable kidcare platform that matches parents Perfect
            for Online
          </p>
          <button type="button">Explore courses</button>
        </div>
        <div className={styles.right2}>
          <div className={styles.r1}>
            <img src={girl} alt="img" />
            <div className={styles.rectangle}></div>
          </div>
          <div className={styles.r2}>
            <div className={styles.tri}></div>
            <div className={styles.hCircle}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
