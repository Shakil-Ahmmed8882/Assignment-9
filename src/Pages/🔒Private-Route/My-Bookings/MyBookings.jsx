import bookingImg from '../../../../src/assets/img/bookings.png'


const MyBookings = () => {
  // Sample data for user's bookings (you can replace this with your actual data)
  const bookings = [
    {
      id: 1,
      title: 'DevOps Workshop',
      date: '2023-10-20',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
    },
    {
      id: 2,
      title: 'Leadership Development',
      date: '2023-11-05',
      time: '3:30 PM - 5:30 PM',
      location: 'Online',
    },
    {
      id: 2,
      title: 'Leadership Development',
      date: '2023-11-05',
      time: '3:30 PM - 5:30 PM',
      location: 'Online',
    },
    {
      id: 2,
      title: 'Leadership Development',
      date: '2023-11-05',
      time: '3:30 PM - 5:30 PM',
      location: 'Online',
    },
    // Add more booking entries as needed
  ];

  return (
    <div className="my-bookings-container space-y-3 p-3">
      <img className='w-32 -rotate-12' src={bookingImg} alt="" />
      <h2 className="text-5xl font-bold pb-3">My Bookings</h2>
      <div className='md:flex gap-3'>
      {bookings.length > 0 ? (
        <ul className="booking-list flex-1 mb-8 grid-cols-1  grid sm:grid-cols-2">
          {bookings.map((booking) => (
            <li key={booking.id} className={`booking-item m-2 space-y-1 border p-3 border-[#e5e5e5]`} >
              <h3 className='font-bold mt-1 mb-2'>{booking.title}</h3>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Location: {booking.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no bookings at the moment.</p>
      )}
      <div className=' w-[40%] flex-1'>
      <img  src="https://th.bing.com/th/id/R.1760b6babf10b86e7028632893c118f7?rik=%2ffHqFlHT9jZpQA&pid=ImgRaw&r=0" alt="" />
      </div>
      </div>
    </div>
  );
};

export default MyBookings;
