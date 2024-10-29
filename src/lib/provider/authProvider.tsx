"use client";
import { UserSchema } from "../schema";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";

export type UserType = { users: UserSchema[] | [] };

type Action = {
  type: "ADD_USER";
  payload: UserSchema;
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
  }
};

const UserStateContext = createContext<
  | {
      state: UserType;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

type UserStateproviderProps = {
  children: React.ReactNode;
};

const UserStateProvider = ({ children }: UserStateproviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    console.log("App state change");
  }, [state]);

  return (
    <UserStateContext.Provider value={{ state, dispatch }}>
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
