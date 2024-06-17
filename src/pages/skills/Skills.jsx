import style from "./Skills.module.scss";
import { data } from "./Data";

const Skills = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.head}>
          <p>Learn new skills with a flexible</p>
          <p>
            online <span>Courses</span>
          </p>
        </div>
        <div className={style.line}></div>
      </div>
      <div className={style.bottom}>
        {data && data.length > 0 ? (
          data.map((content) => (
            <div key={content.id} className={style.item}>
              <img src={content.img} alt="image" />
              <p className={style.title}>{content.title}</p>
              <p className={style.desc}>{content.desc}</p>
            </div>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
    </div>
  );
};

export default Skills;
