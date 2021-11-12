import React, { useState, useEffect } from "react";
import { HomeArea, SliderArea, Gallery } from "./styled";
import Search from "../../components/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api";
import Sliders from "../../components/Sliders";
export default function Home() {
  const settings = {
    infinite: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const slider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    className: "slider",
    fade: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function loadAds() {
      const lastAds = await api.getAds({
        params: {
          sort: "desc",
          limit: 12,
        },
      });
      setAds(lastAds.ads);
    }
    loadAds();
  }, []);
  return (
    <HomeArea>
      <div className="slider">
        <Slider {...slider}>
          <div>
            <img src="/assets/fundo1.jpg" alt="a" />
          </div>
          <div>
            <img src="/assets/fundo2.jpg" alt="a" />
          </div>
          <div>
            <img src="/assets/fundo3.jpg" alt="a" />
          </div>
        </Slider>
      </div>
      <Search />
      <Container>
        <Row className="rowSapce ">
          <SliderArea>
            <Slider {...settings}>
              {ads.map((item, k) => (
                <Sliders key={k} data={item} />
              ))}
            </Slider>
          </SliderArea>
        </Row>
        <Row>
          <Gallery>
            <div className="gallery__item gallery__item--1">
              <img src="/assets/games.jpg" alt="" className="gallery__img" />
              <div className="gallery__text">
                <h3>Video Games</h3>
                <Link to={`/ads?cat=electronics`}>Veja Mais</Link>
              </div>
            </div>
            <div className="gallery__item gallery__item--2">
              <img src="/assets/car.jpg" alt="" className="gallery__img" />
              <div className="gallery__text">
                <h3>Carros</h3>
                <Link to={`/ads?cat=cars`}>Veja Mais</Link>
              </div>
            </div>
            <div className="gallery__item gallery__item--3">
              <img src="/assets/roupas.jpg" alt="" className="gallery__img" />
              <div className="gallery__text">
                <h3>Roupas</h3>
                <Link to={`/ads?cat=clothes`}>Veja Mais</Link>
              </div>
            </div>
          </Gallery>
        </Row>
      </Container>
    </HomeArea>
  );
}
