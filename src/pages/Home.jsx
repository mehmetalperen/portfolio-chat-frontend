import "./Home.css";
import Chat from "../componenets/Chat";
import Sidebar from "../componenets/Sidebar";
import { UserAuth } from "../contex/AuthContex";
function Home() {
  const { user } = UserAuth();

  return (
    <div className={`home`}>
      <div className="home_body">
        {user?.email === "mhmtalperennadi@gmail.com" && <Sidebar />}
        <Chat messages={[]} />
      </div>
    </div>
  );
}

export default Home;
