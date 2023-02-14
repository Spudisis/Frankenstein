import styled from "styled-components";
import { ChildrenProp } from "../../ChildrenProp";

type ButtonHideProp = {
  rotate: string;
  clickF: () => void;
  left?: string;
  right?: string;
};

export const ButtonHide = ({ children, rotate, clickF, left, right }: ChildrenProp & ButtonHideProp) => {
  return (
    <ButtonHideStyled onClick={() => clickF()} rotate={rotate} left={left} right={right}>
      {children}
    </ButtonHideStyled>
  );
};

export const ButtonHideStyled = styled.button<Omit<ButtonHideProp, "clickF">>`
  position: absolute;
  z-index: 1000;
  background-color: var(--color-bg);
  border-radius: 50%;
  border: none;
  ${(props) => (props.left ? `left: ${props.left}` : "")};
  ${(props) => (props.right ? `right: ${props.right}` : "")};
  top: 50%;
  cursor: pointer;
  @media screen and (hover: hover) {
    &:hover {
      color: red;
    }
  }
  svg {
    font-size: 30px;
    transform: rotate(${(props) => props.rotate || "0deg"});
    transition: 0.3s ease;
  }
`;
