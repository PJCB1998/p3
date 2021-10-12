import React from "react";
import ReactPlayer from "react-player";
import "./Cards.css";

function Cards2() {
  return (
    <div className="cards">
      <h1>Estos videos podrían servirte</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mYfNzqKZ70g"
              controls
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-HGA2KA2fDI"
              controls
            />
          </ul>
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=yqqjKg1kEUk"
              position="relative"
              controls
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=H2vwLR21GF0"
              position="relative"
              controls
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
