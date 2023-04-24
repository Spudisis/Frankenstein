import styled from "styled-components";

export const IconSpan = styled.span<{ access: boolean }>`
  color: ${(props) => (props.access ? "green" : "red")};
  justify-self: center;
  font-size: 22px;
  padding-right: 5px;
`;
export const Grid = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-row-gap: 10px;
  @media screen and (max-width: 460px) {
    font-size: 16px;
  }
`;
