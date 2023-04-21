import React from "react";

import { Block, Wrapper } from "../../UI";
import { HeaderWrapper } from "../../UI";
import { HeaderLogo } from "./Components/HeaderLogo/HeaderLogo";
import { HeaderNameSite } from "./Components/HeaderNameSite/HeaderNameSite";
import { Button } from "./Components/ButtonHead/ButtonHead";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Block>
          <HeaderNameSite />
        </Block>
        <Block>
          <HeaderLogo />
        </Block>
        <Block>
          <Button text={"Build"} />
          <Button text={"Profile"} />
        </Block>
      </Wrapper>
    </HeaderWrapper>
  );
};
