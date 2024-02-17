import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { navLinks } from "../constants/index";

const Nav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);
  return (
    <header className="header">
      <div
        id="logo"
        className="flex-grow-[1] relative before:w-[85%] before:h-[1px] max-lg:before:hidden before:bg-white before:absolute before:bg-opacity-50 before:right-[-7%] before:z-10 before:top-1/2 before:translate-y-[-50%] "
      >
        <img src={logo} className="cursor-pointer" alt="logo" />
      </div>
      <nav className="flex-grow-[1] ">
        <ul className="hidden md:flex justify-start gap-8  bg-white bg-opacity-[4%] backdrop-blur-xl md:ps-20 lg:ps-24">
          {navLinks.map(({ to, name, id, num }) => (
            <li key={id}>
              <NavLink
                end={true}
                className={({ isActive }) =>
                  `desktop_nav_links ${isActive && "before:w-full"}`
                }
                to={`/Space-tourism-multi-page-website${to}`}
              >
                <span className="font-bold">{num}</span> {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <img
            className="ms-auto cursor-pointer"
            src={hamburger}
            alt="hamburger"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`fixed top-0 ${
            open ? "right-[0%]" : "right-[-100%]"
          } bg-white bg-opacity-[4%] z-50 backdrop-blur-xl md:hidden py-12 min-h-screen w-[90%] transition-[right] duration-700`}
        >
          <div className="pe-4">
            <img
              className="ms-auto cursor-pointer"
              src={close}
              alt="close"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul className="mt-24 flex flex-col gap-10 ps-10">
            {navLinks.map(({ to, name, id, num }) => (
              <li key={id}>
                <NavLink
                  end={true}
                  className={({ isActive }) =>
                    `mobile_nav_links ${isActive && "before:w-[4px]"}`
                  }
                  onClick={() => setOpen(false)}
                  to={`/Space-tourism-multi-page-website${to}`}
                >
                  <span className="font-bold">{num}</span> {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
