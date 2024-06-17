import style from "./Slider.module.scss";
import sd1 from "../../assets/images/sd1.png";
import sd2 from "../../assets/images/sd2.png";
import sd3 from "../../assets/images/sd3.png";
import sd4 from "../../assets/images/sd4.png";
import sd5 from "../../assets/images/sd5.png";

const Slider = () => {
  const data = [
    {
      id: 1,
      img: sd1,
    },
    {
      id: 2,
      img: sd2,
    },
    {
      id: 3,
      img: sd3,
    },
    {
      id: 4,
      img: sd4,
    },
    {
      id: 5,
      img: sd5,
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.top}>
        <p>
          Our vast mentor metwork includes experts from leading companies like
        </p>
      </div>
      <div className={style.bottom}>
        {data.map((content) => (
          <div key={content.id} className={style.item}>
            <img src={content.img} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
