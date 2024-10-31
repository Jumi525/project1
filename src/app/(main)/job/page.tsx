"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  AlignCenter,
  Captions,
  CircleDollarSign,
  HomeIcon,
  LocateFixed,
  MousePointer2,
  Timer,
  User,
  Users,
  X,
} from "lucide-react";
import Jobcard from "@/components/global/jobcard";
import Panel from "@/components/global/panel";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { useAppState } from "@/lib/provider/authProvider";
import { usePathname } from "next/navigation";
import { profileJobs } from "@/lib/queries";

const navlinks = [
  {
    href: "Location",
    link: <LocateFixed />,
  },
  {
    href: "Pay",
    link: <CircleDollarSign />,
  },
  {
    href: "Title",
    link: <Captions />,
  },
  {
    href: "Applicant",
    link: <Users />,
  },
  {
    href: "Time",
    link: <Timer />,
  },
];

type ProfileProps = {
  id: string;
  title: string;
  location: string;
  date: string;
  name: string;
  price: string;
  time: string;
}[];

const Jobpage = () => {
  const [callForm, setCallForm] = useState(false);
  const { state, email } = useAppState();
  const paths = usePathname();
  const [profileJob, setprofileJobs] = useState<ProfileProps>([]);
  const Email = "jimitech@gmail.com";

  useMemo(async () => {
    const userJob = await profileJobs(Email);
    if (!userJob.length) return;
    console.log(userJob);
    setprofileJobs(userJob);
  }, [paths.startsWith("/job")]);

  useMemo(() => {
    state.users.map((val) => {
      if (val?.email === email)
        if (val.verified === "true") return;
        else setCallForm(true);
      return;
    });
  }, [state]);
  return (
    <main className="gridmain bg-[#9A8499]/50">
      <section className="bg-[#052620] py-4 items-center gap-2 flex justify-between px-[16px] gridchild1">
        <Link href="/" className="flex gap-2 items-center">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="200.000000pt"
            height="200.000000pt"
            viewBox="0 0 200.000000 200.000000"
            preserveAspectRatio="xMidYMid meet"
            className="h-[80px] w-[80px]"
          >
            <metadata>
              Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g
              transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                className="fill-[#EAD494]"
                d="M974 1562 l-31 -47 -74 -5 c-72 -5 -77 -7 -129 -52 -30 -27 -64 -49
-75 -50 -35 -2 -69 3 -82 13 -9 8 -10 -3 -6 -45 6 -54 5 -56 -41 -107 -56 -63
-61 -88 -6 -34 l40 39 0 -46 c0 -50 25 -122 40 -113 5 3 3 20 -6 40 -15 37
-19 111 -6 119 5 3 18 -17 29 -44 18 -42 19 -52 7 -67 -15 -20 -18 -33 -6 -33
12 0 47 63 43 80 -1 8 -14 39 -28 68 -26 56 -25 82 4 82 29 -1 56 -27 49 -47
-4 -10 -10 -13 -14 -7 -6 8 -17 10 -38 5 -3 0 6 -16 20 -34 15 -19 26 -39 26
-45 0 -7 5 -12 10 -12 6 0 10 12 10 26 0 20 4 24 19 19 25 -8 35 9 16 25 -24
20 -18 25 29 22 38 -3 49 0 72 23 14 14 32 24 40 21 19 -7 64 11 80 32 13 16
13 16 14 0 0 -22 18 -24 26 -3 9 22 21 18 28 -7 5 -20 8 -21 17 -8 8 11 12 12
16 3 2 -7 21 -13 40 -13 23 0 46 -9 66 -26 25 -21 39 -25 74 -22 24 2 43 2 43
0 0 -2 -10 -12 -22 -21 l-21 -18 31 -6 c22 -4 32 -13 34 -29 3 -20 6 -18 26
20 28 52 49 47 26 -6 -9 -20 -18 -43 -21 -50 -6 -14 42 -92 56 -92 16 0 44 75
44 118 l0 43 34 -33 c22 -21 36 -46 40 -70 5 -37 23 -54 23 -23 0 31 -31 89
-71 132 -36 39 -40 49 -37 81 3 20 8 44 12 54 7 15 4 15 -34 2 -50 -17 -71
-12 -119 30 -66 59 -82 66 -148 66 -67 0 -88 13 -119 73 -8 15 -16 27 -17 26
-1 0 -16 -21 -33 -47z m54 -70 c2 -12 -4 -25 -16 -31 -23 -12 -32 -5 -32 25 0
38 43 44 48 6z m-125 -8 c13 -5 11 -13 -11 -49 -19 -31 -32 -43 -42 -38 -8 3
-41 8 -72 11 -32 2 -58 7 -57 11 0 3 18 21 41 39 31 25 50 32 83 32 24 0 50
-3 58 -6z m355 -31 l45 -38 -59 -6 c-32 -3 -66 -9 -74 -13 -11 -5 -25 6 -47
38 -17 24 -29 47 -26 50 4 3 31 6 60 6 48 0 60 -4 101 -37z m-305 -36 c-11
-17 -29 -33 -41 -35 -31 -5 -28 7 15 53 41 45 56 34 26 -18z m167 -29 c0 -5
-9 -8 -20 -8 -21 0 -65 72 -52 85 7 6 72 -63 72 -77z m-287 -7 c17 -6 17 -8
-2 -25 -18 -16 -28 -18 -71 -10 -28 5 -51 14 -51 19 0 20 87 31 124 16z m446
3 c40 -8 39 -19 0 -33 -43 -15 -71 -14 -95 4 -16 13 -17 16 -4 25 17 11 54 13
99 4z m109 -52 c3 -18 -1 -23 -15 -22 -10 1 -20 1 -23 0 -26 -9 -38 -6 -33 8
17 48 65 57 71 14z m32 -106 c0 -25 -5 -57 -11 -73 l-11 -28 -14 28 c-14 26
-14 33 3 73 10 24 21 44 26 44 4 0 7 -20 7 -44z"
              />
              <path
                className="fill-[#EAD494]"
                d="M944 1331 c-106 -13 -196 -77 -245 -172 -31 -63 -17 -56 27 12 46 72
138 139 190 139 17 0 60 -46 70 -75 4 -11 15 -30 25 -43 10 -13 25 -48 34 -77
l15 -54 26 26 c16 16 32 23 45 20 10 -3 19 -2 19 1 0 4 -18 51 -40 106 -23 54
-39 100 -37 102 6 7 72 -16 111 -39 22 -12 57 -43 79 -69 l40 -47 -18 -28
c-10 -15 -24 -32 -32 -36 -18 -11 -17 -27 2 -27 12 0 15 -16 15 -84 0 -64 4
-88 16 -100 21 -21 57 -20 76 2 19 22 30 52 18 52 -5 0 -12 -9 -15 -21 -5 -14
-14 -19 -28 -17 -20 3 -22 10 -25 86 l-3 82 31 0 c16 0 30 5 30 10 0 6 -13 10
-30 10 -29 0 -30 2 -30 45 0 40 -5 52 -45 94 -78 84 -187 118 -321 102z m102
-72 c8 -17 17 -38 19 -47 2 -10 6 -26 10 -37 7 -20 7 -20 -6 0 -7 11 -17 23
-23 27 -6 4 -7 8 -3 8 5 0 -1 12 -12 26 -12 15 -21 33 -21 40 0 24 19 15 36
-17z"
              />
              <path
                className="fill-[#EAD494]"
                d="M911 1201 c-37 -80 -38 -93 -10 -89 15 2 27 18 40 53 40 105 16 135
-30 36z"
              />
              <path
                className="fill-[#EAD494]"
                d="M476 1160 c-13 -17 -37 -52 -51 -79 -26 -48 -28 -49 -66 -44 -43 6
-69 -8 -69 -38 0 -25 27 -24 42 1 14 21 48 28 48 9 0 -22 -72 -109 -96 -115
-13 -3 -24 -10 -24 -15 0 -11 119 -9 126 2 3 5 -2 9 -10 9 -28 0 -28 20 0 68
15 26 28 48 29 50 5 6 90 -30 97 -41 14 -22 9 -77 -7 -77 -16 0 -18 -8 -15
-55 3 -38 11 -53 61 -111 40 -46 41 -50 36 -100 l-5 -52 33 14 c43 18 70 8
137 -49 47 -40 54 -42 126 -47 l75 -5 33 -48 c32 -47 33 -47 45 -25 6 13 23
35 37 51 23 24 33 27 93 27 65 0 68 1 115 43 68 61 85 68 125 57 49 -14 49
-14 42 38 -5 45 -3 50 40 100 42 50 81 137 69 156 -3 5 -13 -14 -23 -44 -9
-29 -31 -67 -48 -84 l-31 -31 0 52 c0 54 -7 83 -20 83 -4 0 -5 -29 -2 -65 6
-77 -8 -85 -32 -21 -13 35 -15 50 -6 65 18 34 -6 24 -28 -11 -12 -18 -17 -35
-12 -38 10 -6 30 -55 30 -72 0 -16 -38 21 -46 45 -6 20 -7 20 -20 3 -7 -10
-10 -24 -7 -32 3 -9 -2 -14 -16 -14 -26 0 -27 -15 -3 -29 12 -8 4 -9 -31 -4
-42 5 -51 3 -75 -19 -19 -18 -42 -27 -76 -31 -31 -3 -52 -11 -58 -21 -8 -15
-11 -14 -27 6 l-18 22 -7 -22 c-7 -21 -7 -21 -27 -1 -11 11 -33 19 -53 19 -22
0 -45 9 -64 25 -32 27 -80 33 -100 13 -9 -9 -12 -9 -12 -1 0 7 5 15 10 18 20
12 11 33 -12 27 -16 -4 -20 -2 -16 10 8 19 -11 49 -19 31 -9 -24 -41 -58 -48
-51 -3 3 3 25 14 48 22 47 16 69 -26 91 -39 21 -27 32 27 26 47 -6 68 4 35 17
-22 8 -21 133 1 157 16 17 17 17 34 -3 11 -13 23 -19 33 -15 24 9 21 44 -4 58
-18 9 -27 7 -50 -10 -33 -25 -40 -26 -33 -6 5 11 -1 15 -22 14 -16 0 -38 -4
-48 -8 -19 -7 -19 -8 2 -13 20 -6 22 -12 22 -91 0 -92 -13 -114 -48 -79 -17
17 -24 50 -59 260 -7 40 -14 40 -47 2z m17 -108 c6 -48 4 -53 -11 -47 -9 4
-27 10 -39 12 -13 3 -23 8 -23 10 0 3 12 27 27 54 31 54 37 50 46 -29z m107
-179 c0 -5 -7 -17 -15 -27 -9 -11 -15 -42 -15 -70 l-1 -51 -33 37 c-42 48 -61
105 -37 111 28 8 101 7 101 0z m31 -39 c16 -14 16 -18 -4 -64 -11 -27 -24 -47
-29 -44 -15 9 -6 124 10 124 3 0 13 -7 23 -16z m13 -145 c-5 -8 -1 -8 13 0 15
7 25 7 38 -3 17 -12 17 -14 -6 -29 -29 -21 -58 -22 -65 -2 -8 19 2 45 16 45 6
0 8 -5 4 -11z m746 -19 c-4 -16 -15 -26 -29 -28 -27 -4 -40 6 -45 34 -4 17 2
20 39 20 40 0 42 -2 35 -26z m-555 -30 c19 -21 18 -22 -32 -33 -25 -5 -103 11
-103 22 0 9 58 28 91 30 15 0 34 -8 44 -19z m434 8 c47 -16 48 -17 31 -28 -19
-12 -110 -13 -129 -1 -10 7 -8 12 10 25 28 19 41 20 88 4z m-316 -65 c29 -51
15 -60 -26 -17 -42 45 -46 57 -15 52 12 -2 30 -18 41 -35z m167 27 c0 -13 -60
-80 -72 -80 -11 0 -2 36 18 68 14 22 54 31 54 12z m-201 -94 c-2 -2 -27 -7
-55 -11 -48 -6 -53 -5 -95 30 -57 48 -58 54 -12 48 22 -3 53 1 73 9 l35 14 29
-43 c15 -24 27 -45 25 -47z m325 65 l50 -6 -44 -35 c-35 -28 -53 -35 -86 -34
-23 0 -49 4 -59 8 -17 6 -17 8 2 29 11 12 26 32 32 45 10 19 15 21 33 11 12
-6 44 -14 72 -18z m-216 -70 c-3 -30 -35 -41 -44 -16 -4 9 -1 27 6 41 11 19
16 21 27 12 8 -6 13 -23 11 -37z"
              />
              <path
                className="fill-[#EAD494]"
                d="M964 1166 c-8 -21 3 -36 27 -36 15 0 20 6 17 22 -4 27 -35 37 -44 14z"
              />
              <path
                className="fill-[#EAD494]"
                d="M833 1128 c-12 -21 -27 -38 -33 -38 -5 0 -10 -4 -10 -10 0 -5 7 -10
15 -10 12 0 15 -16 15 -83 0 -90 13 -117 57 -117 25 0 53 30 53 56 0 17 -2 17
-19 -5 -12 -16 -24 -22 -35 -18 -13 5 -16 22 -16 87 l0 80 30 0 c17 0 30 5 30
10 0 6 -13 10 -29 10 -27 0 -30 3 -33 38 l-3 37 -22 -37z"
              />
              <path
                className="fill-[#EAD494]"
                d="M1489 1079 c-17 -14 -19 -19 -7 -15 11 3 19 -2 23 -15 5 -14 14 -19
28 -17 28 4 35 38 11 55 -24 17 -28 17 -55 -8z"
              />
              <path
                className="fill-[#EAD494]"
                d="M945 1080 c-3 -5 1 -10 9 -10 13 0 16 -15 16 -90 0 -73 -3 -90 -15
-90 -8 0 -15 -4 -15 -8 0 -5 23 -8 50 -8 28 0 50 3 50 8 0 4 -4 8 -10 8 -6 0
-10 40 -10 100 l0 100 -34 0 c-19 0 -38 -4 -41 -10z"
              />
              <path
                className="fill-[#EAD494]"
                d="M1098 1073 c-39 -46 -28 -82 34 -114 48 -24 59 -36 51 -56 -10 -27
-65 -11 -90 26 l-23 34 0 -44 0 -44 41 -2 c51 -3 97 20 105 52 10 39 -2 54
-56 78 -43 19 -50 26 -48 47 2 19 10 26 29 28 22 3 29 -3 40 -27 18 -40 29
-39 29 2 0 33 -1 34 -48 36 -36 1 -53 -4 -64 -16z"
              />
              <path
                className="fill-[#EAD494]"
                d="M1403 1083 c-10 -3 -9 -9 3 -21 13 -12 15 -32 12 -90 -2 -48 -8 -77
-16 -80 -7 -2 -12 -7 -12 -10 0 -10 97 -9 106 1 4 4 -3 7 -15 7 -22 0 -23 3
-21 83 3 118 3 117 -22 116 -13 0 -29 -3 -35 -6z"
              />
              <path
                className="fill-[#EAD494]"
                d="M1570 1082 c0 -4 4 -12 8 -17 5 -6 26 -53 47 -106 l38 -97 -24 -43
c-28 -50 -44 -59 -52 -28 -6 23 -25 22 -41 -4 -23 -37 47 -55 84 -22 10 9 30
45 44 78 14 34 39 96 56 137 17 41 41 83 53 92 22 17 21 18 -26 18 -44 0 -46
-1 -35 -20 10 -15 9 -29 -6 -72 -30 -84 -31 -85 -56 -16 -12 35 -25 69 -27 76
-3 6 2 12 11 12 9 0 16 5 16 10 0 6 -20 10 -45 10 -25 0 -45 -4 -45 -8z"
              />
              <path
                className="fill-[#EAD494]"
                d="M775 880 c-11 -24 -31 -48 -48 -57 -26 -13 -28 -16 -14 -30 20 -21
142 -29 173 -12 32 16 31 31 -1 23 -31 -8 -65 19 -65 50 -1 12 -6 31 -14 44
-12 23 -13 23 -31 -18z"
              />
              <path
                className="fill-[#EAD494]"
                d="M1201 880 c-13 -11 -34 -20 -48 -20 -14 0 -21 -4 -18 -10 10 -17 -4
-47 -25 -53 -11 -3 -20 -10 -20 -15 0 -15 187 -7 206 8 19 17 18 27 -6 33 -10
3 -27 21 -37 41 -19 42 -20 42 -52 16z"
              />
              <path
                className="fill-[#EAD494]"
                d="M1245 760 c-12 -19 -118 -67 -177 -80 -74 -17 -158 -1 -245 46 -34
18 -60 27 -57 20 3 -8 38 -29 77 -47 66 -31 80 -34 167 -34 87 0 100 3 155 32
73 38 102 59 93 68 -3 3 -9 1 -13 -5z"
              />
            </g>
          </svg>
        </Link>
        <form className=" outline-none w-full max-w-[300px] sm:max-w-[350px] rounded-full bg-[#9A8499]/20 focus-within:outline-[#EAD494] py-[3px] pl-4 pr-1 gap-2 flex items-center">
          <input
            placeholder="Search"
            className="outline-none bg-transparent w-full"
          />
          <button className="rounded-full p-1 bg-[#052620]/80">
            <MousePointer2 />
          </button>
        </form>
        <div className="flex gap-2 items-center">
          <AlertDialog>
            <AlertDialogTrigger className="filterIcon">
              <AlignCenter className="h-[35px] w-[35px] p-2 bg-[#EAD494]/90  rounded-full filterIcon" />
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[330px]">
              <AlertDialogHeader className=" relative">
                <AlertDialogTitle className="font-bold text-2xl">
                  Filters
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <ul className="flex flex-col gap-2 mt-3 items-center w-full">
                    {navlinks.map((nav, index) => (
                      <button
                        key={index}
                        className="rounded-lg p-3 w-full flex hover:bg-slate-500 bg-slate-500/50"
                      >
                        {nav.link}
                        <p className="ml-3">{nav.href}</p>
                      </button>
                    ))}
                  </ul>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="absolute top-2 right-2 hover:border-red-700 border-solid border-2 p-1 rounded-md">
                  <X />
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Popover>
            <PopoverTrigger>
              <User className="hidden h-[35px] w-[35px] p-2 bg-[#EAD494]/90  rounded-full authorIcon" />
            </PopoverTrigger>
            <PopoverContent className="w-[150px]">
              <PopoverClose>Logout</PopoverClose>
            </PopoverContent>
          </Popover>

          <Link href={"/dashboard/home"}>
            <HomeIcon className="h-[35px] w-[35px] p-2 bg-[#EAD494]/90  rounded-full" />
          </Link>
        </div>
      </section>
      <Panel />
      <section className="gridchild3 has-scroll">
        {profileJob.map((val, index) => (
          <Jobcard
            key={index}
            applicant={"10"}
            date={val.date ? val.date.toString().split("2024")[0] : ""}
            location={val.location}
            price={val.price}
            time={val.time}
            title={val.title}
            callform={callForm}
            email={email}
          />
        ))}
      </section>
    </main>
  );
};

export default Jobpage;
