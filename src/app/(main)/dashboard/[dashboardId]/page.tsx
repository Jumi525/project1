"use client";
import Customer from "@/components/dashboard/customer";
import DashboardCard from "@/components/dashboard/dashboardCard";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { profileHome, profileRecommedation } from "@/lib/queries";
import clsx from "clsx";
import useLocalStorage from "@/components/global/locals";

type RecommendedProps = {
  id: string;
  location: string;
  title: string;
  time: string;
  date: string;
}[];

type HomeProps = {
  id: string;
  location: string;
  title: string;
  time: string;
  date: string;
  name: string;
  price: string;
}[];

const Dashboardpage = () => {
  const paths = usePathname();
  const path = paths.split("dashboard")[1].split("/")[1];
  const [recommended, setRecommended] = useState<RecommendedProps>([]);
  const [home, setHome] = useState<HomeProps>([]);
  const [profile] = useState({
    application: "85",
  });
  const [myprofile] = useLocalStorage("user");

  useMemo(async () => {
    if (!myprofile?.email) return;
    if (path === "recommended") {
      const jobs = await profileRecommedation(
        myprofile.email,
        "true",
        "UX designer"
      );
      if (jobs) setRecommended(jobs);
    }
    return;
  }, [path === "recommended"]);
  useMemo(async () => {
    if (!myprofile?.email) return;
    if (path === "home") {
      const jobs = await profileHome(
        myprofile.email,
        "true",
        "ahmed najmudeen"
      );
      if (jobs) setHome(jobs);
    }
    return;
  }, [path === "home"]);
  useMemo(async () => {
    if (path === "home") {
      console.log("profile");
    }
    return;
  }, [path === "home"]);
  return (
    <>
      {path === "home" && (
        <>
          <section className="p-4 max-w-[1090px] mx-auto">
            <h1 className="font-bold text-3xl pt-6 pb-3 ">
              {myprofile?.fullName}
            </h1>

            <div className="grid grid-cols-1 cardgrid md:grid-cols-4 gap-3 justify-center px-2">
              <DashboardCard
                title="Revenue"
                heading={myprofile?.revenue || ""}
                increase="+10%"
              />
              <DashboardCard
                title="Bookings"
                heading={myprofile?.booking || ""}
                increase="+34"
              />
              <DashboardCard
                title="Application"
                heading={profile.application}
                increase="+28"
              />
              <DashboardCard
                title="Ratings"
                heading={myprofile?.rating || ""}
                increase="Average Rating"
              />
            </div>
          </section>
          <section>
            <section className="deGrid items-center rounded-lg mx-auto text-center mb-4 grid sm:grid-cols-[70px_1.5fr_1fr_1fr_150px] max-w-[945px] bg-[#052620]/50 h-11">
              <p>Id</p>
              <p>Title</p>
              <p className="block desecondG">Date</p>
              <p className="hidden sm:block">Payment</p>
              <p className="hidden sm:block">Status</p>
            </section>
            <section className="scrollparent mx-auto">
              {home.map((val, index) =>
                home.length ? (
                  <Customer
                    key={index}
                    id={index + 1}
                    date={val.date.toString().split("2024")[0]}
                    name={val.title}
                    pay={val.price}
                    time={val.time}
                  />
                ) : (
                  <p key={index}>No data in table</p>
                )
              )}
            </section>
          </section>
          <div className="h-[400px] w-[400px] absolute top-0 left-0 -z-10 bg-[#052620]/20 rounded-full blur-3xl"></div>
        </>
      )}
      {path === "recommended" && (
        <section className="w-full h-full px-2">
          <p className="mt-0">Recommended Jobs</p>
          <div
            className={clsx(
              "grid grid-cols-1 recommendedcard md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center px-2",
              {
                "grid grid-cols-1 place-content-center w-full h-full":
                  recommended.length === 0,
              }
            )}
          >
            {recommended.length ? (
              recommended.map((value, index) => (
                <div
                  key={index}
                  className="bg-[#9A845C]/50 recommedgrid flex flex-col gap-2 text-left px-3 rounded-lg py-3 h-full"
                >
                  <p>
                    Location: <span>{value.location}</span>
                  </p>
                  <p>
                    Time: <span>{value.title}</span>
                  </p>
                  <p>
                    Title:{" "}
                    <span className="px-2 py-1 border-2 border-black border-solid rounded-full">
                      {value.time}
                    </span>
                  </p>
                  <p className="text-sm">
                    Date posted:{" "}
                    <span>{value.date.toString().split("2024")[0]}</span>
                  </p>
                </div>
              ))
            ) : (
              <p className="col-span-full m-auto">No Recommendation</p>
            )}
          </div>
        </section>
      )}
      {path === "revenue" && (
        <section className="flex items-center justify-center h-full">
          No Revenue
        </section>
      )}
      {path === "bookings" && (
        <section className="flex items-center justify-center h-full">
          No Bookings
        </section>
      )}
      {path === "feedback" && (
        <section className="flex items-center justify-center h-full">
          No Feedback
        </section>
      )}
    </>
  );
};

export default Dashboardpage;
