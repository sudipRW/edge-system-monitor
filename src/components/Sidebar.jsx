import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  ComputerOutlined,
  SpaceDashboardOutlined,
  LayersOutlined,
  ViewInArOutlined,
  LanOutlined,
  TextSnippetOutlined,
  ImageOutlined,
  HomeOutlined,
  Close,
  Diversity2Outlined,
  LocalOfferOutlined
} from "../assets/icons";

const Sidebar = ({ drawerWidth, menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const edgeSystemState = JSON.parse(sessionStorage.getItem("edgeSystemState"));
  const theme = useTheme();

  const homeMenu = [
    {
      text: "Home",
      icon: <HomeOutlined />,
      path: "/home",
    },
    {
      text: "Edge Systems",
      icon: <ComputerOutlined />,
      path: "/edge-systems",
    },
    {
      text: "Groups",
      icon: <Diversity2Outlined />,
      path: "/groups",
    },
    {
      text: "Tags",
      icon: <LocalOfferOutlined />,
      path: "/tags",
    },
  ];

  const environmentMenuItems = [
    {
      text: "Dashboard",
      icon: <SpaceDashboardOutlined />,
      path: `dashboard`,
    },
    {
      text: "Stacks",
      icon: <LayersOutlined />,
      path: `stacks`,
    },
    {
      text: "Containers",
      icon: <ViewInArOutlined />,
      path: `containers`,
    },
    {
      text: "Networks",
      icon: <LanOutlined />,
      path: `networks`,
    },
    {
      text: "Volumes",
      icon: <TextSnippetOutlined />,
      path: `volumes`,
    },
    {
      text: "Images",
      icon: <ImageOutlined />,
      path: `images`,
    },
  ];

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: menuOpen ? `${drawerWidth}px` : "80px",
          transition: "width 0.3s",
          overflowX: "hidden",
          backgroundColor: theme.palette.secondary.main,
          "& .MuiDrawer-paper": {
            width: menuOpen ? `${drawerWidth}px` : "80px",
            transition: "width 0.3s",
            overflowX: "hidden",
            backgroundColor: theme.palette.secondary.main,
            // color: theme.palette.secondary.contrastText,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ width: "100%" }}>
          <IconButton
            color="secondary"
            onClick={handleMenuOpen}
            sx={{
              display: "flex",
              justifyContent: menuOpen ? "flex-end" : "",
              alignItems: "center",
              height: "100%",
              width: "100%",
              transition: "all 0.3s",
              color: theme.palette.secondary.contrastText,
            }}
            disableRipple
          >
            {menuOpen ? (
              <KeyboardArrowLeft fontSize="large" />
            ) : (
              <KeyboardArrowRight fontSize="large" />
            )}
          </IconButton>
        </Toolbar>

        <List sx={{ padding: 0 }}>
          {homeMenu.map((item, i) => (
            <ListItem
              buttons
              key={i}
              onClick={() => navigate(item.path)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60px",
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.secondary.light
                    : "",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path
                      ? theme.palette.secondary.contrastText
                      : "black",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: theme.palette.secondary.contrastText,
                  },
                  cursor: "pointer",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  transition: "opacity 0.3s",
                  opacity: menuOpen ? 1 : 0,
                  color:
                    location.pathname === item.path
                      ? theme.palette.secondary.contrastText
                      : "black",
                  cursor: "pointer",
                }}
              />
            </ListItem>
          ))}
          {menuOpen && (
            <div
              className="flex justify-between p-4"
              style={{ backgroundColor: theme.palette.secondary.dark }}
            >
              <div className="flex gap-1">
                <Typography sx={{ color: "white" }}> Edge System: </Typography>
                <Typography sx={{ color: edgeSystemState ? "white" : "" }}>
                  {edgeSystemState
                    ? edgeSystemState?.edgeSystemName
                    : "None Selected"}
                </Typography>{" "}
              </div>
              {edgeSystemState && (
                <Close
                  sx={{
                    color: theme.palette.secondary.contrastText,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/home");
                    sessionStorage.removeItem("edgeSystemState");
                  }}
                />
              )}
            </div>
          )}
          {edgeSystemState &&
            environmentMenuItems.map((item, i) => (
              <ListItem
                buttons
                key={i}
                onClick={() =>
                  item.path != 'dashboard'?
                  navigate(
                    `/dashboard/${edgeSystemState?.edgeSystemId}/${item.path}`
                  ):navigate(`/dashboard/${edgeSystemState?.edgeSystemId}`)
                }
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60px",
                  backgroundColor: location.pathname.includes(item.path)
                    ? theme.palette.secondary.light
                    : "",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname.includes(item.path)
                      ? theme.palette.secondary.contrastText
                      : "black",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: theme.palette.secondary.contrastText,
                    },
                    cursor: "pointer",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    transition: "opacity 0.3s",
                    opacity: menuOpen ? 1 : 0,
                    color: location.pathname.includes(item.path)
                      ? theme.palette.secondary.contrastText
                      : "black",
                    cursor: "pointer",
                  }}
                />
              </ListItem>
            ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
