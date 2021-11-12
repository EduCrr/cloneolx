import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { HeaderArea, Menu } from "./styled";
import { Link } from "react-router-dom";
import { FaAlignRight, FaUserAlt } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useStateValue } from "../../contexts/StateContext";
import api from "../../api";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [state, dispatch] = useStateValue();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const cats = await api.getCategories();
      setCategories(cats);
    }
    loadCategories();
  }, []);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  function handleLogout() {
    dispatch({
      type: "setToken",
      token: "",
    });
    dispatch({
      type: "setEmail",
      email: "",
    });
    dispatch({
      type: "setName",
      name: "",
    });
    window.location.href = "/";
  }
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
                        <Link to="/user">
                          <FaUserAlt />
                          <span style={{ margin: "0px 10px" }}>
                            {state.user.name}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/post-an-ad">Postar Anúncio</Link>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Sair</button>
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
            <>
              <div className="topArea">
                <h4>Categorias</h4>
                <MdClear size="22" onClick={handleMenu} />
              </div>
              {categories.map((item, k) => (
                <div className="MenuArea" key={k}>
                  <img src={item.img} alt={item.name} />
                  <a href={`/ads?cat=${item.slug}`}>{item.name}</a>
                </div>
              ))}
            </>
          </Menu>
        </Row>
      </Container>
    </HeaderArea>
  );
}
