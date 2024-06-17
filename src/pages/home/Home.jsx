import styles from "./Home.module.scss";
import Navbar from "../../components/navbar/Navbar";
import pro from "../../assets/images/pro.png";
import s1 from "../../assets/images/s1.jpg";
import s2 from "../../assets/images/s2.jpg";
import { motion } from "framer-motion";
// import banner from '../../assets/images/banner.png'

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.middle}>
        <div className={styles.left}>
          <div className={styles.head}>
            <p>
              Explore <span>better skills</span>
            </p>
            <p>through thousand</p>
            <p>online courses</p>
            <p className={styles.small}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quo laborum fugit aspernatur quam nostrum?
            </p>
          </div>
          <div className={styles.center}>
            <img src={pro} alt="image" />
            <div className={styles.wrapper}>
              <p>Enrolled</p>
              <p className={styles.sm}>Students</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <motion.button drag dragSnapToOrigin>
              Find our courses
            </motion.button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.lt}>
            <div className={styles.pic1}>
              <motion.img
                whileHover={{ scale: [2, 1] }}
                transition={{ duration: 2 }}
                src={s1}
                alt="image"
              />
            </div>
            <motion.div
              animate={{ x: [-20, 0, -20], y: [10, 0, 10] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={styles.shape1}
            >
              <div className={styles.halfCircle1}></div>
              <div className={styles.halfCircle2}></div>
            </motion.div>
          </div>
          <div className={styles.rt}>
            <motion.div
              animate={{ x: [20, 0, 20] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={styles.shape2}
            >
              <div className={styles.triangle1}></div>
              <div className={styles.triangle2}></div>
            </motion.div>
            <div className={styles.pic2}>
              <motion.img whileHover={{ scale: [2, 1] }}
                transition={{ duration: 2 }} src={s2} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
