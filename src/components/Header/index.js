import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { HeaderArea, Menu } from "./styled";
import { Link } from "react-router-dom";
import { FaAlignRight, FaUserAlt } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useStateValue } from "../../contexts/StateContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [state, dispatch] = useStateValue();

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  const settings = {
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

  return (
    <HeaderArea>
      <Container>
        <Row>
          <div className="menu">
            <div className="logo">
              <Link to="/">FURNDE</Link>
            </div>
            {openMenu === false && (
              <nav>
                <ul>
                  {!state.user.token && (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/cadastrar">Cadastrar</Link>
                      </li>
                      <li>
                        <FaAlignRight onClick={handleMenu} />
                      </li>
                    </>
                  )}
                  {state.user.token && (
                    <>
                      <li>
                        <FaUserAlt />
                      </li>
                      <li>
                        <Link to="/">Postar Anúncio</Link>
                      </li>
                      <li>
                        <Link to="/">Sair</Link>
                      </li>
                      <li>
                        <FaAlignRight onClick={handleMenu} />
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            )}
          </div>
          <Menu
            ativo={openMenu}
            style={{
              width: openMenu ? "30vw" : "0",
            }}
          >
            <div className="topArea">
              <h4>Categorias</h4>
              <MdClear size="22" onClick={handleMenu} />
            </div>
            <div className="MenuArea">
              <MdClear />
              <Link to="/">Telefone</Link>
            </div>
            <div className="MenuArea">
              <MdClear />
              <Link to="/">Telefone</Link>
            </div>
            <div className="MenuArea">
              <MdClear />
              <Link to="/">Telefone</Link>
            </div>
            <div className="MenuArea">
              <MdClear />
              <Link to="/">Telefone</Link>
            </div>
            <div className="MenuArea">
              <MdClear />
              <Link to="/">Telefone</Link>
            </div>
          </Menu>
        </Row>
      </Container>
      <div>
        <Slider {...settings}>
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
    </HeaderArea>
  );
}
