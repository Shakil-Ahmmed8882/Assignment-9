import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import FAQ from "./FAQ";
import WhyToChooseUs from "./WhyToChooseUs";
import { useEffect } from "react";
import useAuth from "../../utils/UseContext";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { loading } = useAuth();

  if (loading) {
    return <div className="w-full  h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  return (
    <div className="space-y-11">
      <div data-aos="fade-left">
        <Banner></Banner>
      </div>
      <div className="mt-20 py-7  gap-2 bg-gray-100">
      <h1 className="text-3xl md:text-6xl font-bold md:text-center pb-6">
          Courses
        </h1>
      <Courses></Courses>
      </div>
      <div data-aos="fade-right">
        <WhyToChooseUs></WhyToChooseUs>
      </div>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
