import { useState } from "react";
import IconSidebar from "./components/Iconleftbar";
import Navbar from "./components/Navupperbar";

import TicketList from "./components/TicketList";
import TicketDetails from "./components/TicketDetails";
import RightPanel from "./components/Rightpanel";
import TodoPanel from "./components/TodoPanel";
import NavMenu from "./components/NavMenu";
import PanelDivider from "./components/Paneldivider";
import "./styles.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState("OPS-102");
  const [showTodo, setShowTodo] = useState(false);
  const [navMenuVisible, setNavMenuVisible] = useState(true);
  const [ticketListWidth, setTicketListWidth] = useState(300);

  return (
    <div className="app">
      <Navbar />
      <div
        className="mainLayout"
        style={{
          gridTemplateColumns: navMenuVisible
            ? `60px 200px ${ticketListWidth}px auto 1fr 180px`
            : `60px ${ticketListWidth}px auto 1fr 180px`,
          position: "relative",
        }}
      >
        <IconSidebar onToggleNavMenu={() => setNavMenuVisible(v => !v)} />
        {/* <LeftMenu /> */}
        {navMenuVisible && <NavMenu />}
        <TicketList
          selectedTicket={selectedTicket}
          onSelectTicket={setSelectedTicket}
          navMenuVisible={navMenuVisible}
          onHamburgerClick={() => setNavMenuVisible(v => !v)}
        />
        <PanelDivider onResize={setTicketListWidth} navMenuVisible={navMenuVisible} />
        <TicketDetails ticketId={selectedTicket} />
        {!showTodo && <RightPanel onOpenTodo={() => setShowTodo(true)} />}
        {showTodo && <TodoPanel onCloseTodo={() => setShowTodo(false)} />}
      </div>
    </div>
  );
}
