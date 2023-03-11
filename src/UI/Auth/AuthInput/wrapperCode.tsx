import styled from "styled-components";

export const WrapperCode = styled.div`
  display: grid;

  grid-template-columns: 50% 50%;
  align-items: center;
`;
export const ButtonCode = styled.button.attrs({ type: "button" })`
  background-color: var(--color-bgc-button-active);
  border: 1px solid var(--color-bgc-button-active);
  font-size: 24px;
  border-radius: var(--br-button);
  padding: 10px 0px;
  cursor: pointer;
  color: var(--color-button);
  margin-left: 10px;

  @media screen and (max-width: 1800px) {
    font-size: 22px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
  &:hover {
    background-color: var(--color-bgc-button-hover);
  }
`;
