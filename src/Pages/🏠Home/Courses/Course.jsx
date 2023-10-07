import PropTypes from 'prop-types'
import { BsCheck } from 'react-icons/bs';
import { Rating } from '@smastrom/react-rating'
import './course.css'

import '@smastrom/react-rating/style.css'

import { Link } from 'react-router-dom';
const Course = ({ course }) => {
  const { id,title, imageUrl, reviews,duration } = course;
  const {rating} = reviews[0]




  return (
    <div className='bg-white p-3 rounded space-y-3 ' >
      <div className='flex medium-style gap-2'>
      <h1 className='flex-1 font-bold'>{title}</h1>
      <div className='relative'>
      <img className='w-[140px]  flex-1 rounded-lg' src={imageUrl} alt="" />
      <span className='absolute right-2 rounded -bottom-3 md:top-[53px] md:right-1 bg-green-600 text-white px-3 py-1 '>Free</span>
      </div>
      </div>
      <div className='flex gap-3 pt-4'>
      <p className='flex gap-2 font-bold'><Rating style={{maxWidth:'100px'}} value={rating}></Rating>.{rating}</p>
      <p>521k learners</p>
      <p>{duration.split(' ')[0]} m</p>
      </div>
      <ul className='py-1'>
      <li className='flex gap-1 text-gray-500 mt-2'> <span><BsCheck className='text-green-400 font-bold text-2xl'></BsCheck></span>Completion certificate</li>
      <li className='flex gap-1 text-gray-500 mt-2'> <span><BsCheck className='text-green-400 font-bold text-2xl'></BsCheck></span>Earn up to $230k</li>
      <li className='flex gap-1 text-gray-500 mt-2'> <span><BsCheck className='text-green-400 font-bold text-2xl'></BsCheck></span>Effective Syllabous</li>
      </ul>
      <Link to={`/course/${id}`}>
      <button className='px-8 bg-green-400 rounded bg-primary-clr text-white py-2 mt-4'>View course</button>
      </Link>
    </div>
  );
};



Course.propTypes = {
      course: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        reviews: PropTypes.arrayOf(
          PropTypes.shape({
            rating: PropTypes.number.isRequired,
          })
        ).isRequired,
        duration: PropTypes.string.isRequired,
      }).isRequired,
    };
export default Course;