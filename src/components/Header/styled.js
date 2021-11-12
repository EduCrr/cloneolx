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
        button {
          text-decoration: none;
          color: #292929;
          background-color: transparent;
          border: none;
          font-weight: 500;
        }
      }
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
