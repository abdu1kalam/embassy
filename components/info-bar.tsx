"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const menuData = [
  {
    title: "Home",
    subMenu: [""],
  },
  {
    title: "about us",
    subMenu: ["Hyderabad", "Benguluru"],
  },

  {
    title: "Migration",
    subMenu: ["Canada", "Australia", "New Zealand"],
  },
  {
    title: "Student Visa",
    subMenu: ["USA", "UK", "Germany"],
  },
  {
    title: "Visitor Visa",
    subMenu: ["Vistor Visa", "Business Visa", "Tourist Visa"],
  },
  {
    title: "Job search",
    subMenu: ["Germany", "Austrillia", "Austrillia Mates"],
  },
  {
    title: "Success stories",
    subMenu: [""],
  },
  {
    title: "Contact us",
    subMenu: [""],
  },
];
export const InfoBar = () => {
  const [isDropdownOpen, setOpenDropdown] = useState(false);

  const handleMouseEnter = (index: any) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null as any);
  };

  return (
    <div className="bg-blue-900 flex items-center h-[80px]">
      <nav className="hidden w-full max-w-[90%]  md:flex items-center justify-center  p-1 mx-auto relative">
        <ul className="list-none p-0 flex gap-x-4 ">
          {menuData.map((menu, index) => (
            <li
              key={index}
              className="relative group "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="menu-item  flex items-center rounded-sm justify-center font-semibold  tracking-widest  gap-x-2 bg-green-500/70 hover:bg-green-600/70 "
              >
                {menu.title}
                {menu.subMenu.length > 1 ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  ""
                )}
              </a>

              <ul
                className={`submenu mt-8 text-white text-start space-y-4 z-50 ${
                  isDropdownOpen === (index as any)
                    ? "opacity-100 transform translate-y-0 "
                    : "opacity-0 transform -translate-y-5"
                }`}
              >
                {menu.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="submenu-item m-4 text-white w-full">
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
