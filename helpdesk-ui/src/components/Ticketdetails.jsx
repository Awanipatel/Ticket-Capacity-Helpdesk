import React, { useState } from "react";

export default function TicketDetails({ ticketId }){
  const [expandedMessage, setExpandedMessage] = useState(0);

  const messages = [
    {
      id: 0,
      name: "Allie Harmon",
      email: "allie@capacity.com",
      time: "Feb 9, 2022 10:31 AM",
      text: "Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem recusandae. Maxime beatae nostrum ut. Deleniti totam sit nihil quo beatae. Quas non detectus praesentium est illum vitae nemo ure.",
      files: ["Screen_shot.png", "Screen_shot.png"]
    },
    {
      id: 1,
      name: "Allie Harmon",
      email: "allie@capacity.com",
      time: "Feb 9, 2022 10:31 AM",
      text: "Dolorem similique et aliquid illum dolor. Vel quo magnam.",
      files: []
    }
  ];

  return(
    <div className="details">
      <div className="header">
        <h2>Laudantium neque veritatis</h2>
        <div className="headerInfo">OPS-102 · Created 11/14/22 12:32 PST</div>
      </div>

      <div className="tabs">
        <button className="tab active">Public Reply</button>
        <button className="tab">Private Comment</button>
      </div>

      <div className="replySection">
        <div className="replyTo">To <strong>Allison Westvelt</strong></div>
        <textarea placeholder="Add a reply..."></textarea>
        <div className="replyTools">
          <div className="formatting">B I U — | • ≈ ≡ + ∞</div>
          <button className="addKB">📎 Add to KB</button>
        </div>
      </div>

      <div className="messagesArea">
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`message ${expandedMessage === msg.id ? 'expanded' : ''}`}
            onClick={() => setExpandedMessage(expandedMessage === msg.id ? -1 : msg.id)}
            style={{cursor: "pointer"}}
          >
            <div className="msgHeader">
              <strong>{msg.name}</strong>
              <span className="email">{msg.email}</span>
              <span className="time">{msg.time}</span>
            </div>
            <p>{msg.text}</p>
            {msg.files.length > 0 && (
              <div className="fileAttachments">
                {msg.files.map((file, i) => (
                  <div key={i} className="fileItem">
                    {file}<br/><small>18 Jun 2022, 1:20 PM</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
