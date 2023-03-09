import React from "react";
import "./Sidebarchat.css";

// key={user.id} id={user.id} name={user.displayName}
function Sidebarchat({ id, name }) {
  return (
    <div className="sidebarChat">
      <div className="sidebarChat_info">
        <h2>{name} </h2>
      </div>
    </div>
  );
}

export default Sidebarchat;
