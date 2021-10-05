import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Tenemos muchas formas de ayudarte!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Habla con alguien a través de las lineas de ayuda"
              label="HotLines"
              path="/services"
            />
            <CardItem
              src="images/img-2.png"
              text="Aprende más sobre la salud mental en estos artículos"
              label="Información"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Estos videos pueden ayudarte con tus problemas"
              label="Videos"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Chatea en directo con un experto"
              label="chat"
              path="/chat"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
