// "use client";
// import { Profile } from "@/lib/types";

// import { useState, useEffect } from "react";

// export default function useLocalstorage(key: string) {
//   const [value, setValue] = useState<Profile | null>(null);
//   useEffect(() => {
//     const [value, setValue] = useState<Profile>(() =>
//       JSON.parse(window.localStorage.getItem(key) || "")
//     );
//   }, []);
//   useEffect(() => {
//     setValue(window.localStorage.setItem(key, JSON.stringify(value)) | null)
//   }, [value, key]);
//   return [value, setValue];
// }

// import { useEffect, useState } from "react";

// export const useLocalStorage = (key: string) => {
//   const [value, setValue] = useState<Profile>(() =>
//     JSON.parse(window.localStorage.getItem(key) || "")
//   );

// useEffect(() => {
//   window.localStorage.setItem(key, JSON.stringify(value));
// }, [value, key]);
//   return [value, setValue] as const;
// };
// export default useLocalStorage;

// const updatedData = { ...user, ...userProfile };
// useEffect(() => {
//   window.localStorage.setItem(key, JSON.stringify(value));
// }, [key]);
