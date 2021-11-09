import styled from "styled-components";

export const ContainerArea = styled.div`
  a {
    text-decoration: none;
    color: #292929;
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  svg {
    cursor: pointer;
  }
  .slideContent {
    img {
      border-radius: 6px;
      margin: auto;
      height: 300px;
      width: 100%;
      object-fit: cover;
      margin-bottom: 20px;
    }
    h3,
    p {
    }
  }
  .slick-next {
    right: -50px;
    margin: 0px 20px;
  }
  .slick-prev {
    left: -50px;
    z-index: 1000;
    margin: 0px 20px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #999;
  }
  .imgHover {
    border-radius: 6px;
    position: relative;
    width: inherit;
    background-color: #c6e9e3;
    transition: 0.7s ease;
  }
  .middle {
    transition: 0.7s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .imgHover:hover img {
    opacity: 0.3;
  }

  .imgHover:hover .middle {
    opacity: 1;
  }

  .text {
    border-radius: 50px;
    border: 2px solid white;
    background-color: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 16px 32px;
    cursor: pointer;
    text-transform: uppercase;
  }

  .text:hover {
    color: white;
  }

  .logo {
    display: flex;
    flex: 1;
    a {
      transition: all ease 0.7s;
      letter-spacing: 8px;
      font-size: 30px;
      font-weight: bold;
      color: #292929;
      text-transform: uppercase;
    }
  }
`;
