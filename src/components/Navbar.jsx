import React, { useState, useContext,useEffect } from "react";
import { Box, AppBar, Toolbar, Typography, Avatar,IconButton } from "@mui/material";
import { ThemeContext } from "../context-api/ThemeContext";
import { AuthContext } from "../context-api/AuthContext";
import { useNavigate } from "react-router-dom";
import { NotificationsNoneOutlined } from "../assets/icons";
import Notifications from "./Notifications";
import { useTheme } from "@emotion/react";
import { AlertContext } from "../context-api/AlertContext";
import AlertBox from "./AlertBox";

const Navbar = ({ drawerWidth }) => {
  const [userPhoto, setUserPhoto] = useState();
  const { logo } = useContext(ThemeContext);
  const { username } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const { alertData, registerNotificationCallback } = useContext(AlertContext);
  const [notificationPopup, setNotificationPopup] = useState(false);
  const [hasUnseenNotifications, setHasUnseenNotifications] = useState(false); // New state

  // Register callback for new notifications
  useEffect(() => {
    registerNotificationCallback(() => setHasUnseenNotifications(true));
  }, [registerNotificationCallback]);

  const getImageTypePrefix = (base64String) => {
    if (base64String.startsWith("/9j/")) {
      // JPEG
      return "data:image/jpeg;base64,";
    } else if (base64String.startsWith("iVBORw0KGgo")) {
      // PNG
      return "data:image/png;base64,";
    } else if (base64String.startsWith("PHN2ZyB3aWR0")) {
      // SVG
      return "data:image/svg+xml;base64,";
    } else if (base64String.startsWith("data:image/jpg;base64,")) {
      // JPG
      return "data:image/jpg;base64,";
    }
    return ""; // Fallback in case of unknown format
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  };

  const toggleNotification = () => {
    setNotificationPopup(!notificationPopup);
    setHasUnseenNotifications(false);
  };

  console.log(alertData);
  return (
    <AppBar
      sx={{ width: `calc(100% - ${drawerWidth})`, backgroundColor: "#f9f9f9" }}
      elevation={0}
    >
      <Toolbar className="flex justify-between">
        <Typography>
          {logo ? (
            <img
              src={`${getImageTypePrefix(logo)}${logo}`}
              alt="Logo"
              className="w-[200px] h-[40px]"
            />
          ) : (
            "Logo"
          )}
        </Typography>
        <div className="flex justify-center items-center gap-6">
          <IconButton
            className="p-2 rounded-full"
            style={{
              backgroundColor: theme?.palette?.secondary?.["50"],
              color: hasUnseenNotifications ? "red" : "inherit", // Change color if unseen
            }}
            onClick={toggleNotification}
          >
            <NotificationsNoneOutlined className="cursor-pointer" />
          </IconButton>
          <Typography>{username}</Typography>
          <Avatar />
          <Typography className="cursor-pointer" onClick={handleLogout}>
            Logout
          </Typography>
        </div>
      </Toolbar>
      {notificationPopup && (
        <div className="">
          <Notifications />
        </div>
      )}

      {alertData && (
        <div className="">
          <AlertBox alertData={alertData} />
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
