import { useEffect, useState } from "react";
import './home.css'


const FAQ = () => {
  const [FAQS, setFAQS] = useState([]);

  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((data) => setFAQS(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h1 className=" text-3xl md:text-6xl ml-3 md:ml-0 font-bold md:text-center pb-6">FAQ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
      
      <div>
      {FAQS?.slice(0,5).map((FAQ, idx) => {
        return (
          <div key={idx}>
            <div>
              <div className="accordion-group accordion-group-bordered md:m-5">
                <div className="accordion" tabIndex="0">
                  <label className=" text-[20px] flex items-center"> <span className="bg-primary-clr text-white m-3 p-2 py-1 rounded">{idx + 1}</span>  {FAQ.question}</label>
                  <div className="accordion-content">
                    <div className="min-h-0">
                        {FAQ.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      <div>
      {FAQS?.slice(5,11).map((FAQ, idx) => {
        return (
          <div key={idx}>
            <div>
              <div className="accordion-group accordion-group-bordered md:m-5">
                <div className="accordion" tabIndex="0">
                  <label className=" text-[20px]  flex items-center"> <span className="bg-primary-clr text-white m-3 p-2 py-1 rounded">{idx + 6}</span>  {FAQ.question}</label>
                  <div className="accordion-content">
                    <div className="min-h-0">
                        {FAQ.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
 
      </div>
      </div>
  );
};

export default FAQ;
