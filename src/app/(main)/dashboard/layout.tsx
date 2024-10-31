import Aside from "@/components/global/aside";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="dashboardgrid gap-1">
      <Aside></Aside>
      <section className="bg-[#9A8499]/50 backdrop-blur-md min-h-screen py-4 flex flex-col relative overflow-x-hidden">
        {children};
      </section>
    </main>
  );
};

export default layout;
