import React, { createContext, useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [createAlert, setCreateAlert] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const onNewNotification = useRef(null);

  // Register a callback for new notifications
  const registerNotificationCallback = (callback) => {
    onNewNotification.current = callback; // Store the callback in a ref
  };

  useEffect(() => {
    if (alertData) {
      const alertWithIdAndTimestamp = {
        ...alertData,
        id: uuid(),
        timestamp: new Date().toISOString(),
      };

      const existingAlerts = JSON.parse(
        sessionStorage.getItem("notifications") || "[]"
      );
      const updatedAlerts = [...existingAlerts, alertWithIdAndTimestamp];

      sessionStorage.setItem("notifications", JSON.stringify(updatedAlerts));

      // Call the registered callback function if it exists
      if (onNewNotification.current) {
        onNewNotification.current(); // Notify Navbar of new notification
      }

      // Reset alertData after 3 seconds
      const timer = setTimeout(() => {
        setAlertData(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertData]);

  return (
    <AlertContext.Provider
      value={{
        createAlert,
        setCreateAlert,
        alertData,
        setAlertData,
        registerNotificationCallback,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext };
