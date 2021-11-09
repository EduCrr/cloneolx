import styled from "styled-components";

export const HeaderArea = styled.header`
  .menu {
    margin: 15px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;

    nav {
      ul,
      li {
        margin: 0px 5px;
        padding: 0;
        list-style-type: none;
      }
      ul {
        display: flex;
        align-items: center;
      }
    }
  }
  .slider {
    img {
      width: 100%;
      height: 85vh;
      object-fit: cover;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .slick-next {
      right: 0px;
      margin: 0px 20px;
    }
    .slick-prev {
      left: 0px;
      z-index: 1000;
      margin: 0px 20px;
    }
  }
`;
export const Menu = styled.div`
  right: ${(props) => (props.ativo ? "0px" : "-100px !important")};
  padding: 20px;
  height: 100vh;
  transition: all ease 0.7s;
  right: 0px;
  position: fixed;
  z-index: 999;
  background-color: white;
  border-left: 1px solid #eee;
  display: flex;
  flex-direction: column;
  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }
  .MenuArea {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    & + div {
      border-top: 1px solid #eee;
    }
  }
`;
