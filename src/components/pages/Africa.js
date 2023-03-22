import React, { useContext } from "react";
import { BASE_URL } from "../../api/api";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Countries from "../Countries";
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
