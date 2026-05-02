"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import css from "./nav-link.module.css";

const NavLink = ({ children, href }: PropsWithChildren & { href: string }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${css.link} ${css.active}` : `${css.link}`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
