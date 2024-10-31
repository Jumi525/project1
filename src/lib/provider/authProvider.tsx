"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Prof } from "../types";

export type UserType = { users: Prof[] | [] };

type Action = {
  type: "ADD_USER";
  payload: Prof;
};

const initialState: UserType = { users: [] };

const userReducer = (
  state: UserType = initialState,
  action: Action
): UserType => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return initialState;
  }
};

const UserStateContext = createContext<
  | {
      state: UserType;
      dispatch: Dispatch<Action>;
      setEmail: Dispatch<SetStateAction<string>>;
      email: string;
    }
  | undefined
>(undefined);

type UserStateproviderProps = {
  children: React.ReactNode;
};

const UserStateProvider = ({ children }: UserStateproviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [email, setEmail] = useState("");
  useEffect(() => {
    console.log("App state change");
  }, [state]);

  return (
    <UserStateContext.Provider value={{ state, dispatch, setEmail, email }}>
      {children}
    </UserStateContext.Provider>
  );
};

export default UserStateProvider;

export const useAppState = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
