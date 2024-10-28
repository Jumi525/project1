import React from "react";

type AuthProps = {
  children: React.ReactNode;
};

const template = ({ children }: AuthProps) => {
  return (
    <div className="bg-[#9A8499]/50 p-4 w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default template;
