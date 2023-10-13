import Image from "next/image";
import { useState } from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import rafaSantos from "../../assets/logo.svg";

const Menu = ({ children }: any) => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div>
      <div className="shadow-md w-full fixed z-20 top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
          <div className="justify-between ">
            <Image alt={""} width={40} height={40} src={rafaSantos} />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <CiMenuFries size={20} /> : <CiMenuBurger size={20} />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12 bg-black" : "top-[-490px] "
            }`}
          >
            {Links.map((link, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={link.link}
                  className={`text-white hover:underline underline-offset-8 decoration-red-600  duration-500 select-none`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-24">{children}</div>
    </div>
  );
};

export default Menu;
