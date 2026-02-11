
import React from "react";
import { Menu, Filter } from "lucide-react";

export default function TicketList({ selectedTicket, onSelectTicket, navMenuVisible, onHamburgerClick }){


  const tickets=[
    {id:"APPS-216", title:"Soluta quam velit", date:"Jun 2", status:"To Do", avatar:"AH", color:"#ff9d5c"},
    {id:"OPS-102", title:"Laudantium neque veritatis", date:"Jun 2", status:"To Do", avatar:"AH", color:"#6366f1"},
    {id:"APPS-216", title:"Molestiae saepe illum", date:"Jun 1", status:"To Do", avatar:"AH", color:"#10b981"},
    {id:"APPS-216", title:"Dignissimos maiores porro", date:"May 31", status:"To Do", avatar:"AH", color:"#ef4444"},
    {id:"APPS-216", title:"Nihil porro repudiandae", date:"May 31", status:"To Do", avatar:"AH", color:"#a855f7"},
    {id:"APPS-216", title:"Aspernatur cumque ipsum", date:"May 30", status:"To Do", avatar:"AH", color:"#f59e0b"},
    {id:"APPS-216", title:"Culpa quos aliquam", date:"May 30", status:"To Do", avatar:"AH", color:"#ec4899"},
    {id:"APPS-216", title:"Atque incidunt autem", date:"May 30", status:"To Do", avatar:"AH", color:"#06b6d4"},
    {id:"APPS-216", title:"Ut sapiente sunt", date:"May 29", status:"Done", avatar:"AH", color:"#10b981"}
  ];

  // search state
  const [search, setSearch] = React.useState("");

  
  const filteredTickets = tickets.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.id.toLowerCase().includes(search.toLowerCase())
  );

 
  console.log("Filtered tickets:", filteredTickets.length);

  return(
    <div className="list">

      {/* HEADER */}
      <div className="listHeader">
        <div className="listHeaderTop" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          <button
            className="hamburgerBtn"
            onClick={onHamburgerClick}
            title="Toggle NavMenu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Menu size={20} />
          </button>

          <h3 style={{ flex: 1, textAlign: "center", margin: 0 }}>
            My Tickets ({filteredTickets.length})
          </h3>

          <button
            className="hamburgerBtn"
            title="Filter tickets"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={()=>console.log("Filter clicked")}
          >
            <Filter size={20} />
          </button>

        </div>

        {/* SEARCH */}
        <input
          placeholder="Search tickets"
          className="searchInput"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>

    
      {filteredTickets.map((t,i)=>(
        <div 
          className={`ticketCard ${selectedTicket === t.id ? 'selected' : ''}`} 
          key={i}
          onClick={() => onSelectTicket(t.id)}
          style={{cursor: "pointer"}}
        >
          <div className="ticketLeft">
            <input
              type="checkbox"
              className="ticketCheckbox"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="ticketText">
              <p className="title">{t.title}</p>

              <div className="ticketBadges">
                <span className="badgeId">{t.id}</span>
                <span className="badgeStatus">{t.status}</span>
              </div>
            </div>
          </div>

          <div className="ticketRight">
            <div className="avatar" style={{background:t.color}}>
              {t.avatar}
            </div>
            <span className="date">{t.date}</span>
          </div>
        </div>
      ))}

     

      {filteredTickets.length === 0 && (
        <p style={{textAlign:"center", marginTop:"20px"}}>
          No tickets found
        </p>
      )}

    </div>
  )
}
