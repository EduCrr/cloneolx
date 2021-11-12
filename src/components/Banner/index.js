import React from "react";
import { Container, Row } from "react-bootstrap";
import { BannerArea } from "./styled";
import { FaLocationArrow } from "react-icons/fa";

export default function Banner({ name }) {
  return (
    <BannerArea>
      <Container>
        <Row>
          <div className="banner">
            <h1>{name}</h1>
            <FaLocationArrow size="30" />
          </div>
        </Row>
      </Container>
    </BannerArea>
  );
}
