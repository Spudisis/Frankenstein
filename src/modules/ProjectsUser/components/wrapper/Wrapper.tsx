import React from "react";
import { Item } from "../item";
import {
  StyledWrapper,
  Root,
  ButtonWrapper,
  InfoProject,
} from "./Wrapper.styles";
import { MiniatureProjects } from "src/domains";
import { MiniatureProjectsMock as items } from "src/__mocks__";
import { DefaultButton, NameSection } from "src/UI";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { build } from "src/routes/urlsPages";
export const Wrapper = () => {
  const statusLoad = false;

  return (
    <Root>
      <NameSection>
        <Trans i18nKey="UsersProjects.name">Мои проекты</Trans>
      </NameSection>
      {items.length > 0 ? (
        <>
          <StyledWrapper>
            {items.map((item: MiniatureProjects) => (
              <Item key={item.id} {...item} />
            ))}
          </StyledWrapper>
          <ButtonWrapper>
            <DefaultButton
              text="Show more"
              margin="10px 10px 0px"
              padding="5px 10px"
              disabled={statusLoad}
            />
          </ButtonWrapper>
        </>
      ) : (
        <>
          <ButtonWrapper>
            <InfoProject>Список проектов пуст</InfoProject>
            <Link to={build}>
              <DefaultButton
                text="Создайте проект"
                margin="10px 10px 0px"
                padding="5px 10px"
                disabled={statusLoad}
              />
            </Link>
          </ButtonWrapper>
        </>
      )}
    </Root>
  );
};
