import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { HOME_ROUTE } from "../constant/routes";
import { COUNTRY_URL } from "../components/urls";
import fetchData from "../functions/fetch-data";
import Button from "../components/button";
import { ThemeContext } from "../context/theme-provider";

const Country = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [eachCountry, setEachCountry] = useState([]);
 const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    fetchData(`${COUNTRY_URL}/${params.cca3}`,setEachCountry);
  }, []);

  const backHome = () => {
    navigate(HOME_ROUTE);
  };
  return (
    <div className={`${
      isDark ? "text-white" : "text-black"
    }`}>
      {eachCountry.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div  className="flex flex-col items-center mx-auto gap-2 sm:w-[350px] border rounded p-4 shadow-lg xs:w-[300px]">
          <h2 className="text-2xl">{eachCountry[0].name.common}</h2>
          <p>
            <span className="font-semibold">Capital:</span>
            {eachCountry[0].capital}
          </p>
          <p>
            <span className="font-semibold">Region:</span>
            {eachCountry[0].region}
          </p>
          <p>
            <span className="font-semibold">Papulation:</span>
            {eachCountry[0].population}
          </p>
          <img src={eachCountry[0].flags.png} alt="flag" className="w-20" />
          <Button color="bg-sky-600" another="w-full mt-4"
                title="Back to home"
                onClick={backHome}
              />
        </div>
      )}
    </div>
  );
};

export default Country;
