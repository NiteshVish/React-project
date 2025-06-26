import React from "react";

function Contact({ title, details, click }) {
  return (
    <div
      style={{
        width: "600px",
        height:"600px",
        background: "red",
        color: "white",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <h4>{details.names}</h4>
      <button
        onClick={() => {
          click(details.name);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Contact;
