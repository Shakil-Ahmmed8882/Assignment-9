

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
    // Add more booking entries as needed
  ];

  return (
    <div className="my-bookings-container space-y-3">
      <h2 className="text-5xl font-bold">My Bookings</h2>
      {bookings.length > 0 ? (
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking.id} className="booking-item">
              <h3>{booking.title}</h3>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Location: {booking.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no bookings at the moment.</p>
      )}
    </div>
  );
};

export default MyBookings;
