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

// {"id":"17e48559-4f1c-4617-b977-47d47ddb8de6","location":"abuja","email":"testing@gmail.com","revenue":"","booking":"","feedback":"","rating":"","fullName":"testing ","password":"testing","title":"Electrican","verified":"true","updatedAt":"2024-11-02T02:25:35.318Z","createdAt":"2024-11-02T02:25:35.318Z"}
