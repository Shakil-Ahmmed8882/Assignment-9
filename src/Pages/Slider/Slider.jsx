import { useRef} from 'react';
import bannerImg from '../../assets/img/banner.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full bg-blend-darken h-full object-top' src={bannerImg} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-top' src="https://i.ibb.co/Rj7pjMt/slider1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-top' src="https://i.ibb.co/xXqFHrX/slider2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-center' src="https://i.ibb.co/kMRm1vt/slider3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-center' src="https://i.ibb.co/NmCNQV5/slider4.jpg" alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
