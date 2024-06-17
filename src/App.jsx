import Achievements from "./pages/achievements/Achievements";
import Banner from "./pages/banner/Banner";
import Categories from "./pages/category/Categories";
import Courses from "./pages/courses/Courses";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Reviews from "./pages/reviews/Reviews";
import Skills from "./pages/skills/Skills";
import Slider from "./pages/slidder/Slider";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
          height: "15px",
          backgroundColor: "grey",
          scaleX: scrollYProgress,
          transformOrigin: "left",
        }}
      ></motion.div>
      <Home />
      <Achievements />
      <Categories />
      <Courses />
      <Banner />
      <Skills />
      <Reviews />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
