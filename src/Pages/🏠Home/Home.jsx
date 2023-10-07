import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import WhyToChooseUs from "./WhyToChooseUs";


const Home = () => {
      return (
            <div className="space-y-11">
                        <Banner></Banner>
                        <Courses></Courses>
                        <WhyToChooseUs></WhyToChooseUs>
                        
            </div>
      );
};

export default Home;