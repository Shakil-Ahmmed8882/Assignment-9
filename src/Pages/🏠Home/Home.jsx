import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import FAQ from "./FAQ";
import WhyToChooseUs from "./WhyToChooseUs";


const Home = () => {
      return (
            <div className="space-y-11">
                        <Banner></Banner>
                        <Courses></Courses>
                        <WhyToChooseUs></WhyToChooseUs>
                        <FAQ></FAQ>
                        <Footer></Footer>
            </div>
      );
};

export default Home;