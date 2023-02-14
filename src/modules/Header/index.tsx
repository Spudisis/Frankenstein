import React from "react";
import { Block, Button, Wrapper } from "../../UI";
import { HeaderWrapper } from "../../UI";
import { HeaderLogo } from "./Components/HeaderLogo/HeaderLogo";
import { HeaderNameSite } from "./Components/HeaderNameSite/HeaderNameSite";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Block>
          <HeaderLogo />
          <HeaderNameSite />
        </Block>
        <Block>
          <Button name="Регистрация" margin="0px 10px 0px 0px" padding="5px 10px" />
        </Block>
      </Wrapper>
    </HeaderWrapper>
  );
};
