import React from "react";

import { Block, Wrapper } from "../../UI";
import { HeaderWrapper } from "../../UI";
import { HeaderLogo } from "./Components/HeaderLogo/HeaderLogo";
import { HeaderNameSite } from "./Components/HeaderNameSite/HeaderNameSite";
import { Button } from "./Components/ButtonHead/ButtonHead";
import { Link } from "react-router-dom";
import { PROFILE, build } from "../../routes/urlsPages";
import { observer } from "mobx-react-lite";
import { AuthStore } from "../../store/Auth";
export const Header = observer(() => {
  const idUser = AuthStore.user.id;
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
          <Link to={build}>
            <Button text={"Build"} />
          </Link>
          <Link to={PROFILE + idUser}>
            <Button text={"Profile"} />
          </Link>
        </Block>
      </Wrapper>
    </HeaderWrapper>
  );
});
