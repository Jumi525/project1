// "use client";
// import { Profile } from "@/lib/types";
// import { useEffect, useState } from "react";

// export function useLocalStorage(key: string) {
//   const [value, setValue] = useState<Profile>(() =>
//     JSON.parse(window.localStorage.getItem(key) || " ")
//   );
//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   return { value, setValue } as const;
// }

// export function useLocalStorage(key: string, initialValue: any) {
//   const [storedValue, setStoredValue] = useState<Profile>(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });

//   const setValue = (value: any) => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       setStoredValue(valueToStore);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       if (item) {
//         setStoredValue(JSON.parse(item));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, [key]);
//   return [storedValue, setValue];
// }

// export default useLocalStorage;
