import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import classes from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
const navLinks = [
  {
    path: "/jobs",
    display: "Search Job",
  },
  {
    path: "/internship",
    display: "Internship",
  },
  {
    path: "/employer",
    display: "Post a job",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      console.log("Scroll");
      if (document.body.scrollTop > 80) {
        headerRef.current.classList.add(`{classes.sticky__header}`);
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  return (
    <header className={classes.header} ref={headerRef}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to={"/"}>
            <img src="https://stackblitz.com/files/react-qhxfxm/github/GAJANAN270395/React-Job-Portal/main/src/assets/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className={classes.right_menu}>
          <ul className={classes.menuList}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
