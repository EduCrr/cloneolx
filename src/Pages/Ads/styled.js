import styled from "styled-components";

export const AdsArea = styled.div`
  display: flex;

  .leftSide {
    width: 250px;
    margin-right: 40px;
    .login_Register_Form input,
    select {
      width: 250px !important;
    }
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
      width: 250px !important;
      border-radius: 6px;
    }
    .categoryItem {
      padding: 10px 0px;

      margin-bottom: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        margin: 0px 10px;
        font-weight: 500;
      }
      img {
        margin: 0px 10px;
      }
      &:hover,
      &.active {
        background-color: white;
        width: 100%;
      }
    }
  }

  .rightSide {
    flex: 1;
    .list {
      display: flex;
      flex-wrap: wrap;
      .slideContent {
        width: 33%;
        margin-bottom: 20px;
        img {
          margin-bottom: 0px;
        }
        h6 {
          margin-top: 15px;
        }
        .imgHover {
          width: auto;
        }
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px auto;
      .pagItem {
        margin: 5px;
        padding: 10px;
        background-color: white;
        color: #292929;
        cursor: pointer;

        &.active {
          background: linear-gradient(to bottom right, #55c57a, #7ed56f);
          color: white;
        }
      }
    }
  }
`;
