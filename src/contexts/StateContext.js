import { useEffect, useContext, useReducer, createContext } from "react";
import UserReducer from "../reducers/UserReducer";

const initialState = {
  user: UserReducer(),
};

function mainReducer(state, action) {
  return {
    user: UserReducer(state.user, action),
  };
}

export const StateContext = createContext();

const localState = JSON.parse(localStorage.getItem("userInfo"));

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(state));
  }, [state]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
