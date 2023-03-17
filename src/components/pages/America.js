import React, { useContext } from "react";
import { BASE_URL } from "../../api/api";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Countries from "../Countries";
import Footer from "../Footer";
import { RangeContext } from "../../context/RangeContext";
import Range from "../Range";

function America(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  const [rangeValue, setRangeValue] = useContext(RangeContext);
  return (
    <>
      <Navbar />
      <Range rangeValue={rangeValue} setRangeValue={setRangeValue} />
      <div className="countries">
        {countries.length
          ? countries
              .slice(0, rangeValue)
              .filter((c) => c.region === "Americas")
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
      <Footer />
    </>
  );
}

export default America;
