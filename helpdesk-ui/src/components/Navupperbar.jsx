
import React from "react";
import { Search, Plus, HelpCircle, Trash2 } from "lucide-react";

export default function Navbar({ onLogoClick }) {

 
  const [search, setSearch] = React.useState("");

  const handleCreate = () => {
    alert("Create button clicked");
  };


  console.log("Search:", search);

  return (
    <div className="navbar">
      
      {/* LEFT SECTION */}
      <div className="navLeft">
        <div
          className="navLogo"
          onClick={onLogoClick}
          style={{ cursor: "pointer" }}
        >
          C
        </div>
        <div className="navTitle">Helpdesk</div>
      </div>

      {/* SEARCH SECTION */}
      <div className="navSearch">
        <Search size={18} />
        <input
          placeholder="Search Capacity..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="navRight">

        <button className="createBtn" onClick={handleCreate}>
          <Plus size={16} /> Create
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderTop: "4px solid white",
              marginLeft: "6px"
            }}
          />
        </button>

        <button className="navIcon">
          <HelpCircle size={20} />
        </button>

        <button className="navIcon">
          <Trash2 size={20} />
        </button>

        <button className="userBtn">AH</button>

      </div>
    </div>
  );
}
