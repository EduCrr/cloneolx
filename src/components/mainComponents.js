import styled from "styled-components";

export const ContainerArea = styled.div`
  a {
    text-decoration: none;
    color: #292929;
    font-weight: 500;
  }

  svg {
    cursor: pointer;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #999;
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

    a {
      color: white;
    }
  }

  .imgHover:hover img {
    opacity: 0.3;
  }

  .imgHover:hover .middle {
    opacity: 1;
  }

  .slideContent {
    height: 450px;
    text-align: center;
    img {
      border-radius: 6px;
      margin: auto;
      height: 300px;
      width: 100%;
      object-fit: cover;
      margin-bottom: 20px;
    }
    h6 {
      font-weight: bold;
    }
    .imgHover {
      border-radius: 6px;
      position: relative;
      width: inherit;
      background: linear-gradient(to bottom right, #55c57a, #7ed56f);

      transition: 0.7s ease;
    }
  }

  .text {
    border-radius: 50px;
    border: 2px solid white;
    background-color: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 16px 25px;
    cursor: pointer;
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

  .login_Register_Form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input,
    select,
    textarea {
      border-radius: 6px;
      transition: all ease 0.4s;
      padding: 10px;
      width: 400px;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #eee;
      outline: 0;
      font-weight: 500;
    }

    input[type="checkbox"] {
      width: 50px;
    }
    button {
      cursor: pointer;
      border-radius: 50px;
      color: white;
      background: linear-gradient(to bottom right, #55c57a, #7ed56f);
      font-weight: bold;
      font-size: 16px;
      padding: 16px 32px;
      cursor: pointer;
      border: none;
    }
  }
  .rowSapce,
  .slideContent {
    padding: 0px 5px;
  }
  .space {
    margin-top: 6rem;
  }
  a.buttonSlider {
    border-radius: 50px;
    color: white;
    background: linear-gradient(to bottom right, #55c57a, #7ed56f);
    font-weight: bold;
    font-size: 16px;
    padding: 16px 32px;
    cursor: pointer;
    border: none;
  }
`;
export const ErrorMsg = styled.div`
  margin: 10px;
  font-weight: bold;
  color: #292929;
  background-color: #ffcaca;
  border: 2px solid red;
  padding: 5px;
  margin-bottom: 20px;
`;
