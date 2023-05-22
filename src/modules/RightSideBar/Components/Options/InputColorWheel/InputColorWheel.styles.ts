import styled from "styled-components";

export const WheelButton = styled.button<{ bgcColor: string }>`
  background-color: ${(props) => props.bgcColor};
  width: 100%;
  border: 0px;

  cursor: pointer;
`;

export const WrapperWheel = styled.div`
  position: absolute;
  right: 5px;
  z-index: 1;
  bottom: 0px;
  transform: translate(0%, 100%);
`;
