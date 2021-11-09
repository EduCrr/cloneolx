import styled from "styled-components";

export const SearchArea = styled.div`
  padding-top: 5rem;
  text-align: center;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #292929;

    input,
    select {
      width: 96%;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #eee;
      outline: 0;
      font-weight: 500;
    }
  }
`;
