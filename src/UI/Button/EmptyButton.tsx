import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";
type Props = {
  fontSize?: string;
  redirect?: boolean;
  onClick?: () => void;
};

export const EmptyButton = ({
  children,
  fontSize,
  redirect,
  onClick,
}: ChildrenProp & Props) => {
  return (
    <StyledEmpty
      fontSize={fontSize}
      redirect={redirect}
      onClick={() => onClick && onClick()}
    >
      {children}
    </StyledEmpty>
  );
};
const StyledEmpty = styled.button.attrs({
  type: "button",
})<Props>`
  background-color: rgba(255, 255, 255, 0);
  outline: none;
  border: none;
  font-size: ${(props) => props.fontSize || "30px"};
  color: white;
  cursor: pointer;
  ${(props) => (props.redirect ? "text-decoration:underline" : "")};
`;
