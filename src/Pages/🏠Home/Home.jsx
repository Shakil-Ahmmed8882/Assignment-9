import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import FAQ from "./FAQ";
import WhyToChooseUs from "./WhyToChooseUs";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="space-y-11">
      <div data-aos="fade-left">
        <Banner></Banner>
      </div>
      <Courses></Courses>
      <div data-aos="fade-right">
        <WhyToChooseUs></WhyToChooseUs>
      </div>
      <div data-aos="fade-up">
        <FAQ></FAQ>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
