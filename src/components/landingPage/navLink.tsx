import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  props?: string;
};

const navlinks = [
  {
    href: "#home",
    link: "Home",
  },
  {
    href: "#jobs",
    link: "Jobs",
  },
  {
    href: "#testimonial",
    link: "Testimonial",
  },
  {
    href: "#contact",
    link: "Contact",
  },
  {
    href: "#feedback",
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
          className=" py-3 hover:bg-gray-500 md:hover:bg-transparent text-gray-900 md:text-[#EAD494] md:hover:text-green-800/95"
        >
          {nav.link}
        </Link>
      ))}
    </ul>
  );
};

export default NavLink;
