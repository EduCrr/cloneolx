import React from "react";
import { SliderArea } from "./styled";
import { Link } from "react-router-dom";
export default function Sliders({ data }) {
  let price = "";

  if (data.priceNegotiable) {
    price = "Preço Negociável";
  } else {
    price = "";
  }
  return (
    <SliderArea>
      <div className="slideContent">
        <div className="imgHover">
          <img src={data.image} />
          <div className="middle">
            <div className="text">
              <Link to={`/ad/${data.id}`}>Veja Mais</Link>
            </div>
          </div>
        </div>
        <h6>{data.title}</h6>
        <p className="mb-4">
          R$ {data.price} <span>{price && <>({price})</>}</span>
        </p>

        <Link className="buttonSlider" to={`/ad/${data.id}`}>
          Veja Mais
        </Link>
      </div>
    </SliderArea>
  );
}
