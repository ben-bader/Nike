import { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { navLinks } from "../constants/index";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="header Logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden block">
          <RiMenu3Line
            color="#000"
            size={27}
            className="cursor-pointer z-[9000]"
            onClick={() => setToggleMenu(!toggleMenu)}
          />

          <ul
            className={`${toggleMenu ? "flex" : "hidden"
              } flex-col justify-start items-start gap-4 fixed top-0 right-0 w-screen h-screen slide p-12 z-[100]`}
          >
            <RiCloseLine
              color="#000"
              size={36}
              className="cursor-pointer absolute top-8 right-8"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            {navLinks.map((index) => (
              <li key={index}>
                <a
                  href={index.href}
                  className="font-montserrat font-semibold leading-normal text-2xl text-slate-500 hover:text-coral-red "
                >
                  {index.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
