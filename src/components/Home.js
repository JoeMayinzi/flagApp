import React from "react";
import { BASE_URL } from "../api/api";
import useFetchData from "../hooks/useFetchData";
import Countries from "./Countries";
import Navbar from "./Navbar";
import "../App.scss";

function Home(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  return (
    <>
      <Navbar />
      <div className="countries">
        {countries.map((country) => (
          <Countries
            name={country.name.official}
            capital={country.capital}
            continent={country.region}
            population={country.population}
            flag={country.flags.png}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
