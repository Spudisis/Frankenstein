import styled from "styled-components";
export const ButtonHeader = styled.button`
  background-color: var(--color-bgc-button-active);
  border: 1px solid var(--color-bgc-button-active);
  font-size: 18px;
  border-radius: var(--br-button);
  margin: 0px 10px;
  width: 125px;
  padding: 10px 0px;
  color: var(--color-button);
  display: flex;
  cursor: pointer;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: 0.2s ease;
  @media screen and (hover: hover) {
    &:hover {
      background-color: var(--color-bgc-button-hover);
    }
  }
  @media screen and (max-width: 840px) {
    margin: 0 5px;
    width: 100px;
  }
  @media screen and (max-width: 600px) {
    width: 150px;
    font-size: 22px;
  }
`;
