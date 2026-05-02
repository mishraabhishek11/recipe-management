import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import css from "./main-header.module.css";
import MainHeaderBackgroud from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackgroud />
      <header className={css.header}>
        <Link href={"/"} className={css.logo}>
          <Image src={logo} alt="Food Recipe" priority />
          Food Recipe
        </Link>
        <nav className={css.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Delicious Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
