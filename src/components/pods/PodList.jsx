import React, { useState } from "react";
import { Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PodItem from "./PodItem";
import "./PodList.css";

export default function PodList({ onSelectPod }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const communityList = [
    {
      id: 1,
      name: "Pod 1",
      description: "Description of pod 1",
      members: "10",
      profilePhoto: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "Pod 2",
      description: "Description of pod 2",
      members: "20",
      profilePhoto: "https://via.placeholder.com/40",
    },
    // Add more pods as needed
  ];

  const styles = {
    listContainer: {
      padding: "20px",
      background: "#2d3e54",
      textAlign: "left",
      minWidth: "0",
      paddingLeft: "30px",
      display: "flex",
      flexDirection: "column",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      // backdropFilter: "blur(10px)",
    },
    heading: {
      marginBottom: "15px",
      fontSize: "1.4rem",
      fontWeight: "500",
      color: "white",
    },
    inputContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    input: {
      width: "100%",
      padding: "6px 20px 6px 15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: ".75rem",
    },
    list: {
      marginTop: "20px",
      maxHeight: "430px",
      overflowY: "auto",
      flex: "1",
      cursor: "pointer",
    },
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Show the menu icon and drawer only on small screens */}
      {isSmallScreen && (
        <>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                width: "250px",
                padding: "20px",
              },
            }}
          >
            <h4 style={styles.heading}>Pods</h4>
            <div className="input-container" style={styles.inputContainer}>
              <input type="text" placeholder="Search" style={styles.input} />
            </div>
            <div className="community-list" style={styles.list}>
              {communityList.map((community, index) => (
                <PodItem
                  key={index}
                  community={community}
                  onSelect={() => onSelectPod(community)}
                />
              ))}
            </div>
          </Drawer>
        </>
      )}

      {/* Show the list container only on larger screens */}
      {!isSmallScreen && (
        <div className="list-container" style={styles.listContainer}>
          <h4 style={styles.heading}>Pods</h4>
          <div className="input-container" style={styles.inputContainer}>
            <input type="text" placeholder="Search" style={styles.input} />
          </div>
          <div className="community-list" style={styles.list}>
            {communityList.map((community, index) => (
              <PodItem
                key={index}
                community={community}
                onSelect={() => onSelectPod(community)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
