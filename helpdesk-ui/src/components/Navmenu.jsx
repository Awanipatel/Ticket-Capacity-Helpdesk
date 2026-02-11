import { ChevronDown } from "lucide-react";

export default function NavMenu(){
  return(
    <div className="navMenu">
      <div className="menuSection">
        <div className="menuTitle" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
          <ChevronDown size={16}/>
          TICKET VIEWS
        </div>
        <div className="menuItems">
          <div className="menuItem active">
            <span>My Tickets</span>
            <span className="badge">9</span>
          </div>
          <div className="menuItem">
            <span>Past Due</span>
            <span className="badge">4</span>
          </div>
          <div className="menuItem">
            <span>High Priority</span>
            <span className="badge">11</span>
          </div>
          <div className="menuItem">
            <span>Unassigned</span>
            <span className="badge">98</span>
          </div>
          <div className="menuItem">
            <span>All Tickets</span>
            <span className="badge">2,192</span>
          </div>
          <div className="menuItem">
            <span>Design Only</span>
          </div>
          <div className="menuItem">
            <span>Needs Review</span>
          </div>
          <div className="menuItem">
            <span>FE Tix</span>
          </div>
        </div>
      </div>

      <div className="menuSection">
        <div className="menuTitle">LIVE CHATS</div>
      </div>

      <div className="menuSection">
        <div className="menuTitle">BOARDS</div>
      </div>
    </div>
  )
}
