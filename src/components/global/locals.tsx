"use client";
import { Profile } from "@/lib/types";
import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<Profile>(() =>
    JSON.parse(window.localStorage.getItem(key) || "")
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue] as const;
};
export default useLocalStorage;

// const updatedData = { ...user, ...userProfile };
// useEffect(() => {
//   window.localStorage.setItem(key, JSON.stringify(value));
// }, [key]);
