function TourItem({ item, slide }) {
  // TourData 불러오기
  // 3개 이상일 시 좌우 버튼 출력
  const { imgUrl, title, des } = item;

  return (
    <li
      className="TourItemList"
      style={{ transform: `translateX(${slide})`, transition: "0.5s ease" }}
    >
      {/* <li
      className="carousel"
      id={id}
      style={{ transform: `translateX(${slide})`, transition: "0.5s ease" }} */}

      <div className="TourImg">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="desBox">
        <h3>
          <strong>{title}</strong>
          {des}
        </h3>
        <p>자세히 보기</p>
      </div>
    </li>
  );
}

export default TourItem;
