import { Search, Settings, Trash2, HelpCircle, User } from "lucide-react";

export default function TopNavbar(){
  return(
    <div className="topNavbar">
      <div className="navLeft">
        <div className="navLogo">C</div>
        <span className="navTitle">Helpdesk</span>
      </div>

      <div className="navCenter">
        <div className="searchBox">
          <Search size={18} className="searchIcon"/>
          <input type="text" placeholder="Search Capacity..."/>
        </div>
      </div>

      <div className="navRight">
        <button className="createBtn">
          <span>Create</span>
          <span className="dropdown">▼</span>
        </button>
        <button className="navIcon"><HelpCircle size={20}/></button>
        <button className="navIcon"><Trash2 size={20}/></button>
        <button className="navIcon"><User size={20}/></button>
      </div>
    </div>
  )
}
