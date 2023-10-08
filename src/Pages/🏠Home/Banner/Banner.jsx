import bannerImg from '../../../../src/assets/img/banner.png'

const Banner = () => {
  const studentReviews = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      says: "I had an amazing learning experience at Skillery. The instructors were knowledgeable, and the course content was very comprehensive."
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      says: "Skillery offers top-notch courses with hands-on projects. It helped me gain practical skills that are valuable in my career."
    },
    {
      name: "Ella Wilson",
      email: "ella@example.com",
      says: "I highly recommend Skillery to anyone looking to improve their skills. The support from the community and mentors is fantastic."
    },
    {
      name: "David Brown",
      email: "david@example.com",
      says: "Skillery has a user-friendly platform, and the courses are well-structured. I'm glad I chose Skillery for my online learning journey."
    }
  ];
  
  // You can use this updated `studentReviews` array with different names in your application.

  
  return (<div className="w-full banner-bg h-[80vh] relative">
    <img className='w-full h-full object-cover object-top' src={bannerImg} alt="" />

  </div>);
};
export default Banner;
