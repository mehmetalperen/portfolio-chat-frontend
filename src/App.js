import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContextProvider } from "./contex/AuthContex";
import Protected from "./protected/Protected";
import { ChatContextProvider } from "./contex/ChatContex";
function App() {
  return (
    <div className={`app`}>
      <AuthContextProvider>
        <ChatContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/chat"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
          </Routes>
        </ChatContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
