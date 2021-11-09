import styled from "styled-components";

export const HomeArea = styled.div``;
export const SliderArea = styled.div`
  padding-top: 5rem;
  .rowSapce,
  .slideContent {
    padding: 0px 5px;
  }
`;
export const Gallery = styled.div`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1.2rem;

  .gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 6px;
  }

  .gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 12;
  }

  .gallery__item--2 {
    grid-column-start: 5;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 6;
  }
  .gallery__item--3 {
    grid-column-start: 5;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 12;

    /** Alternative Syntax **/
    /* grid-column: 3 / span 2;  */
    /* grid-row: 1 / span 2; */
  }
  .gallery__text {
    position: relative;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    h3 {
      margin-bottom: 40px;
    }
    a {
      border-radius: 50px;
      background-color: none;
      color: white;
      background-color: #292929;
      font-weight: bold;
      font-size: 16px;
      padding: 16px 32px;
      cursor: pointer;
      text-transform: uppercase;
    }
  }
`;
