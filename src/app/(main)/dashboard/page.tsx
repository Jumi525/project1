"use client";
import Customer from "@/components/dashboard/customer";
import DashboardCard from "@/components/dashboard/dashboardCard";
import Aside from "@/components/global/aside";
import React from "react";

const Dashboardpage = () => {
  return (
    <main className="dashboardgrid gap-1">
      <Aside></Aside>
      <section className="bg-[#9A8499]/50 backdrop-blur-md min-h-screen py-4 flex flex-col relative overflow-x-hidden">
        <section className="p-4 max-w-[1090px] mx-auto">
          <h1 className="font-bold text-3xl pt-6 pb-3 ">Ahmed</h1>
          <div className="grid grid-cols-1 cardgrid md:grid-cols-4 gap-3 justify-center px-2">
            <DashboardCard title="Revenue" heading="$3,476" increase="+10%" />
            <DashboardCard title="Bookings" heading="126" increase="+34" />
            <DashboardCard title="Application" heading="76" increase="+28" />
            <DashboardCard
              title="Ratings"
              heading="4.5"
              increase="Average Rating"
            />
          </div>
        </section>
        <section>
          <Customer />
        </section>
        <div className="h-[400px] w-[400px] absolute top-0 left-0 -z-10 bg-[#052620]/20 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
};

export default Dashboardpage;
