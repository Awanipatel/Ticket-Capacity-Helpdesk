import React from "react";
import { Zap, Ticket, MessageSquare, Users, BarChart, Settings, Grid3x3, Home } from "lucide-react";

export default function IconSidebar({ onToggleNavMenu }) {

 
  const handleClick = (name) => {
    console.log("Clicked:", name);
  };

  return (
    <div className="sidebar">
      
      <nav className="icons">

        <button
          className="icon-btn"
          title="Home"
          onClick={() => {
            onToggleNavMenu?.();
            handleClick("Home");
          }}
        >
          <Home size={20} />
        </button>

        <button className="icon-btn" title="Dashboard" onClick={() => handleClick("Dashboard")}>
          <Zap size={20} />
        </button>

        <button className="icon-btn" title="Tickets" onClick={() => handleClick("Tickets")}>
          <Ticket size={20} />
        </button>

        <button className="icon-btn" title="Live Chat" onClick={() => handleClick("Live Chat")}>
          <MessageSquare size={20} />
        </button>

        <button className="icon-btn" title="Board" onClick={() => handleClick("Board")}>
          <Grid3x3 size={20} />
        </button>

        <button className="icon-btn" title="Users" onClick={() => handleClick("Users")}>
          <Users size={20} />
        </button>

        <button className="icon-btn" title="Reports" onClick={() => handleClick("Reports")}>
          <BarChart size={20} />
        </button>

        <button className="icon-btn" title="Settings" onClick={() => handleClick("Settings")}>
          <Settings size={20} />
        </button>

      </nav>

    </div>
  );
}
