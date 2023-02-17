import { useState } from "react";

import TourItem from "./TourItem";

//react icon
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
function TourCarousel({ data }) {
  // let [items, setItems] = useState("");
  // const { id, imgUrl, title, des } = tour;
  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    if (slidePx < 0) setSlidePx(slidePx + 1375);
  };

  const toNext = () => {
    if (slidePx > -2750) setSlidePx(slidePx - 1375);
  };
  return (
    <article>
      <ul className="TourList">
        {/* <ul className="Touritem">
        {Tours.map((tour) => {
          <TourCarousel slide={slidePx} key={tour.id} tour={tour} />;
        })}
      </ul> */}

        {data.map((item) => (
          <TourItem key={item.id} item={item} slide={slidePx} />
        ))}
      </ul>
      <div
        className="prevBtn"
        onClick={toPrev}
        style={{ display: slidePx === 0 ? "none" : "" }}
      >
        <BsArrowLeft />
      </div>
      <div
        className="nextBtn"
        onClick={toNext}
        style={{ display: slidePx === -2750 ? "none" : "" }}
      >
        <BsArrowRight />
      </div>
    </article>
  );
}

export default TourCarousel;
