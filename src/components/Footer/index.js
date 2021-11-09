import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FooterArea } from "./styled";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <FooterArea>
      <Container>
        <Row>
          <div className="footerContent mb-3">
            <div className="logo">
              <Link to="/">FURNDE</Link>
            </div>
            <div>
              <BsFacebook size="25" />
              <AiFillInstagram size="30" />
              <AiFillTwitterCircle size="30" />
            </div>
          </div>
          <p>Todos os direitos reservados 2021</p>
        </Row>
      </Container>
    </FooterArea>
  );
}
