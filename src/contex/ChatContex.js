import { createContext, useReducer, useContext } from "react";
import { UserAuth } from "./AuthContex";

const ChatContex = createContext();

export const ChatContextProvider = ({ children }) => {
  const { user, isAdmin } = UserAuth();
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    if (isAdmin) {
      console.log("ADMIN");
    } else {
      console.log("YOU ARE NOT ADMIN!");
    }
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: `${action.payload.uid}KAFJPfX9eqegj1BfHyEnmINMJ222`,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  return (
    <ChatContex.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContex.Provider>
  );
};
export const UserChatContex = () => {
  return useContext(ChatContex);
};
