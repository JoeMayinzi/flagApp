import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Range from "../Range";
import SingleContinentContries from "./SingleContinentContries";

function Europa(props) {
  return (
    <>
      <Navbar />
      <Range />
      <SingleContinentContries />
      <Footer />
    </>
  );
}

export default Europa;
