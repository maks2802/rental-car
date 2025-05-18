import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) => clsx(s.link, { [s.active]: isActive })}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, { [s.active]: isActive })}
        to={"/catalog"}
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
