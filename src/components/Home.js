import React from "react";
import { BASE_URL } from "../api/api";
import useFetchData from "../hooks/useFetchData";
import Countries from "./Countries";
import Navbar from "./Navbar";
import "../App.scss";
import Loader from "./Loader";
import Footer from "./Footer";

function Home(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  console.log(isLoading);
  return (
    <>
      <Navbar />
      <div className="countries">
        {countries.length ? (
          countries.map((country) => (
            <Countries
              name={country.name.official}
              capital={country.capital}
              continent={country.region}
              population={country.population}
              flag={country.flags.png}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
