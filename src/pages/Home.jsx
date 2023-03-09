import { useEffect, useState } from "react";
import "./Home.css";
import Chat from "../componenets/Chat";
import Sidebar from "../componenets/Sidebar";
import { UserAuth } from "../contex/AuthContex";
function Home() {
  const { user, isAdmin } = UserAuth();

  return (
    <div className={`home`}>
      <div className="home_body">
        {isAdmin && <Sidebar />}
        <Chat messages={[]} />
      </div>
    </div>
  );
}

export default Home;
