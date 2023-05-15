import styled from "styled-components";

export const StylesPagination = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    color: white;
    padding-inline-start: 0px;
    li {
      margin: 0 10px;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      background-color: var(--color-bgc-button-active);
      border: 1px solid var(--color-bgc-button-active);
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
