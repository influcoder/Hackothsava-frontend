import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Card from "./Card";
import PodConfirm from "../pods/PodConfirm";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    console.log("Confirmed!");
    // Add your confirmation logic here
  };

  return (
    <div>
      <div className="dashboard">
        <div className="menu-bar">
          <div></div>
          <div className="menu-right">
            <AddIcon className="menu-item" onClick={handleOpen} />
            {/* <NotificationsIcon className="menu-item" /> */}
            <PersonIcon className="menu-item " />
          </div>
        </div>
        <PodConfirm
          open={open}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
        <div className="dashboard-content">
          <div className="greetings">
            <h1>Hello User!</h1>
            <p>Welcome to your learning Pod...keep learning!</p>
          </div>
          <div className="my-pods">
            <h2>My Pods</h2>
            <Link to="/pods" className="view-more">
              View All &gt;
            </Link>
            <div className="pods">
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <div className="explore-pods">
            <h2>Explore Pods</h2>
            <Link to="/explore" className="view-more">
              Explore All &gt;
            </Link>
            <div className="pods">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
