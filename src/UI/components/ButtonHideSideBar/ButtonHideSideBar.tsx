import styled, { css } from "styled-components";
import { ChildrenProp } from "../../ChildrenProp";

type ButtonHideProp = {
  rotate: string;
  clickF: () => void;
  left?: string;
  right?: string;
  createTemplate?: boolean;
  hide?: boolean;
};

export const ButtonHide = ({
  children,
  rotate,
  clickF,
  left,
  right,
  createTemplate = false,
  hide = false,
}: ChildrenProp & ButtonHideProp) => {
  return (
    <ButtonHideStyled
      onClick={() => clickF()}
      rotate={rotate}
      left={left}
      right={right}
      createTemplate={createTemplate}
      hide={hide}
    >
      {children}
    </ButtonHideStyled>
  );
};

export const ButtonHideStyled = styled.button<Omit<ButtonHideProp, "clickF">>`
  position: absolute;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0);

  color: var(--color-text);
  border: none;
  ${(props) => (props.left ? `left: ${props.left}` : "")};
  ${(props) => (props.right ? `right: ${props.right}` : "")};
  top: 50%;
  cursor: pointer;

  & > svg {
    font-size: 30px;
    transform: rotate(${(props) => props.rotate || "0deg"});
    transition: 0.3s ease;
    @media screen and (hover: hover) {
      fill: black;
    }
  }
  ${({ createTemplate }) =>
    createTemplate &&
    css`
      ${(props: any) =>
        props.hide
          ? "transform: translate(-50%, -50%);"
          : "transform: translate(-600%, -50%);"};
      ${(props: any) => (props.hide ? "top: -5px" : "bottom: -120px")};
      svg path {
        fill: #585757;
      }
    `}
`;
