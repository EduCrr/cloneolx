import styled from "styled-components";

export const AdArea = styled.div`
  .imgSlider {
    img {
      height: 450px;
      width: 100%;
      border-radius: 6px;
      object-fit: cover;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .description {
      text-align: left;
    }
    .price {
      h3 {
        font-weight: bold;
      }
    }
    .autor {
      display: flex;
      flex-direction: column;
      a {
        width: 110px;
        border-radius: 50px;
        text-align: center;
        color: white;
        background: linear-gradient(to bottom right, #55c57a, #7ed56f);
        font-weight: bold;
        font-size: 16px;
        padding: 12px 22px;
        cursor: pointer;
        border: none;
      }
      p,
      a,
      h2 {
        margin: 10px 0px;
      }
    }
  }
  .slideContent {
    margin-bottom: 25px;
    img {
      margin-bottom: 0px;
    }
    h6 {
      margin-top: 15px;
    }
  }
`;
export const Fake = styled.div`
  background-color: #eee;
  height: ${(props) => props.height || 20}px;
`;
