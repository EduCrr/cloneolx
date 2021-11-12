import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { SearchArea } from "./styled";
import { FaUserAlt } from "react-icons/fa";
import api from "../../api";
export default function Search() {
  const [listaEstado, setListaEstado] = useState([]);

  useEffect(() => {
    async function loadStates() {
      const list = await api.getlist();
      setListaEstado(list.states);
    }
    loadStates();
  }, []);

  return (
    <SearchArea>
      <Container>
        <Row>
          <div className="searchBox">
            <form method="GET" action={`/ads`}>
              <input
                id="searchinput"
                name="q"
                type="search"
                placeholder="Buscar"
              />
              <span
                id="searchclear"
                className="glyphicon glyphicon-remove-circle"
              ></span>
              <select name="state">
                {listaEstado.map((item, k) => (
                  <option key={k} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>

              <button>Pesquisar</button>
            </form>
          </div>
        </Row>
      </Container>
    </SearchArea>
  );
}
