import styled from "styled-components";

export const DefaultWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    margin: 0px 10px;
  }
`;
