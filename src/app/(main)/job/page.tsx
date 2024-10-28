import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/logo/logo.webp";
import { AlignCenter, ArrowBigLeft, HomeIcon } from "lucide-react";
import Jobcard from "@/components/global/jobcard";
import Panel from "@/components/global/panel";

const jobCards = [
  {
    applicant: "58",
    date: "5, september",
    location: "Abuja",
    price: "78000",
    time: "fulltime",
    title: "UX designer",
  },
  {
    applicant: "58",
    date: "5, september",
    location: "Abuja",
    price: "78000",
    time: "fulltime",
    title: "UX designer",
  },
  {
    applicant: "58",
    date: "5, september",
    location: "Abuja",
    price: "78000",
    time: "fulltime",
    title: "UX designer",
  },
  {
    applicant: "58",
    date: "5, september",
    location: "Abuja",
    price: "78000",
    time: "fulltime",
    title: "UX designer",
  },
  {
    applicant: "58",
    date: "5, september",
    location: "Abuja",
    price: "78000",
    time: "fulltime",
    title: "UX designer",
  },
  {
    applicant: "58",
    date: "5, september",
    location: "Abuja",
    price: "78000",
    time: "fulltime",
    title: "UX designer",
  },
  {
    applicant: "58",
    date: "5, september",
    location: "Abuja",
    price: "78000",
    time: "fulltime",
    title: "UX designer",
  },
];

const Jobpage = () => {
  return (
    <main className="gridmain bg-[#9A8499]/50">
      <section className="bg-[#052620] py-4 items-center gap-2 flex justify-between px-[16px] gridchild1">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={logo}
            height={35}
            width={35}
            alt="logo"
            className="rounded-md"
          />
        </Link>
        <form className=" outline-none w-full max-w-[300px] sm:max-w-[350px] rounded-full bg-[#9A8499]/20 focus-within:outline-[#EAD494] py-[3px] pl-4 pr-1 gap-2 flex items-center">
          <input
            placeholder="Search"
            className="outline-none bg-transparent w-full"
          />
          <button className="rounded-full p-1 bg-[#052620]/80">
            <ArrowBigLeft />
          </button>
        </form>
        <div className="flex gap-2 items-center">
          <AlignCenter className="h-[35px] w-[35px] p-[5px] bg-yellow-800  rounded-full" />
          <Link href={"/dashboard"}>
            <HomeIcon className="h-[35px] w-[35px] p-[5px] bg-yellow-800  rounded-full" />
          </Link>
        </div>
      </section>
      <Panel />
      <section className="gridchild3 has-scroll bg-[#9A8499]/50">
        {jobCards.map((val, index) => (
          <Jobcard
            key={index}
            applicant={val.applicant}
            date={val.date}
            location={val.location}
            price={val.price}
            time={val.time}
            title={val.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Jobpage;

// bg-[#9A8499]/50 py-6 px-3 w-full flex flex-wrap items-center gap-4 justify-center
