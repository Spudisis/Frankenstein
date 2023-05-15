import React from "react";

import {
  StyledWrapper,
  Root,
  ButtonWrapper,
  InfoProject,
} from "./Wrapper.styles";
import { MiniatureProjects } from "src/domains";

import { DefaultButton, NameSection } from "src/UI";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { BUILD } from "src/routes/urlsPages";

import { STATUS_LOADING } from "src/domains";
import { observer } from "mobx-react-lite";
import { Item } from "src/components";
import { WrapperTypes } from "./Wrapper.types";
import ReactPaginate from "react-paginate";
import { Paginate } from "./Paginate/Paginate";
export const Wrapper = observer(
  ({
    projects,
    size,
    loading,
    offset,
    limit,
    nameSection,
    createNewProject,
    ShowMore,
  }: WrapperTypes) => {
    const statusLoading = loading === STATUS_LOADING.LOADING;

    return (
      <Root>
        <NameSection>
          <Trans
            i18nKey={
              nameSection === "Мои проекты"
                ? "UsersProjects.name"
                : "UsersProjects.availableName"
            }
          >
            {nameSection}
          </Trans>
        </NameSection>
        {projects.length > 0 ? (
          <>
            <StyledWrapper>
              {projects.map((item: MiniatureProjects) => (
                <Item key={item.id} {...item} />
              ))}
            </StyledWrapper>

            {size > offset && (
              <ButtonWrapper>
                <Paginate
                  size={size}
                  limit={limit}
                  ShowMore={ShowMore}
                  statusLoading={statusLoading}
                />
              </ButtonWrapper>
            )}
          </>
        ) : (
          <>
            <ButtonWrapper>
              <InfoProject>Список проектов пуст</InfoProject>
              {/* <Link to={BUILD}> */}
              <DefaultButton
                text="Создайте проект"
                margin="10px 10px 0px"
                padding="5px 10px"
                padding1800="5px 10px"
                disabled={statusLoading}
                onClick={createNewProject}
              />
              {/* </Link> */}
            </ButtonWrapper>
          </>
        )}
      </Root>
    );
  }
);
