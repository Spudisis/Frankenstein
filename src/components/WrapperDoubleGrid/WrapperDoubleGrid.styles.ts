import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  width: 100%;
  @media screen and (max-width: 650px) {
    padding: 0 10px;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
`;
