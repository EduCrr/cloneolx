import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SearchArea } from "./styled";
import { FaUserAlt } from "react-icons/fa";

export default function Search() {
  return (
    <SearchArea>
      <Container>
        <Row>
          <form>
            <Col md>
              <input id="searchinput" type="search" placeholder="Buscar" />
              <span
                id="searchclear"
                className="glyphicon glyphicon-remove-circle"
              ></span>
            </Col>
            <Col md>
              <select>
                <option>Selecione algum estado</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
          </form>
        </Row>
      </Container>
    </SearchArea>
  );
}
