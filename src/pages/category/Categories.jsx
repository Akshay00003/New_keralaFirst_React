import styles from "./Categories.module.scss";
import i1 from "../../assets/images/i1.png";
import i2 from "../../assets/images/i2.png";
import i3 from "../../assets/images/i3.png";
import i4 from "../../assets/images/i4.png";
import i5 from "../../assets/images/i5.png";
import i6 from "../../assets/images/i6.png";
import { motion } from "framer-motion";

const Categories = () => {
  const data = [
    {
      id: 1,
      src: i1,
      br: "2px",
      bb: "2px",
      bl: "0px",
      bt:"0px",
      desc: "Applied Physics",
    },
    {
      id: 2,
      src: i2,
      br: "2px",
      bb: "2px",
      bt:"0px",
      desc: "Mathematics",
    },
    {
      id: 3,
      src: i3,
      br: "0px", // Ensure all items have borderRight
      bb: "2px",
      bt:"0px",
      desc: "Language",
    },
    {
      id: 4,
      src: i4,
      br: "2px",
      bb: "2px",
      bf:"0px",
      bl:"0px",
      desc: "Applied Chemistry",
    },
    {
      id: 5,
      src: i5,
      br: "2px",
      bb: "0px",
      desc: "Data Science",
    },
    {
      id: 6, // Corrected duplicate ID
      src: i6,
      br: "0px", // Ensure all items have borderRight
      bb: "2px",
      desc: "Basic English",
    },
  ];
  return (
    <div className={styles.container}>
      <motion.div
      // whileInView={{x:[-500,0]}}
      // transition={{duration:1}}
       className={styles.top}>
        <p>
          Top <span>Categories</span>
        </p>
        <div className={styles.line}></div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 0, y: 300 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1,  }}
       className={styles.bottom}>
        {data.map((item) => (
          <motion.div
            key={item.id}
            style={{borderLeft:item.bl,borderTop:item.bt, borderBottom: item.bb, borderRight: item.br }}
            className={styles.box}
          >
            <img src={item.src} alt="image" />
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;
