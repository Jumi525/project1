import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  props?: string;
};

const navlinks = [
  {
    href: "#Home",
    link: "Home",
  },
  {
    href: "#Jobs",
    link: "Jobs",
  },
  {
    href: "#Team",
    link: "Team",
  },
  {
    href: "#Contact",
    link: "Contact",
  },
  {
    href: "#Feedback",
    link: "Feedback",
  },
  {
    href: "signup",
    link: "Sign Up",
  },
];

const NavLink = ({ props }: NavLinkProps) => {
  return (
    <ul className={cn("w-full flex flex-col", props)}>
      {navlinks.map((nav, index) => (
        <Link
          key={index}
          href={nav.href}
          id={nav.href}
          className=" py-3 hover:bg-green-800/50 md:hover:bg-transparent text-red-800 md:text-[#EAD494] md:hover:text-green-800/95"
        >
          {nav.link}
        </Link>
      ))}
    </ul>
  );
};

export default NavLink;
