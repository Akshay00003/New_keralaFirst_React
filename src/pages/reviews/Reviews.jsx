import style from "./Reviews.module.scss";
import { data } from "./Data";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 200 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={style.container}
    >
      <div className={style.subContainer}>
        <div className={style.top}>
          <p>
            Student <span>Testimonial</span>
          </p>
          <div className={style.line}></div>
        </div>
        <div className={style.bottom}>
          {data && data.length > 0 ? (
            data.map((content) => (
              <div key={content.id} className={style.item}>
                <p>{content.desc}</p>
                <div className={style.profile}>
                  <img src={content.img} alt="image" />
                  <div className={style.name}>
                    <p className={style.username}>{content.name}</p>
                    <p className={style.organization}>{content.organization}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>No items</h1>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
