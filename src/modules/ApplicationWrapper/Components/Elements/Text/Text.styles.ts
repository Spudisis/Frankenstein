import styled from "styled-components";

export const TextStyled = styled.span<any>`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#000000"};
`;
