import React from 'react'

import { StyledWrapper, Root, ButtonWrapper, InfoProject } from './Wrapper.styles'
import { type MiniatureProjects, STATUS_LOADING } from 'src/domains'
import { DefaultButton, NameSection } from 'src/UI'
import { Trans } from 'react-i18next'

import { observer } from 'mobx-react-lite'
import { Item, SkeletonItem } from 'src/components'
import { type WrapperTypes } from './Wrapper.types'
import { Paginate } from './Paginate/Paginate'
import { PROJECTS } from 'src/routes/urlsPages'
import { Link } from 'react-router-dom'

export const Wrapper = observer(
  ({ projects, size, loading, offset, limit, nameSection, path, ShowMore }: WrapperTypes) => {
    const statusLoading = loading === STATUS_LOADING.LOADING
    const emptyArray = Array(limit).fill(undefined)
    return (
      <Root>
        <NameSection>
          <Trans i18nKey={nameSection === 'Мои проекты' ? 'UsersProjects.name' : 'UsersProjects.availableName'}>
            {nameSection}
          </Trans>
        </NameSection>
        {projects.length > 0 ? (
          <>
            <StyledWrapper>
              {!statusLoading
                ? projects.map((item: MiniatureProjects) => <Item key={item.id} {...item} />)
                : emptyArray.map((_, index) => <SkeletonItem key={index} />)}
            </StyledWrapper>

            {size > offset && (
              <ButtonWrapper>
                <Paginate
                  size={size}
                  limit={limit}
                  ShowMore={ShowMore}
                  statusLoading={statusLoading}
                  page={offset - 1}
                />
              </ButtonWrapper>
            )}
          </>
        ) : (
          <>
            <ButtonWrapper>
              <InfoProject>Список проектов пуст</InfoProject>
              {path !== PROJECTS && (
                <Link to={PROJECTS}>
                  <DefaultButton
                    text="Создайте проект"
                    margin="10px 10px 0px"
                    padding="5px 10px"
                    padding1800="5px 10px"
                    disabled={statusLoading}
                  />
                </Link>
              )}
            </ButtonWrapper>
          </>
        )}
      </Root>
    )
  }
)
