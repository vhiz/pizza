import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured1.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (d) => {
    if (d === "l") {
      setIndex(index !== 0 ? index - 1 : 3);
    } else if (d === "r") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="featured">
      <div className="arrow" onClick={() => handleArrow("l")}>
        <img src="/img/left.png" alt="" />
      </div>
      <div
        className="wrapper"
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className="imgContanier" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="arrow" onClick={() => handleArrow("r")}>
        <img src="/img/right.png" alt="" />
      </div>
    </div>
  );
}
