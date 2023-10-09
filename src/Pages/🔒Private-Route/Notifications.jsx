import { useEffect, useState } from "react";
import bell from '../../../src/assets/img/bg-color-bell.png'

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications data from your JSON file
    fetch('/Notifications.json') // Make sure the file path is correct
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
      });
  }, []);

  return (
    <div className="md:p-5 space-y-3">
      <img className="-rotate-12 w-32" src={bell} alt="" />
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pl-2">Notifications </h1>
      {notifications.length > 0 ? (
        <ul className="grid lg:grid-cols-2 gap-x-4 gap-y-8 md:gap-y-6">
          {notifications.map((notification) => (
            <li key={notification.id} className="bg-[#9ae34115] p-3 rounded shadow-lg">
              <div className="space-y-1">
                  <p className="font-bold text-[20px] pb-1">Type: {notification.type}</p>
                <p>Content: {notification.content}</p>
                <p>Timestamp: {notification.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications to display.</p>
      )}
    </div>
  );
};

export default Notifications;