import React, { useState, useEffect } from "react";
import { AdsArea } from "./styled";
import api from "../../api";
import { Container, Pagination, Row, Spinner } from "react-bootstrap";
import { useLocation, useHistory, Link } from "react-router-dom";
import Banner from "../../components/Banner";
let timer;
export default function Ads() {
  const [categories, setCategories] = useState([]);
  const [listaEstado, setListaEstado] = useState([]);
  const [ads, setAds] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [adsPageTotal, setAdsPageTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  let url = useLocation().search;
  function getQueryString() {
    return new URLSearchParams(url); //transforma em objeto
  }
  const query = getQueryString();

  const [q, setQ] = useState(query.get("q") !== null ? query.get("q") : "");
  const [cat, setCat] = useState(
    query.get("cat") !== null ? query.get("cat") : ""
  );
  const [state, setState] = useState(
    query.get("state") !== null ? query.get("state") : ""
  );

  useEffect(() => {
    async function loadCategories() {
      const cats = await api.getCategories();
      setCategories(cats);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadStates() {
      const list = await api.getlist();
      setListaEstado(list.states);
    }
    loadStates();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function loadAds() {
    setAds([]);
    // 0-1 * 15 //
    let offset = (currentPage - 1) * 15;
    const lastAds = await api.getAds({
      params: {
        sort: "desc",
        limit: 55,
        q,
        cat,
        state,
        offset,
      },
    });

    setShowSpinner(false);
    setAds(lastAds.ads);
    setAdsPageTotal(lastAds.total);
  }

  //page
  useEffect(() => {
    loadAds();
  }, [currentPage]);

  useEffect(() => {
    let queryString = [];
    if (q) {
      queryString.push(`q=${q}`);
    }
    if (cat) {
      queryString.push(`cat=${cat}`);
    }
    if (state) {
      queryString.push(`state=${state}`);
    }

    history.replace({
      search: `?${queryString.join("&")}`,
    });

    if (timer) {
      clearTimeout(timer);
    }
    setAds([]);
    timer = setTimeout(loadAds, 2000);
    setShowSpinner(true);
    setCurrentPage(1);
  }, [q, cat, state]);

  //page
  useEffect(() => {
    if (ads.length > 0) {
      //763  / 55
      setPages(Math.ceil(adsPageTotal / ads.length));
    } else {
      setPages(0);
    }
  }, [adsPageTotal]);

  let pagination = [];

  function calc() {
    for (let i = 1; i <= pages; i++) {
      pagination.push(i);
    }
    return pagination;
  }

  //rever aula https://alunos.b7web.com.br/curso/reactjs/olx-ads-2-leftside
  return (
    <>
      <Banner name="Produtos" />
      <AdsArea>
        <Container>
          <Row>
            <div className="leftSide">
              <form method="GET" className="login_Register_Form">
                <input
                  type="text"
                  name="q"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Buscar"
                />
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  name="state"
                >
                  {listaEstado.map((item, k) => (
                    <option key={k} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <ul>
                  {categories.map((item, k) => (
                    <li
                      onClick={() => setCat(item.slug)}
                      key={k}
                      className={
                        cat == item.slug
                          ? "categoryItem active"
                          : "categoryItem"
                      }
                    >
                      <img src={item.img} alt={item.name} />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </form>
            </div>
            <div className="rightSide">
              {showSpinner && ads.length === 0 && (
                <Spinner
                  style={{ margin: "0px auto" }}
                  animation="border"
                  size="lg"
                />
              )}
              {showSpinner === false &&
                ads.length === 0 &&
                adsPageTotal === 0 && (
                  <h4 style={{ margin: "0px auto" }}>
                    Nenhum produto encontrado!
                  </h4>
                )}
              <div className="list">
                {ads.map((item, k) => (
                  <div key={k} className="slideContent">
                    <div className="imgHover">
                      <img
                        src={
                          item.image ===
                          "http://alunos.b7web.com.br:501/media/default.jpg"
                            ? "/assets/drone.jpg"
                            : item.image
                        }
                      />

                      <div className="middle">
                        <div className="text">
                          <Link to={`/ad/${item.id}`}>Veja Mais</Link>
                        </div>
                      </div>
                    </div>
                    <h6>{item.title}</h6>
                    <p className="mb-4">R$ {item.price}</p>

                    <Link className="buttonSlider" to={`/ad/${item.id}`}>
                      Veja Mais
                    </Link>
                  </div>
                ))}
              </div>
              {showSpinner === false && ads.length > 0 && (
                <div className="pagination">
                  {calc().map((item, k) => (
                    <div
                      onClick={() => setCurrentPage(k + 1)}
                      key={k}
                      className={
                        item === currentPage ? "pagItem active" : "pagItem"
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Row>
        </Container>
      </AdsArea>
    </>
  );
}
