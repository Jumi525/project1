"use client";
import { Home, X } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const customerTable = [
  {
    id: "1",
    name: "Ahmed Najmudeen",
    date: "12/07/2024",
    payment: "1200",
    status: "active",
  },
  {
    id: "2",
    name: "Ahmed Najmudeen",
    date: "12/07/2024",
    payment: "1200",
    status: "active",
  },
  {
    id: "3",
    name: "Ahmed Najmudeen",
    date: "12/07/2024",
    payment: "1200",
    status: "active",
  },
  {
    id: "3",
    name: "Ahmed Najmudeen",
    date: "12/07/2024",
    payment: "1200",
    status: "active",
  },
  {
    id: "3",
    name: "Ahmed Najmudeen",
    date: "12/07/2024",
    payment: "1200",
    status: "active",
  },
  {
    id: "3",
    name: "Ahmed Najmudeen",
    date: "12/07/2024",
    payment: "1200",
    status: "active",
  },
  {
    id: "3",
    name: "Ahmed Najmudeen",
    date: "12/07/2024",
    payment: "1200",
    status: "active",
  },
];

const Customer = () => {
  return (
    <section className="">
      <section className="deGrid items-center rounded-lg text-center mb-4 mx-auto grid sm:grid-cols-[70px_1.5fr_1fr_1fr_150px] max-w-[945px] bg-slate-600/80 h-11">
        <p>Id</p>
        <p>Name</p>
        <p className="block desecondG">Date</p>
        <p className="font-bold hidden sm:block">Payment</p>
        <p className="hidden sm:block">Status</p>
      </section>

      <section className="scrollparent">
        <AlertDialog>
          <AlertDialogTrigger className=" w-full">
            {customerTable.map((val, index) => (
              <section
                key={index}
                className="deGrid scrollchild  items-center text-center mx-auto grid sm:grid-cols-[70px_1.5fr_1fr_1fr_150px] max-w-[945px] sm:bg-slate-600/50 md:bg-yellow-600/50 h-11 hover:bg-green-700/80"
              >
                <p>{val.id}</p>
                <div className="flex items-center justify-center gap-2">
                  <Home />
                  <p>{val.name}</p>
                </div>
                <p className="block desecondG">{val.date}</p>
                <p className="font-bold hidden sm:block">${val.payment}</p>
                <span className="hidden sm:grid sm:place-content-center">
                  <p className="bg-red-500 hidden sm:block px-2 py-[2px] rounded-full">
                    {val.status}
                  </p>
                </span>
              </section>
            ))}
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-[400px] sm:w-[500px]">
            <AlertDialogHeader className=" relative">
              <AlertDialogTitle>Check</AlertDialogTitle>
              <AlertDialogDescription>ok, it is working</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="absolute top-0 right-2 sm:top-2 hover:border-red-700 border-solid border-2 px-2">
                <X />
              </AlertDialogCancel>
              <AlertDialogAction>Apply</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </section>
  );
};

export default Customer;

{
  /* <section className="scrollparent">
        {customerTable.map((val, index) => (
          <section
            key={index}
            className="deGrid scrollchild  items-center text-center mx-auto grid sm:grid-cols-[70px_1.5fr_1fr_1fr_150px] max-w-[945px] sm:bg-slate-600 md:bg-yellow-600 h-11"
          >
            <p>{val.id}</p>
            <div className="flex items-center justify-center gap-2">
              <Home />
              <p>{val.name}</p>
            </div>
            <p className="block desecondG">{val.date}</p>
            <p className="font-bold hidden sm:block">${val.payment}</p>
            <span className="hidden sm:grid sm:place-content-center">
              <p className="bg-red-500 hidden sm:block px-2 py-[2px] rounded-full">
                {val.status}
              </p>
            </span>
          </section>
        ))}
      </section> */
}
