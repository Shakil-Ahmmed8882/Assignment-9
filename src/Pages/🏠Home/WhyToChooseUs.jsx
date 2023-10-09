import { useEffect, useState } from 'react';
import './home.css'

import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import img3 from'../../assets/img/img3.png'
import img4 from'../../assets/img/img4.png'
import img5 from'../../assets/img/img5.png'
import img6 from'../../assets/img/img6.png'
const arr =[img1,img2,img3,img4,img5,img6]

const WhyToChooseUs = () => {

      const [reasons, setReasons] = useState([])
      useEffect(() => {
            // Fetch data from the '/WhyToChoose' endpoint
            fetch('WhyToChoos.json')
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((data) => {
                // Log the retrieved data to the console
                setReasons(data)
              })
              .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
              });
          }, [])


      return (
            <div className=' bg-[#f1f1f1] py-9 px-3 md:px-11'>
                        <h1 className="text-2xl sm:text-3xl text-left md:text-4xl lg:text-5xl py-3 md:text-center pt-5 pb-4 font-bold mb-4">Why people choose Skillery?</h1>
            <div className="w-full  flex md:gap-5">
                  <div className='flex-1'>
                        <div  className='grid md:grid-cols-2 gap-5 items-stretch'>
                              {
                                    reasons?.map((reason, idx) => {
                                          const {title,description} = reason;
                                          return <article className=' text-center rounded-lg flex bg-white p-3 hover:outline outline-[#dbdbdb] outline-[2px] shadow ' key={idx}>
                                                <div className='space-y-1'>
                                                <img className='mx-auto border-4 w-[70px] h-[70px] border-[#bfbfbf35] rounded-full p-1' src={arr[idx]} alt="" />
                                                <h1 className='text-[18px] font-bold'>{title}</h1>
                                                <p className='text-[#484747e6] text-[14px]'>{description}</p>
                                                </div>
                                          </article>
                                    })
                              }
                        </div>
                  </div>
                  <div className='md:w-[350px] whyToPseudo flex-grow-1 bg-img'>
                      
                  </div>
            </div>
            </div>
      );
};

export default WhyToChooseUs;