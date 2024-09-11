import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Card from "./Card";
import Menu from "./Menu";
function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <Menu />
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
