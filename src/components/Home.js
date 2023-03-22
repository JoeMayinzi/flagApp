import React from "react";
import Navbar from "./Navbar";
import "../App.scss";
import Footer from "./Footer";
import Range from "./Range";
import CountriesLayout from "./pages/CountriesLayout";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Range />
        <CountriesLayout />
      </div>
      <Footer />
    </>
  );
}

export default Home;
