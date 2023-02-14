function TourCarousel({ tour, slide }) {
  const { id, imgUrl, title, des } = tour;
  return (
    <li
      className="carousel"
      id={id}
      style={{ transform: `translateX(${slide})`, transition: "0.5s ease" }}
    ></li>
  );
}

export default TourCarousel;
