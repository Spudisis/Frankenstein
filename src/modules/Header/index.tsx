import React from "react";
import { Block, Button, DefaultButton, Wrapper } from "../../UI";
import { HeaderWrapper } from "../../UI";
import { HeaderLogo } from "./Components/HeaderLogo/HeaderLogo";
import { HeaderNameSite } from "./Components/HeaderNameSite/HeaderNameSite";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Block>
          <DefaultButton
            text="Main"
            margin="0px 10px 0px 0px"
            width="125px"
            fontSize={18}
          />
          <DefaultButton
            text="Templates"
            margin="0px 10px 0px 0px"
            width="125px"
            fontSize={18}
          />
        </Block>
        <Block>
          <HeaderLogo />
          <HeaderNameSite />
        </Block>
        <Block>
          <DefaultButton
            text="Build"
            margin="0px 10px 0px 0px"
            width="125px"
            fontSize={18}
          />
          <DefaultButton
            text="Профиль"
            margin="0px 10px 0px 0px"
            width="125px"
            fontSize={18}
          />
        </Block>
      </Wrapper>
    </HeaderWrapper>
  );
};
