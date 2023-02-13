// React-icons
import { MdAutorenew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function TourInput(props) {
  // 선택한 TourInput 추가
  return (
    <div className="btnBox">
      <button className="ranBtn">
        <span>다른 취향 보기</span>
        <span className="newIcon">
          <MdAutorenew />
        </span>
      </button>
      <button className="cheBtn">
        <span>내 취향 여행 보기</span>
        <span className="arrowDown">
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
}

export default TourInput;
