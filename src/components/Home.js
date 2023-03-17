import React, { useContext } from "react";
import { BASE_URL } from "../api/api";
import useFetchData from "../hooks/useFetchData";
import Countries from "./Countries";
import Navbar from "./Navbar";
import "../App.scss";
import Loader from "./Loader";
import Footer from "./Footer";
import Range from "./Range";
import { RangeContext } from "../context/RangeContext";

function Home(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  const [rangeValue, setRangeValue] = useContext(RangeContext);

  return (
    <>
      <Navbar />
      <div className="container">
        <Range
          countries={countries}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
        />
        <div className="countries">
          {countries.length
            ? countries
                .slice(0, rangeValue)
                .map((country) => (
                  <Countries
                    name={country.name.official}
                    capital={country.capital}
                    continent={country.region}
                    population={country.population}
                    flag={country.flags.png}
                  />
                ))
            : isLoading && <Loader />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
