import styled from "styled-components";

export const SearchArea = styled.div`
  margin-top: 5rem;
  text-align: center;
  background-color: #eee;
  color: #292929;
  padding: 20px;

  .searchBox {
    display: flex;

    form {
      display: flex;
      flex: 1;
      align-items: center;

      input {
        flex: 1;
      }

      button {
        border-radius: 50px;
        color: white;
        background: linear-gradient(to bottom right, #55c57a, #7ed56f);
        font-weight: bold;
        font-size: 16px;
        padding: 12px 22px;
        cursor: pointer;
        border: none;
      }
    }
  }
  input,
  select {
    border-radius: 6px;
    transition: all ease 0.4s;
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    outline: 0;
    font-weight: 500;
  }
`;
