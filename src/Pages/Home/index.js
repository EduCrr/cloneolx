import React from "react";
import { HomeArea, SliderArea, Gallery } from "./styled";
import Search from "../../components/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 763,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <HomeArea>
      <Search />
      <Container>
        <Row className="rowSapce ">
          <SliderArea>
            <Slider {...settings}>
              <div className="slideContent">
                <div className="imgHover">
                  <img src="/assets/drone.jpg" />
                  <div className="middle">
                    <div className="text">Veja mais</div>
                  </div>
                </div>
                <h3>Teste</h3>
                <p>R$ 30,00</p>
              </div>
              <div className="slideContent">
                <img src="/assets/relogio.jpg" />
                <h3>Teste</h3>
                <p>R$ 30,00</p>
              </div>
              <div className="slideContent">
                <img src="/assets/drone.jpg" />
                <h3>Teste</h3>
                <p>R$ 30,00</p>
              </div>
              <div className="slideContent">
                <img src="/assets/relogio.jpg" />
                <h3>Teste</h3>
                <p>R$ 30,00</p>
              </div>
              <div className="slideContent">
                <img src="/assets/drone.jpg" />
                <h3>Teste</h3>
                <p>R$ 30,00</p>
              </div>
            </Slider>
          </SliderArea>
        </Row>
        <Row>
          <Gallery>
            <div className="gallery__item gallery__item--1">
              <img src="/assets/games.jpg" alt="" className="gallery__img" />
              <div className="gallery__text">
                <h3>Video Games</h3>
                <Link to="/">Veja Mais</Link>
              </div>
            </div>
            <div className="gallery__item gallery__item--2">
              <img src="/assets/drone.jpg" alt="" className="gallery__img" />
              <div className="gallery__text">
                <h3>Drones</h3>
                <Link to="/">Veja Mais</Link>
              </div>
            </div>
            <div className="gallery__item gallery__item--3">
              <img src="/assets/relogio.jpg" alt="" className="gallery__img" />
              <div className="gallery__text">
                <h3>Relógios</h3>
                <Link to="/">Veja Mais</Link>
              </div>
            </div>
          </Gallery>
        </Row>
      </Container>
    </HomeArea>
  );
}
