import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Range from "../Range";
import SingleContinentContries from "./SingleContinentContries";

function Africa(props) {
  return (
    <>
      <Navbar />
      <Range />
      <SingleContinentContries />
      <Footer />
    </>
  );
}

export default Africa;
