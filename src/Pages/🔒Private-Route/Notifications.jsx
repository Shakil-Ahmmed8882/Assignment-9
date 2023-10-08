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
    <div className="p-5 space-y-3">
      <img className="-rotate-12 w-32" src={bell} alt="" />
      <h1 className="text-6xl font-bold">Notifications Page</h1>
      {notifications.length > 0 ? (
        <ul className="grid grid-cols-2">
          {notifications.map((notification) => (
            <li key={notification.id}>
              <div className="space-y-1">
                <p>Type: {notification.type}</p>
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