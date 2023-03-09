import React, { Ref, RefObject } from "react";
import styled from "styled-components";
import { ChildrenProp } from "../../ChildrenProp";

type Props = {
  captchaRes: boolean | null;
};

type RefProps = Ref<HTMLDivElement>;

export const CaptchaWrapper = React.forwardRef(
  (props: ChildrenProp & Props, ref: RefProps) => {
    return (
      <CaptchaWrapperStyled captchaRes={props.captchaRes} ref={ref}>
        {props.children}
      </CaptchaWrapperStyled>
    );
  }
);

export const CaptchaWrapperStyled = styled.div<Props>`
  margin: 20px 0px;
  height: 74px;
  & > div > div {
    ${(props) =>
      props.captchaRes === false
        ? "border: 1px solid red"
        : props.captchaRes === true
        ? "border: 1px solid green"
        : ""};
  }
  @media screen and (max-width: 1800px) {
    margin: 10px 0px;
  }

  @media screen and (max-width: 500px) {
    margin: 5px 0px 10px;
  }
`;
