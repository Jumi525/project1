"use client";
import { ArrowDownUp, Bookmark, Timer, X } from "lucide-react";
import React, { useRef, useState } from "react";
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
import { addProfile } from "@/lib/queries";
import { Prof } from "@/lib/types";

type JobcardProps = {
  price: string;
  title: string;
  applicant: string;
  location: string;
  date: string;
  time: string;
  callform: boolean;
  email: string;
};

const Jobcard = ({
  callform,
  applicant,
  date,
  location,
  price,
  time,
  title,
  email,
}: JobcardProps) => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const titles = useRef<HTMLSelectElement>(null);
  const locations = useRef<HTMLInputElement>(null);
  const verified = "true";
  const [setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userProfile = {
      fullName: `${firstName.current?.value} ${lastName.current?.value}`,
      title: titles.current?.value,
      location: locations.current?.value,
      verified: verified,
    } as Partial<Prof>;
    const response = await addProfile(email, userProfile);
    if (response?.error) return;
    setSuccess(true);
  };
  return (
    <section className="scroll-child hover:bg-slate-500 bg-slate-500/50 w-[280px] md:w-[230px] md:h-[210px] flex flex-col gap-1 p-3 rounded-lg">
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
                {!callform ? (
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
                      This job requires a skill UI/UX designer to design the
                      user interface of a website
                    </p>
                  </>
                ) : (
                  <form
                    className="flex flex-col w-full gap-2 "
                    onSubmit={handleSubmit}
                  >
                    <input
                      placeholder="First Name"
                      ref={firstName}
                      className="pl-2 py-2 rounded-md"
                    />
                    <input
                      ref={lastName}
                      placeholder="last Name"
                      className="pl-2 py-2 rounded-md"
                    />
                    <input
                      ref={locations}
                      placeholder="location"
                      className="pl-2 py-2 rounded-md"
                    />
                    <select ref={titles} className="pl-2 py-2 rounded-md">
                      <option>Electrican</option>
                      <option>Plumber</option>
                      <option>Cleaner</option>
                      <option>dry cleaner</option>
                      <option>House Help</option>
                    </select>
                    <button
                      type="submit"
                      className="bg-black pl-2 py-2 rounded-md"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="absolute top-0 right-2 sm:top-2 hover:border-red-700 border-solid border-2 px-2">
                <X />
              </AlertDialogCancel>
              {!callform && <AlertDialogAction>Apply</AlertDialogAction>}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Bookmark className="border-solid border-2 border-[#9A845C] h-[37px] w-[37px] p-1 rounded-lg hover:fill-black" />
      </div>
    </section>
  );
};

export default Jobcard;
