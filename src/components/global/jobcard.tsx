"use client";
import { ArrowDownUp, Bookmark, Timer, X } from "lucide-react";
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

type JobcardProps = {
  price: string;
  title: string;
  applicant: string;
  location: string;
  date: string;
  time: string;
};

const Jobcard = ({
  applicant,
  date,
  location,
  price,
  time,
  title,
}: JobcardProps) => {
  return (
    <section className="scroll-child hover:bg-slate-500 bg-slate-500/50 w-[280px] md:w-[230px] md:h-[240px] flex flex-col gap-1 p-3 rounded-lg">
      <p className="font-bold">
        ${price}
        <span className="text-sm">/month</span>
      </p>
      <p className="font-bold ">
        UI {title} - {applicant} applicant
      </p>
      <p className="flex gap-2 opacity-80">
        <ArrowDownUp /> {location}, NG
      </p>
      <p className="flex gap-2 opacity-80">
        <Timer />
        {date}
      </p>
      <div className="border-solid border-2 border-[#052620] max-w-max px-2 py-[2px] rounded-full">
        {time}{" "}
      </div>
      <div className="flex gap-2 items-center ">
        <AlertDialog>
          <AlertDialogTrigger className="px-8 py-2 rounded-lg bg-[#9A845C]">
            {" "}
            Apply Now
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-[400px] sm:w-[500px]">
            <AlertDialogHeader className=" relative">
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>
                <>
                  <h1 className="font-bold underline text-2xl">
                    Job Description
                  </h1>
                  <p>Location: {location}</p>
                  <p>Date posted: {date}</p>
                  <p>
                    <span className="font-bold underline text-lg">
                      Description:
                    </span>{" "}
                    This job requires a skill UI/UX designer to design the user
                    interface of a website
                  </p>
                </>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="absolute top-0 right-2 sm:top-2 hover:border-red-700 border-solid border-2 px-2">
                <X />
              </AlertDialogCancel>
              <AlertDialogAction>Apply</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Bookmark className="border-solid border-2 border-[#9A845C] h-[37px] w-[37px] p-1 rounded-lg hover:fill-black" />
      </div>
    </section>
  );
};

export default Jobcard;

// bg-[#9A8499] sm:flex-shrink-0 w-[300px] flex flex-col gap-1 p-3 rounded-lg
