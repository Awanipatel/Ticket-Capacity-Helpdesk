import React from "react";
import { X } from "lucide-react";

export default function SizeDrawer({ isOpen, onClose, onSizeChange, currentSize }) {
  const sizes = [
    { name: "Small", value: "small", description: "Compact view" },
    { name: "Medium", value: "medium", description: "Balanced view" },
    { name: "Large", value: "large", description: "Expanded view" }
  ];

  return (
    <>
     
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 99,
            pointerEvents: "auto"
          }}
        />
      )}

      
      <div
        style={{
          position: "fixed",
          right: isOpen ? "0" : "-320px",
          top: "60px",
          bottom: 0,
          width: "320px",
          background: "white",
          borderLeft: "1px solid #e5e7eb",
          boxShadow: isOpen ? "-2px 0 8px rgba(0, 0, 0, 0.1)" : "none",
          transition: "right 0.3s ease",
          zIndex: 100,
          overflow: "auto",
          padding: "20px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Panel Size</h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <X size={20} color="#6b7280" />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => {
                onSizeChange(size.value);
              }}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: currentSize === size.value ? "2px solid #2d6cdf" : "1px solid #e5e7eb",
                background: currentSize === size.value ? "#f0f4f8" : "#fff",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                boxShadow: currentSize === size.value ? "0 0 0 3px rgba(45, 108, 223, 0.1)" : "none"
              }}
            >
              <div style={{
                fontWeight: currentSize === size.value ? "600" : "500",
                color: currentSize === size.value ? "#2d6cdf" : "#1f2937",
                fontSize: "14px",
                marginBottom: "4px"
              }}>
                {size.name}
              </div>
              <div style={{
                fontSize: "12px",
                color: "#9ca3af"
              }}>
                {size.description}
              </div>
            </button>
          ))}
        </div>

        <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid #e5e7eb" }} />

        <div style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.6" }}>
          <strong style={{ color: "#1f2937" }}>Tip:</strong> Adjust the panel size to optimize your workflow.
        </div>
      </div>
    </>
  );
}
