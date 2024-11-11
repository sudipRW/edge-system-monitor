import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ClearAll, NotificationsNoneOutlined } from "../assets/icons";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Load notifications from sessionStorage when the component mounts
  useEffect(() => {
    const storedNotifications = JSON.parse(sessionStorage.getItem("notifications") || "[]");

    // Sort notifications by timestamp in descending order
    const sortedNotifications = storedNotifications.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    setNotifications(sortedNotifications);
  }, []);

  // Function to clear all notifications
  const clearNotifications = () => {
    sessionStorage.removeItem("notifications");
    setNotifications([]);
  };

  return (
    <div className="w-[40%] absolute left-[50%]">
      <Card elevation={2} className="p-2">
        <CardHeader
          className="border-b-2"
          subheader="Notifications"
          action={
            <Tooltip title="Clear all">
              <IconButton aria-label="clear all" onClick={clearNotifications}>
                <ClearAll />
              </IconButton>
            </Tooltip>
          }
        />
        <CardContent>
          {notifications.length === 0 ? (
            <div className="flex flex-col gap-2 justify-center items-center">
              <NotificationsNoneOutlined sx={{ scale: 1.2 }} />
              <p>You have no notifications yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {notifications.reverse().map((notification) => (
                <div key={notification.id} className="p-2 border-b">
                  <p>{notification.message}</p>
                  <small>
                    {new Date(notification.timestamp).toLocaleString()}
                  </small>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;
