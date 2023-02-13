import React from "react";
import TourInput from "../components/TourInput";
import TourItem from "../components/TourItem";
import TourList from "../components/TourList";

// styles
import "../styles/tour.scss";
function Tour(props) {
  return (
    <>
      <TourList />
      <TourInput />
      <TourItem />
    </>
  );
}

export default Tour;
