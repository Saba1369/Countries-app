import React, { useContext, useEffect, useState } from "react";
import { COUNTRIES_URL } from "../components/urls";
import { Link } from "react-router";
import { COUNTRY_RAW_ROUTE } from "../constant/routes";
import fetchData from "../functions/fetch-data";
import { ThemeContext } from "../context/theme-provider";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    fetchData(COUNTRIES_URL, setCountries);
  }, []);
  return (
    <div className={`p-4 w-[100vw] ${
      isDark ? "text-white" : "text-black"
    }`}>
      <h2 className="text-xl pb-4">Countries List</h2>
      {countries.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries.map((country, index) => (
            <Link key={index} to={`${COUNTRY_RAW_ROUTE}/${country.cca3}`}>
              <li
                className={`${isDark ? "shadow-slate-700" : "shadow-gray-300"} flex h-20 border rounded p-4 justify-between items-center shadow-md hover:shadow-gray-400/70 `}
              >
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="w-[80px] h-full curser-pointer"
                />
                <h3 className="cursor-pointer text-end hover:underline">
                  {country.name.common}
                </h3>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Home;
