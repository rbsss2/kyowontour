import { useState } from "react";
import TourInput from "../components/TourInput";
import TourItem from "../components/TourItem";
import TourList from "../components/TourList";
import TourData from "../assset/data/TourData";

// styles
import "../styles/tour.scss";
import TourCarousel from "../components/TourCarousel";
function Tour(props) {
  const [data, setData] = useState(TourData);
  return (
    <>
      <TourList />
      <TourInput />
      {/* <TourItem /> */}
      <TourCarousel data={data} />
    </>
  );
}

export default Tour;
