import React, { useState, useRef } from "react";

export default function PanelDivider({ onResize, navMenuVisible = true }) {
  const [isDragging, setIsDragging] = useState(false);
  const dividerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  React.useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      if (!dividerRef.current) return;
      
      
      const mainLayout = dividerRef.current.closest(".mainLayout");
      if (!mainLayout) return;

     
      const rect = mainLayout.getBoundingClientRect();
      const sidebarWidth = 60; 
      
      const navMenuWidth = navMenuVisible ? 200 : 0;
      const rPanelWidth = 180;
      const minListWidth = 150;
      
      const maxListWidth = 500;

      const newListWidth = Math.max(
        minListWidth,
        Math.min(
          maxListWidth,
          e.clientX - rect.left - sidebarWidth - navMenuWidth
        )
      );

      onResize(newListWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "auto";
      document.body.style.userSelect = "auto";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onResize]);

  return (
    <div
      ref={dividerRef}
      onMouseDown={handleMouseDown}
      style={{
        width: "6px",
        background: isDragging ? "#2d6cdf" : "transparent",
        cursor: "col-resize",
        transition: isDragging ? "none" : "background 0.2s",
        userSelect: "none",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        if (!isDragging) {
          e.target.style.background = "#d1d5db";
        }
      }}
      onMouseLeave={(e) => {
        if (!isDragging) {
          e.target.style.background = "transparent";
        }
      }}
    />
  );
}
