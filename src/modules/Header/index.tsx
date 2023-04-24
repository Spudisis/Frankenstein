import { Block, Wrapper, HeaderWrapper } from "src/UI";
import { HeaderLogo, HeaderNameSite, Menu } from "./Components/";
import {
  StyledMedia650,
  StyledMedia650View,
  StyledMedia840,
} from "./Header.styles";
import { Links } from "./Components/Links";
export const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Block>
          <HeaderNameSite />
        </Block>
        <StyledMedia840>
          <Block>
            <HeaderLogo />
          </Block>
        </StyledMedia840>
        <StyledMedia650>
          <Block>
            <Links />
          </Block>
        </StyledMedia650>
        <StyledMedia650View>
          <Block>
            <Menu />
          </Block>
        </StyledMedia650View>
      </Wrapper>
    </HeaderWrapper>
  );
};
