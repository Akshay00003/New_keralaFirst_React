import style from "./Courses.module.scss";
// import rating from "../../assets/images/rating.png";
import data from "./Data";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.head}>
          <p>
            Featured <span>Courses</span>
          </p>
          <div className={style.line}></div>
        </div>
        <div className={style.bt}>
          <button>View all courses</button>
        </div>
      </div>
      <div className={style.bottom}>
        {data && data.length > 0 ? (
          data.map((content) => (
            <motion.div
              initial={{ opacity: 0, x: 0, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              key={content.id}
              className={style.item}
            >
              <div className={style.pic}>
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: [1.2] }}
                  transition={{ duration: 1 }}
                  src={content.img}
                  alt="image"
                />
                <button style={{ background: content.bg, color: content.clr }}>
                  {content.cat}
                </button>
              </div>
              <div className={style.content}>
                <p className={style.head1}>{content.head}</p>
                <img src={content.src1} alt="img" />
                <p></p>
                <p className={style.name}>
                  <span>By : </span>
                  {content.name}
                </p>
                <p className={style.price}>{content.rate}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <h1> no courses</h1>
        )}
      </div>
    </div>
  );
};

export default Courses;
