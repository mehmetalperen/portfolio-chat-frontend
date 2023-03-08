import { useEffect, useState } from "react";
import "./Home.css";
import Chat from "../componenets/Chat";
import Sidebar from "../componenets/Sidebar";
import Pusher from "pusher-js";

function Home() {
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    //listener for the pusher
    const pusher = new Pusher("b23f5e99ce5b8bebe530", {
      cluster: "us3",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMsg) => {
      setMessages([...messages, newMsg]);
    });
    return () => {
      //this way we wont get infinite useeffect, since we are listenig mesagges, and chaning messages here. once we change it, we dont want a chain reaction of calling useeffect
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className={`home`}>
      <div className="home_body">
        {isAdmin && <Sidebar />}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default Home;
