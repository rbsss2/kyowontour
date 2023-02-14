import React from "react";

function TourList(props) {
  // Tour 리스트 출력하기

  return (
    <section className="listContainer">
      <div className="listBox menu">
        <span className="">
          <em>나는</em>
          <select className="">
            <option value="아이와 함께">아이와 함께</option>
            <option value="친구와 함께">친구와 함께</option>
            <option value="연인과 함께">연인과 함께</option>
            <option value="부모님과함께">부모님과함께</option>
            <option value="나 홀로">나 홀로</option>
          </select>
          <em>여행을 떠나고 싶어요.</em>
        </span>
      </div>
      <div className="listBox">
        <span>
          <select>
            <option value="휴양지">휴양지</option>
            <option value="도심">도심</option>
          </select>
          <em>에서</em>
          <select>
            <option value="쇼핑을 즐기는">쇼핑을 즐기는</option>
            <option value="맛집 탐방">맛집 탐방</option>
            <option value="문화·미술 탐방">문화·미술</option>
            <option value="액티비티를 즐기는">액티비티를 즐기는</option>
            <option value="취미를 즐기는">취미를 즐기는</option>
          </select>
          <em>여행을 즐기고 싶어요.</em>
        </span>
      </div>
    </section>
  );
}

export default TourList;
