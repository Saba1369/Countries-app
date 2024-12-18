import React, { useContext } from "react";
import NotFoundImg from "../assets/images/404.png" 
import { Link } from "react-router";
import { HOME_ROUTE } from "../constant/routes";
import { ThemeContext } from "../context/theme-provider";

const NotFound = () => {
    const { isDark } = useContext(ThemeContext);
    return(
        <div className="flex flex-col items-center">
            <img src={NotFoundImg} alt="NOT FOUND" className="w-[500px] pt-10"/>
            <Link to={HOME_ROUTE} className={`${isDark ? "text-white" : "text-black"} text-center`}>Back To Home</Link>
        </div>
    )
};

export default NotFound;