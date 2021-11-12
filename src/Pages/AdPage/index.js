import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { AdArea, Fake } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
export default function AdPage() {
  const slider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  const [adInfo, setAdInfo] = useState({});
  const [adUser, setAdUser] = useState({});
  const [adInfoImage, setAdInfoImgae] = useState([]);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [cat, setCat] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    async function loadSingleProduct() {
      const json = await api.getAd({
        params: {
          id,
          others: true,
        },
      });
      setAdInfo(json);
      setAdInfoImgae(json.images);
      setAdUser(json.userInfo);
      setLoading(false);
      setCat(json.category.slug);
    }
    loadSingleProduct();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function loadAds() {
      setShowSpinner(true);
      const json = await api.getAds({
        params: {
          sort: "desc",
          cat,
          limit: 20,
        },
      });
      setAds(json.ads);
      setShowSpinner(false);
    }
    loadAds();
  }, [cat]);

  function formateDate(data) {
    let dDate = new Date(data);

    let dia = dDate.getDate().toString();
    let diaF = dia.length == 1 ? "0" + dia : dia;
    let mes = (dDate.getMonth() + 1).toString();
    let mesF = mes.length == 1 ? "0" + mes : mes;
    let anoF = dDate.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }
  return (
    <AdArea>
      <Banner name={adInfo.title} />
      <Container>
        <Row className="mt-5">
          <Col xl={6} className="imgSlider">
            {loading && <Fake height={300} />}
            <Slider {...slider}>
              {adInfoImage.map((item, k) => (
                <div key={k}>
                  <img src={item} alt={item} />
                </div>
              ))}
            </Slider>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} className="info">
            <div className="description">
              {loading && <Fake height={30} />}
              {adInfo.dateCreated && (
                <p>
                  <strong>Criado em:</strong> {formateDate(adInfo.dateCreated)}
                </p>
              )}
              <h2>{adInfo.title}</h2>
              <p>{adInfo.description}</p>
            </div>
            <div className="price">
              {loading && <Fake height={30} />}
              {adInfo.price && (
                <>
                  <span>Preço</span>
                  <h3>
                    {adInfo.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h3>
                </>
              )}
              {adInfo.priceNegotiable && <span> (Preco Negociável)</span>}
            </div>
            {loading && <Fake height={30} />}

            <div className="autor">
              {adUser.name && (
                <>
                  <span>Criado por:</span>
                  <h2>{adUser.name}</h2>
                  <p>Email: {adUser.email}</p>
                  <a href={`mailto:${adUser.email}`} target="_blank">
                    Contato
                  </a>
                </>
              )}
            </div>
          </Col>
        </Row>
        <Row className="space">
          {adInfo.category && (
            <>
              <p className="mb-2">
                Categoria:
                <Link
                  to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}
                >
                  {" "}
                  {adInfo.category.name}
                </Link>
              </p>
              <p>
                Estado:
                <Link to={`/ads?state=${adInfo.stateName}`}>
                  {" "}
                  {adInfo.stateName}
                </Link>
              </p>
            </>
          )}
          {showSpinner && (
            <Spinner
              style={{ margin: "0px auto" }}
              animation="border"
              size="lg"
            />
          )}
          {showSpinner === false && (
            <>
              <h2 className="mt-5 mb-5">Outros produtos</h2>
              {ads.map((item, k) => (
                <Col md={3}>
                  <div key={k} className="slideContent">
                    <div className="imgHover">
                      <img src={item.image} />
                      <div className="middle">
                        <div className="text">
                          <a href={`/ad/${item.id}`}>Veja Mais</a>
                        </div>
                      </div>
                    </div>
                    <h6>{item.title}</h6>
                    <p className="mb-4">R$ {item.price}</p>

                    <a className="buttonSlider" href={`/ad/${item.id}`}>
                      Veja Mais
                    </a>
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </AdArea>
  );
}
