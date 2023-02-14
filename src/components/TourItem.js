import { useState } from "react";
import TourCarousel from "./TourCarousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function TourItem({ Tours }) {
  // TourData 불러오기
  // 3개 이상일 시 좌우 버튼 출력

  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    if (slidePx < 0) setSlidePx(slidePx + 1375);
  };

  const toNext = () => {
    if (slidePx > -2750) setSlidePx(slidePx - 1375);
  };
  return (
    <>
      <ul className="Touritem">
        {/* {Tours.map((tour) => {
          <TourCarousel slide={slidePx} key={tour.id} tour={tour} />;
        })} */}
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
    </>
  );
}

export default TourItem;
