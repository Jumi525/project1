import React from "react";
type DashboardCardprops = {
  title: string;
  heading: string;
  increase: string;
};

const DashboardCard = ({ heading, increase, title }: DashboardCardprops) => {
  return (
    <section className="bg-[#9A845C]/60 w-[200px] px-3 rounded-lg py-3">
      <p>{title}</p>
      <h3 className="mt-3 mb-2 font-bold text-3xl">{heading}</h3>
      <p className="text-sm">
        {increase} <span className="opacity-55">last month</span>
      </p>
    </section>
  );
};

export default DashboardCard;
