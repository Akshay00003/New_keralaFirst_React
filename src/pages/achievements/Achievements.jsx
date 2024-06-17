import style from "./Achievements.module.scss";
import { useSpring, animated } from "react-spring";

const Achievements = () => {
  const data = [
    {
      id: 1,
      value: 200,
      icon: "M+",
      desc: "Learners Enrolled",
    },
    {
      id: 2,
      value: 400,
      icon: "M+",
      desc: "Project Submitted",
      st: "30px",
    },
    {
      id: 3,
      value: 73,
      icon: "%",
      desc: "Carrier Changed",
    },
    {
      id: 4,
      value: 204,
      icon: "K",
      desc: "Certificate Earned",
      st: "30px",
    },
  ];
  return (
    <div className={style.container}>
      {data.map((item) => {
        const { number } = useSpring({
          from: { number: 0 },
          number: item.value,
          delay: item.id * 500,
          config: { duration: 2000 },
        });

        return (
          <div
            key={item.id}
            className={style.circle}
            style={{ marginTop: item.st }}
          >
            <div className={style.content}>
              <animated.p>
                {number.to((n) => Math.floor(n).toLocaleString())}
              </animated.p>
              <span className={style.icon}>{item.icon}</span>
            </div>

            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
