import React, { useContext } from "react";
import { NavLink } from "react-router";
import { HOME_ROUTE } from "../../constant/routes";
import Button from "../button";
import { ThemeContext } from "../../context/theme-provider";

const Header = () => {
  const { isDark,toggleTheme } = useContext(ThemeContext);
  return (
    <header className="bg-blue-700 text-white p-4 mb-4 w-full flex justify-between">
      <div>
        <h1 className="font-semibold">Countries App</h1>
        <NavLink
          to={HOME_ROUTE}
          className={({ isActive }) =>
            isActive ? "cursor-default" : "hover:underline"
          }
        >
          Home
        </NavLink>
      </div>
             <Button
                title={`${isDark ? "light" : "dark"} theme`}
                onClick={toggleTheme}
              />
    </header>
  );
};

export default Header;
